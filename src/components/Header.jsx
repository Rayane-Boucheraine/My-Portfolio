"use client";
import { header_links } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className="flex h-[7%] border-[2px] border-[#1E2D3D]">
      <Link
        href="/"
        className="text-[#607B96] w-[20%] flex items-center px-[16px] border-r-[2px] border-[#1E2D3D]"
      >
        Rayane-Boucheraine
      </Link>
      <ul className="flex justify-between w-[80%] ">
        <div className="flex">
          {header_links.map((link, index) => {
            return (
              <li key={index}
                className={`relative text-[#607B96]  border-r-[2px] border-[#1E2D3D] duration-300 hover:text-[#FFF] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#FEA55F] after:transition-all after:duration-300 ${
                  path === link.path
                    ? "text-[#FFF] after:w-[100%]"
                    : "after:w-0"
                }`}
              >
                <Link
                  href={link.path}
                  
                  className="px-[24px] h-[100%] flex items-center"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <li
            className={`h-[100%] relative text-[#607B96] border-l-[2px] border-[#1E2D3D] duration-300 hover:text-[#FFF] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#FEA55F] after:transition-all after:duration-300 ${
              path === "/contact"
                ? "text-[#FFF] after:w-[100%]"
                : "after:w-[0%]"
            }`}
          >
            <Link href="/contact" className="px-[24px] h-[100%] flex items-center">_contact-me</Link>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Header;