import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import TopButton from "../../resource/TopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Agodel",
    description: "web app for booking hotels and resorts",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TopButton />
                {children}
            </body>
        </html>
    );
}
