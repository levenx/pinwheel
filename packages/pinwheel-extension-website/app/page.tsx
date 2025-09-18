"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DownloadPage() {
  const [activeTab, setActiveTab] = useState("features");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-50">
      {/* Hero Section */}
      <header
        className={`pt-16 pb-24 px-6 md:px-12 lg:px-24 text-center transition-opacity duration-800 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl transform hover:scale-105 hover:rotate-3 transition-all duration-300">
            <Image
              src="/images/icon.png"
              alt="Pinwheel"
              width={100}
              height={100}
            />
          </div>
        </div>

        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 transition-opacity duration-800 delay-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Pinwheel 浏览器扩展
        </h1>

        <p
          className={`text-xl md:text-2xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300 mb-8 transition-opacity duration-800 delay-400 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          高效管理您的浏览器标签、书签和历史记录，支持本地定制化短链功能
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-800 delay-600 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <a
            href="https://chromewebstore.google.com/detail/pinwheel-%E6%B5%8F%E8%A7%88%E5%99%A8%E6%9C%AC%E5%9C%B0%E8%B5%84%E6%BA%90%E9%AB%98%E6%95%88%E7%AE%A1%E7%90%86%E3%80%81%E7%BB%BC%E5%90%88%E6%90%9C%E7%B4%A2/dajalnachaoglhndkaoafofahmmjinge?authuser=0"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            target="_blank"
          >
            立即下载
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
          >
            了解更多
          </a>
        </div>
      </header>

      {/* Main Features */}
      <section
        id="features"
        className="py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-800"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              className={`px-6 py-3 rounded-full font-medium ${
                activeTab === "features"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
              } transform hover:scale-105 active:scale-95 transition-transform duration-200`}
              onClick={() => setActiveTab("features")}
            >
              核心功能
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium ${
                activeTab === "guide"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
              } transform hover:scale-105 active:scale-95 transition-transform duration-200`}
              onClick={() => setActiveTab("guide")}
            >
              使用指南
            </button>
            <button
              className={`px-6 py-3 rounded-full font-medium ${
                activeTab === "faq"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-100"
              } transform hover:scale-105 active:scale-95 transition-transform duration-200`}
              onClick={() => setActiveTab("faq")}
            >
              常见问题
            </button>
          </div>

          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
              <FeatureCard
                icon="🔍"
                title="一体化搜索"
                description="Pinwheel 提供了强大的搜索功能，可以同时在您的标签、书签和历史记录中查找内容。"
              />
              <FeatureCard
                icon="🏷️"
                title="智能标签管理"
                description="自动整理和分类您的浏览器标签，让您的工作空间更加整洁有序。"
              />
              <FeatureCard
                icon="🔗"
                title="本地短链功能"
                description="创建和管理自定义短链接，所有数据都存储在您的本地设备上。"
              />
              <FeatureCard
                icon="📊"
                title="使用统计"
                description="跟踪您的浏览器使用习惯，了解您最常用的网站和应用。"
              />
              <FeatureCard
                icon="💤"
                title="标签休眠"
                description="自动休眠不常用的标签以节省系统资源，提高浏览器性能。"
              />
              <FeatureCard
                icon="⚡"
                title="快捷键支持"
                description="使用键盘快捷键快速访问 Pinwheel 的各项功能，提高工作效率。"
              />
            </div>
          )}

          {activeTab === "guide" && (
            <div className="space-y-12 transition-all duration-500">
              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">快速开始</h3>
                <ol className="space-y-4 text-slate-700 dark:text-slate-200">
                  <li className="flex items-start gap-4">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      1
                    </span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">安装扩展</h4>
                      <p>
                        从浏览器应用商店下载并安装 Pinwheel
                        扩展，安装完成后，您将在浏览器工具栏看到 Pinwheel 图标。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      2
                    </span>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        首次使用设置
                      </h4>
                      <p>
                        点击浏览器工具栏中的 Pinwheel
                        图标，按照提示完成初始设置，授予必要的权限以访问您的标签、书签和历史记录。
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">键盘快捷键</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded font-mono">
                      Alt+P
                    </span>
                    <span>打开 Pinwheel 主界面</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded font-mono">
                      Alt+K
                    </span>
                    <span>快速搜索</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded font-mono">
                      Alt+L
                    </span>
                    <span>管理短链</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "faq" && (
            <div className="space-y-6 transition-all duration-500">
              <FAQItem
                question="为什么我看不到某些历史记录？"
                answer="Pinwheel 只能访问浏览器授予权限的历史记录。请确保您已在浏览器设置中允许 Pinwheel 访问您的完整浏览历史。"
              />
              <FAQItem
                question="短链会同步到云端吗？"
                answer="不会，所有短链都仅存储在您的本地设备上，确保您的隐私安全。"
              />
              <FAQItem
                question="Pinwheel 支持哪些浏览器？"
                answer="Pinwheel 目前支持 Chrome、Firefox、Edge 和 Safari 等主流浏览器。"
              />
              <FAQItem
                question="如何备份我的短链数据？"
                answer="您可以在设置中导出短链数据为 JSON 文件，以便在需要时进行备份或迁移。"
              />
            </div>
          )}
        </div>
      </section>

      {/* Download Section */}
      <section
        id="download"
        className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 transition-opacity duration-800">
            立即获取 Pinwheel 扩展
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 transition-opacity duration-800 delay-200">
            支持所有主流浏览器，免费下载使用
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <BrowserButton name="Chrome" icon="chrome" />
            <BrowserButton name="Firefox" icon="firefox" />
            <BrowserButton name="Edge" icon="edge" />
            <BrowserButton name="Safari" icon="safari" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-300 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="mb-6">© 2023 Pinwheel 浏览器扩展. 保留所有权利.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              隐私政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              使用条款
            </a>
            <a href="#" className="hover:text-white transition-colors">
              联系我们
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden transition-all duration-500">
      <button
        className="w-full p-6 text-left font-semibold text-lg flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      <div
        className="bg-white dark:bg-slate-800 overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="p-6 pt-0 text-slate-600 dark:text-slate-300">
          {answer}
        </div>
      </div>
    </div>
  );
}

// Browser Button Component
function BrowserButton({ name, icon }: { name: string; icon: string }) {
  const getBrowserIcon = () => {
    switch (icon) {
      case "chrome":
        return "🟢";
      case "firefox":
        return "🧡";
      case "edge":
        return "🔵";
      case "safari":
        return "🟠";
      default:
        return "🌐";
    }
  };

  return (
    <a
      href="#"
      className="block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700 transform hover:scale-105 active:scale-95"
    >
      <div className="text-4xl mb-3">{getBrowserIcon()}</div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
        下载扩展
      </p>
    </a>
  );
}
