import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const header_links = [
  {
    name: "_hello",
    path: "/",
  },
  {
    name: "_about-me",
    path: "/about",
  },
  {
    name: "_projects",
    path: "/projects",
  },
];

export const social_links = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/rayane-boucheraine/",
  },
  {
    icon: <SiGmail />,
    link: "mailto:r_boucheraine@estin.dz",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/rayane_boucheraine/",
  },
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/profile.php?id=100009942338594",
  },
];
