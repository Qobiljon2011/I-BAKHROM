import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./@footer/Footer";
import Navbar from "./@navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "I-BAKHROM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}