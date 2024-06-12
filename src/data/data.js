import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


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
];

export const contact_links = [
  {
    label: "Contacts",
    children: [
      {
        icon: <SiGmail />,
        name: 'r_boucheraine@estin.dz',
      },
      {
        icon: <FaPhoneAlt />,
        name: "+213540032124",
      },
    ],
  },
  {
    label: "Find-me-also-in",
    children: [
      {
        icon: <FaExternalLinkAlt />,
        name: "YouTube channel",
        link: "https://www.youtube.com/channel/UC-H-4stkxjdbtjATg1U-FbA",
      },
      {
        icon: <FaExternalLinkAlt />,
        name: "Instagram account",
        link: "https://www.instagram.com/rayane_boucheraine/",
      },
      {
        icon: <FaExternalLinkAlt />,
        name: "Facebook account",
        link: "https://www.facebook.com/profile.php?id=100009942338594",
      },
      {
        icon: <FaExternalLinkAlt />,
        name: "Twitter account",
        link: "https://x.com/RCadamoro",
      },
    ],
  },
];
