import { social_links } from "@/data/data";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex h-[7%] border-[2px] border-[#1E2D3D]">
      <span className="text-[#607B96] w-[10%] flex items-center px-[16px] border-r-[2px] border-[#1E2D3D]">
        Find me in:
      </span>
      <ul className="flex justify-between w-[90%]">
        <div className="flex">
          {social_links.map((link) => {
            return (
              <li className="relative text-[#607B96]  border-r-[2px] border-[#1E2D3D] duration-300 hover:text-[#FFF] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#FEA55F] after:transition-all after:duration-300">
                <Link
                  href={link.link}
                  className="px-[16px] text-[18px] h-[100%] flex items-center"
                >
                  {link.icon}
                </Link>
              </li>
            );
          })}
        </div>
        <div>
          <li
            className="h-[100%] relative text-[#607B96] border-l-[2px] border-[#1E2D3D] duration-300 hover:text-[#FFF] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:bg-[#FEA55F] after:transition-all after:duration-300"
          >
            <Link
              href="https://github.com/Rayane-Boucheraine"
              className="px-[24px] h-[100%] flex items-center gap-4"
            >
              <span>@Rayane-Boucheraine</span> <FaGithub className="text-[18px]" />
            </Link>
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer