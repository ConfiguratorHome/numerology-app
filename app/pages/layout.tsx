import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style.css";
import Image from "next/image";
import { prefix } from "../prefix";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function PageNumberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="w-full p-5 flex">
        <Link href="/">
          <Image
            alt=""
            src={`${prefix}/icons/back-icon.png`}
            width={30}
            height={30}
            className=""
            unoptimized
          />
        </Link>
      </div>
      {children}
    </div>
  );
}
