"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FeatureCard } from "./components/FeatureCard";
import { FAQItem } from "./components/FAQItem";
import TestimonialCard from "./components/TestimonialCard";
import BlogPostCard from "./components/BlogPostCard";

// Import data
import features from "./data/features.json";
import faq from "./data/faq.json";
import usageGuide from "./data/usageGuide.json";
import testimonials from "./data/testimonials.json";
import blogPosts from "./data/blogPosts.json";

export default function DownloadPage() {
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
        <div className="max-w-6xl mx-auto space-y-24">
          {/* 核心功能部分 */}
          <div className="scroll-mt-24" id="core-features">
            <h2 className="text-3xl font-bold mb-12 text-center">核心功能</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>

          {/* 使用指南部分 */}
          <div className="scroll-mt-24" id="usage-guide">
            <h2 className="text-3xl font-bold mb-12 text-center">使用指南</h2>
            <div className="space-y-12">
              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">快速开始</h3>
                <ol className="space-y-4 text-slate-700 dark:text-slate-200">
                  {usageGuide.quickStart.map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                        {item.step}
                      </span>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">
                          {item.title}
                        </h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">键盘快捷键</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700 dark:text-slate-200">
                  {usageGuide.keyboardShortcuts.map((shortcut, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded font-mono">
                        {shortcut.shortcut}
                      </span>
                      <span>{shortcut.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 高级功能 */}
              <div className="bg-slate-50 dark:bg-slate-700 p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">高级功能</h3>
                <div className="space-y-8">
                  {usageGuide.advancedFeatures.map((feature, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg mb-2">
                        {feature.title}
                      </h4>
                      <p className="mb-4 text-slate-600 dark:text-slate-300">
                        {feature.description}
                      </p>
                      <div className="pl-4 border-l-2 border-blue-500">
                        <ol className="list-decimal pl-5 space-y-2 text-slate-700 dark:text-slate-200">
                          {feature.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 常见问题部分 */}
          <div className="scroll-mt-24" id="faq-section">
            <h2 className="text-3xl font-bold mb-12 text-center">常见问题</h2>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <FAQItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          {/* 用户评价部分 */}
          <div className="scroll-mt-24" id="testimonials-section">
            <h2 className="text-3xl font-bold mb-12 text-center">用户评价</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          {/* 开发者博客部分 */}
          <div className="scroll-mt-24" id="blog-section">
            <h2 className="text-3xl font-bold mb-12 text-center">开发者博客</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <button className="px-6 py-3 bg-white dark:bg-slate-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow hover:shadow-md transition duration-300 border border-blue-200 dark:border-blue-800">
                查看更多文章
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
