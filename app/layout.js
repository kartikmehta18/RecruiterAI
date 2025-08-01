import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from './provider';
import { Toaster } from "@/components/ui/sonner"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RecruiterAi",
  description: "RecruiterAi - Your AI-powered recruitment assistant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth `}>
        <Provider>{children}
          
        <Toaster />
          </Provider> 
      </body>
    </html>
  );
}
