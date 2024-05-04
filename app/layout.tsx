import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Numerology App",
  description: "Numerology App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-primary-900 h-20 flex items-center justify-end">
          <div className="flex items-center space-x-1 pr-5">
            <Image
              className="h-fit"
              src="/icons/english-icon.png"
              alt="language"
              width={18}
              height={18}
            />
            <div>English</div>
            <Image src="/icons/teenyicons_down-solid.png" alt="down" width={15} height={15}/>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}