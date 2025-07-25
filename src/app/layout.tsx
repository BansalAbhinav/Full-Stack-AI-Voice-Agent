import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered Interview platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* <h1>outer layout</h1> */}
      <body
        className={`${monaSans.className}  antialiased pattern`}
      >
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
