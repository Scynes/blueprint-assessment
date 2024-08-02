import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavigationBar } from '@/components/navigation/navigation-bar';

import "@/globals.css";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Samantha Hall",
  description: "Democrat for Senate.",
};

// Currently experiencing a bug with the Footer component so I can't place it in the RootLayout component.
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <Analytics />
            <body className={inter.className}>
                <div className={ 'grid grid-rows-[auto_1fr] h-dvh' }>
                    <header>
                        <NavigationBar />
                    </header>
                    <div id={ 'primary-content' } className={ 'overflow-y-scroll overflow-x-clip' }>
                        { children }
                    </div>
                </div>
            </body>
        </html>
    );
}
