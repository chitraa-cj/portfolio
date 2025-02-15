import { Link } from "react-router-dom";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import "./index.scss";
import { navbarData } from "./constant";

export default function Navbar() {
  return (
    <nav className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <h1 className="text-xl font-bold">CJ</h1>
        </div>
        <ul className="flex items-center space-x-6">
        {navbarData.map((item, index) => (
            <li key={index} className="relative">
              <Link to={item.link} className="nav-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <button>
            <SearchOutlined />
          </button>
        </div>
      </div>
    </nav>
  );
}
