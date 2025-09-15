import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessonWrapper.js";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a chai - Fund Your Project",
  description: "This Website is a crowdfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-radial-[at_25%_25%] from-zinc-800 to-black to-90%">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-screen bg-radial-[at_25%_25%] from-zinc-800 to-black to-90%  text-white">{children}</div>

          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
