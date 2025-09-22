import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import Image from "next/image";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <div className="flex items-center gap-1">
        <Image src="/images/icon.png" alt="Nextra" width={24} height={24} />
        <span className="text-slate-700 dark:text-slate-200 font-bold text-xl">
          Pinwheel
        </span>
      </div>
    }
  ></Navbar>
);

const footer = (
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
);

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
