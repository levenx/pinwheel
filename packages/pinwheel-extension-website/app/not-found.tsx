"use client";
import { Head } from "nextra/components";
import Image from "next/image";
import "nextra-theme-docs/style.css";
import "./globals.css";
import { useState, useEffect, useRef } from "react";

// 添加Pagefind的类型声明
declare global {
  interface Window {
    Pagefind?: {
      create: () => Promise<{
        search: (term: string) => Promise<SearchResult[]>;
      }>;
    };
  }
}

interface SearchResult {
  url: string;
  excerpt: string;
  meta: {
    title: string;
  };
}

export default function NotFound() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const pagefindRef = useRef<any>(null);

  // 初始化Pagefind
  useEffect(() => {
    const initPagefind = async () => {
      try {
        // 检查是否在浏览器环境中
        if (typeof window === "undefined") return;

        // 开发环境下，我们可能没有pagefind索引，使用模拟数据
        if (process.env.NODE_ENV === "development") {
          // 模拟Pagefind实例，用于开发环境测试
          pagefindRef.current = {
            search: async (term: string) => {
              // 模拟搜索结果
              const mockData = [
                {
                  url: "/",
                  title: "Pinwheel浏览器扩展",
                  excerpt:
                    "Pinwheel浏览器扩展主页 - 一体化搜索标签、书签和历史记录",
                },
                {
                  url: "/docs",
                  title: "使用文档",
                  excerpt: "使用文档 - 了解如何安装和使用Pinwheel扩展",
                },
                {
                  url: "/downloads",
                  title: "下载扩展",
                  excerpt: "下载页面 - 获取Pinwheel浏览器扩展的最新版本",
                },
              ];

              // 过滤搜索结果
              const lowerTerm = term.toLowerCase();
              const filteredResults = mockData.filter(
                (item) =>
                  item.title.toLowerCase().includes(lowerTerm) ||
                  item.excerpt.toLowerCase().includes(lowerTerm)
              );

              // 转换为Pagefind期望的格式
              const mockResults = filteredResults.map((item) => ({
                url: item.url,
                excerpt: async () => item.excerpt,
                data: async (field: string) =>
                  field === "title" ? item.title : "",
              }));

              return {
                results: mockResults,
              };
            },
          };
        } else {
          // 生产环境下，动态加载Pagefind脚本
          const pagefindScript = document.createElement("script");
          pagefindScript.src = "/_pagefind/pagefind.js";

          // 使用Promise包装脚本加载，更可靠地处理加载状态
          await new Promise((resolve, reject) => {
            pagefindScript.onload = resolve;
            pagefindScript.onerror = reject;
            document.body.appendChild(pagefindScript);
          });

          if (window.Pagefind) {
            pagefindRef.current = await window.Pagefind.create();
          } else {
            throw new Error("Pagefind脚本已加载但window.Pagefind不存在");
          }

          return () => {
            document.body.removeChild(pagefindScript);
          };
        }
      } catch (error) {
        console.error("Pagefind初始化失败:", error);
        // 即使初始化失败，我们也可以提供模拟搜索功能
        pagefindRef.current = {
          search: async () => ({
            results: [],
          }),
        };
      }
    };

    initPagefind();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchTerm.trim() || !pagefindRef.current) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    setShowResults(true);

    try {
      const results = await pagefindRef.current.search(searchTerm);
      if (results) {
        const formattedResults = await Promise.all(
          results.results.map(async (result: any) => ({
            url: result.url,
            excerpt: await result.excerpt(),
            meta: {
              title: (await result.data("title")) || "无标题",
            },
          }))
        );
        setSearchResults(formattedResults);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("搜索失败:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head>
        <title>页面未找到 - Pinwheel浏览器扩展</title>
      </Head>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center py-16 px-6 md:px-12 lg:px-24 text-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
          {/* 404 动画和图标 */}
          <div className="mb-12 relative">
            <div className="w-64 h-64 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 animate-pulse bg-blue-500/5 rounded-full" />
              <div className="relative">
                <Image
                  src="/images/icon.png"
                  alt="Pinwheel"
                  width={150}
                  height={150}
                  className="opacity-80"
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 shadow-lg rounded-full w-24 h-24 flex items-center justify-center text-4xl font-bold text-blue-600 dark:text-blue-400">
              404
            </div>
          </div>

          {/* 标题和描述 */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800 dark:text-white">
            抱歉，我们找不到您要的页面
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8">
            您请求的页面不存在或已被移动。请检查URL是否正确，或尝试使用下方的搜索功能。
          </p>

          {/* 搜索框 */}
          <form onSubmit={handleSearch} className="max-w-md w-full mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="搜索内容..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSearching ? "搜索中..." : "搜索"}
              </button>
            </div>
          </form>

          {/* 搜索结果 */}
          {showResults && (
            <div className="max-w-2xl w-full mb-12">
              {isSearching ? (
                <div className="text-center py-8">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-600 mb-4"></div>
                  <p className="text-slate-600 dark:text-slate-300">
                    正在搜索相关内容...
                  </p>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                    找到 {searchResults.length} 个结果
                  </h3>
                  <div className="space-y-4">
                    {searchResults.map((result, index) => (
                      <a
                        key={index}
                        href={result.url}
                        className="block p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                      >
                        <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {result.meta.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2">
                          {result.excerpt}
                        </p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">
                          {result.url}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 bg-white dark:bg-slate-800 rounded-xl shadow-md">
                  <p className="text-slate-600 dark:text-slate-300">
                    没有找到与 "{searchTerm}" 相关的内容
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setShowResults(false);
                    }}
                    className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    清空搜索
                  </button>
                </div>
              )}
            </div>
          )}

          {/* 快速链接 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            <a
              href="/"
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center transform hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 text-blue-600">🏠</span>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                返回主页
              </h3>
            </a>
            <a
              href="/downloads"
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center transform hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 text-blue-600">⬇️</span>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                下载扩展
              </h3>
            </a>
            <a
              href="/docs"
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center transform hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 text-blue-600">📚</span>
              <h3 className="font-bold text-lg text-slate-800 dark:text-white">
                使用文档
              </h3>
            </a>
          </div>

          {/* 联系支持 */}
          <div className="text-slate-500 dark:text-slate-400">
            <p>
              仍然有问题？{" "}
              <a
                href="mailto:support@pinwheel.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                联系我们的支持团队
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
