import { Inter } from "next/font/google"; // Ya jo bhi font import hai
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UrbanSpace Real Estate",
  description: "Find your dream home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Niche wali line me 'suppressHydrationWarning' add kiya hai */}
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}