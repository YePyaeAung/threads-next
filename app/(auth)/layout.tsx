import { Metadata } from "next";
import { Inter } from "next/font/google";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs";
import "../globals.css";

export const metadata: Metadata = {
    title: "Threads Next App",
    description: "A Next.js 14 Meta Threads Application.",
};

const inter = Inter({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <main>{children}</main>
                </body>
            </html>
        </ClerkProvider>
    );
}
