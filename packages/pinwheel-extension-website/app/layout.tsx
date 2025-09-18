import { Footer, Layout, Navbar } from "nextra-theme-docs";
import Image from "next/image";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;

// 自定义导航栏组件
const CustomNavbar = () => (
  <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 font-bold text-xl">Pinwheel</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="/download"
          className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          下载
        </a>
        <a
          href="mailto:contact@pinwheel.com"
          className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          联系我们
        </a>
      </div>
    </div>
  </nav>
);

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-1">
        <Image src="/images/icon.png" alt="Nextra" width={24} height={24} />
        <span className="text-slate-700 dark:text-slate-200 font-bold text-xl">Pinwheel</span>
      </div>
    }
  ></Navbar>
);

const footer = <Footer>MIT {new Date().getFullYear()} © Pinwheel.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
