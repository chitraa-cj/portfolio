import { Link } from "react-router-dom";
import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { SiGooglescholar, SiOrcid } from "react-icons/si"; // Import Scholar & ORCID icons
import { footerData } from "./constant.ts";

const socialMediaLinks = [
  { icon: <YoutubeFilled style={{ fontSize: "25px", color: "#fff" }} />, link: "https://www.youtube.com/@kayco.4209" },
  { icon: <FacebookFilled style={{ fontSize: "25px", color: "#fff" }} />, link: "https://www.facebook.com/chitraa.jain69" },
  { icon: <LinkedinFilled style={{ fontSize: "25px", color: "#fff" }} />, link: "https://www.linkedin.com/in/chitra-jain-38ba63153/" },
  { icon: <SiGooglescholar style={{ fontSize: "25px", color: "#fff" }} />, link: "https://scholar.google.com/citations?user=GC0J5PgAAAAJ&hl=en" },
  { icon: <SiOrcid style={{ fontSize: "25px", color: "#fff" }} />, link: "https://orcid.org/my-orcid?orcid=0009-0008-5871-001X" },
  { icon: <InstagramOutlined style={{ fontSize: "25px", color: "#fff" }} />, link: "https://www.instagram.com/be_chitraa/" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#030135] text-white">
      <div className="max-w-full m-auto px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-y-4 sm:flex-row">
        <div className="flex items-center gap-3 text-gray-500">
          {socialMediaLinks.map((social, index) => (
            <Link key={index} to={social.link}>
              {social.icon}
            </Link>
          ))}
        </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 pt-8">
          {footerData.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-lg font-semibold">{section.title}</h4>
              <div className="space-y-2">
                {section.links.map((link, index) => (
                  <Link
                    key={index}
                    className="block text-white"
                    to={link.link}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm">
          <p>© 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
