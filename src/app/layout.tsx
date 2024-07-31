import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samantha Hall",
  description: "Democrat for Senate.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={ 'grid grid-rows-[auto_1fr] h-dvh' }>
                    <header id={ 'content-header' }>

                    </header>
                    <div id={ 'primary-content' }>
                        { children }
                    </div>
                </div>
            </body>
        </html>
    );
}
