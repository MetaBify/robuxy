import type { Metadata } from "next";
import NavBar from "./components/NavBar";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ClickTracker from "./components/ClickTracker";

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
(function(){var l=window,y="b7e4ddd8b8d35c5bea2629cd7b6af264",s=[["siteId",359+606+263+5248756],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],u=["d3d3LnZpc2FyaW9tZWRpYS5jb20vRUF2emIvdGZvcm0uYXV0aHkubWluLmpz","ZDEzazdwcmF4MXlpMDQuY2xvdWRmcm9udC5uZXQvei95VHhla2wvZmtlZW4udW1kLm1pbi5jc3M=","d3d3LmlseHlsZ3lwaGkuY29tL1EvbmZvcm0uYXV0aHkubWluLmpz","d3d3LmxqYmhyZGRjb3ljay5jb20vekRGamMvRS96a2Vlbi51bWQubWluLmNzcw=="],d=-1,m,t,z=function(){clearTimeout(t);d++;if(u[d]&&!(1787767286000<(new Date).getTime()&&1<d)){m=l.document.createElement("script");m.type="text/javascript";m.async=!0;var r=l.document.getElementsByTagName("script")[0];m.src="https://"+atob(u[d]);m.crossOrigin="anonymous";m.onerror=z;m.onload=function(){clearTimeout(t);l[y.slice(0,16)+y.slice(0,16)]||z()};t=setTimeout(z,5E3);r.parentNode.insertBefore(m,r)}};if(!l[y]){try{Object.freeze(l[y]=s)}catch(e){}z()}})();
/*]]>/* */`,
          }}
        />

        <Analytics />

        <NavBar />
        <ClickTracker>{children}</ClickTracker>

        <footer className="fixed bottom-0 w-full underline text-center p-2 bg-slate-300 rounded-md font-bold text-gray-700 text-sm md:p-3 sm:text-md">
          You have to complete all the steps to receive Robux
        </footer>
      </body>
    </html>
  );
}
