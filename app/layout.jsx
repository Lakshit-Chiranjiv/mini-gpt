import Navbar from "./components/Navbar";
import "./globals.css";
import { Poppins } from "@next/font/google";
 
const poppins = Poppins({
  variable: "--display-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Mini-GPT",
  description: "A minimal Chatbot using GPT-3.5",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-between p-6 md:py-12 md:px-24">
          {children}
        </main>
      </body>
    </html>
  );
}
