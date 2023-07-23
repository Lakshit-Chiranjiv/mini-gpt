import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mini-GPT",
  description: "A minimal Chatbot using GPT-3.5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:py-12 md:px-24">
          {children}
        </main>
      </body>
    </html>
  );
}
