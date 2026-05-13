import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import Navbar from "./navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hanz Visuals | New Zealand Sports Photography & Videography",
  description: "A New Zealand sports photography and videography brand creating basketball, volleyball, and athlete content through clean visuals and storytelling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/icon.png"
          type="image/icon.png"
          sizes="icon.png"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          strategy="beforeInteractive"
        />
        <Script
          id="emailjs-init"
          strategy="beforeInteractive"
        >
          {`
            (function(){
              emailjs.init({
                publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
              });
            })();
          `}
        </Script>
        <Analytics/>
      </head>
      <body>
        <Navbar/>
        <div id="page-content">
          {children}
        </div>
      </body>
    </html>
  );
}
