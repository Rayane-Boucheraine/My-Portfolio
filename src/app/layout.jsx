import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Rayane Boucheraine",
  description:
    "Experienced Front-End Web Developer specializing in HTML5, CSS3, JavaScript, React.js, and Next.js. Crafting visually stunning, interactive websites with a focus on solving complex challenges. Committed to continuous learning and innovation. Let's create unparalleled digital experiences together!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`h-[100vh] bg-[#011627] ${fira_code.className}`}>
        <Header />
        <main className="h-[86%] border-l-[2px] border-l-[#1E2D3D] border-r-[2px] border-r-[#1E2D3D]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
