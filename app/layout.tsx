import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ClickTracker from "./components/ClickTracker";
import AntiAdblockPopup from "./components/AntiAdblockPopup";

export const metadata: Metadata = {
  title: "viprbx",
  description:
    "Get virtual currency for Roblox. Visit this site to receive funds for your Roblox games.",
  icons: {
    icon: [{ rel: "icon", url: "/images/web-logo.png", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://d2zk8mk8hghu3d.cloudfront.net/4fc7cdb.js"
          strategy="afterInteractive"
        />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5356953527878151"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          id="popunder-ads"
          type="text/javascript"
          data-cfasync="false"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `/*<![CDATA[/* */
(function(){var p=window,r="b7e4ddd8b8d35c5bea2629cd7b6af264",x=[["siteId",796*151+852+351+5128585],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],u=["d3d3LnZpc2FyaW9tZWRpYS5jb20vdGgveGZvcm0uYXV0aHkubWluLmpz","ZDEzazdwcmF4MXlpMDQuY2xvdWRmcm9udC5uZXQvU3dnc3gvSC9ha2Vlbi51bWQubWluLmNzcw=="],d=-1,m,v,q=function(){clearTimeout(v);d++;if(u[d]&&!(1787768869000<(new Date).getTime()&&1<d)){m=p.document.createElement("script");m.type="text/javascript";m.async=!0;var i=p.document.getElementsByTagName("script")[0];m.src="https://"+atob(u[d]);m.crossOrigin="anonymous";m.onerror=q;m.onload=function(){clearTimeout(v);p[r.slice(0,16)+r.slice(0,16)]||q()};v=setTimeout(q,5E3);i.parentNode.insertBefore(m,i)}};if(!p[r]){try{Object.freeze(p[r]=x)}catch(e){}q()}})();
/*]]>/* */`,
          }}
        />

        <Analytics />

        <AntiAdblockPopup />
        <NavBar />
        <ClickTracker>{children}</ClickTracker>

        <footer className="fixed bottom-0 w-full underline text-center p-2 bg-slate-300 rounded-md font-bold text-gray-700 text-sm md:p-3 sm:text-md">
          You have to complete all the steps to receive Robux
        </footer>
      </body>
    </html>
  );
}
