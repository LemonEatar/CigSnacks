// Import necessary dependencies and styles
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CigSnacks",
  description: "Generated by create next app",
};

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-full bg-[#ABBA99] static">
        <div>{children}</div>
        <footer className="bottom-0 w-full fixed">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
