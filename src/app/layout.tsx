import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/globals.css";
import { NavigationBar } from '@/components/navigation/navigation-bar';

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
                        <NavigationBar />
                    </header>
                    <div id={ 'primary-content' } className={ 'overflow-scroll' }>
                        { children }
                    </div>
                </div>
            </body>
        </html>
    );
}
