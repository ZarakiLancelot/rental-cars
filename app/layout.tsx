import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Rental Cars",
  description: "Website to Rent Cars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <NextTopLoader color="#000"></NextTopLoader>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
