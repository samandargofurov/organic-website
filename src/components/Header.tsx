import { NavLink } from "react-router-dom";
import logo from "../assets/icon/Logo.svg";
import search from "../assets/icon/search.svg";
import cart from "../assets/icon/Icon.svg";

const Header = () => {
  return (
    <>
      <div className="bg-white sticky top-0 left-0 right-0 z-50">
        <div className="container mx-auto max-w-[1350px]">
          <div className="header ml-14 mr-14 pt-6 pb-6 flex items-center justify-between">
            <NavLink to="/">
              <div className="logo flex items-center gap-2 cursor-pointer">
                <img
                  src={logo}
                  width={33}
                  height={50}
                  alt="organic logo icon"
                />
                <span className="font-bold text-3xl text-[#274C5B]">
                  Organick
                </span>
              </div>
            </NavLink>
            <div className="nav">
              <ul className="flex items-center gap-5 font-[Roboto] font-medium text-[#274C5B]">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <select className="outline-none bg-transparent">
                  <NavLink to="#">Pages</NavLink>
                  <option value="page1">
                    <NavLink to="#">Page 1</NavLink>
                  </option>
                  <option value="page2">
                    <NavLink to="#">Page 2</NavLink>
                  </option>
                  <option value="page3">
                    <NavLink to="#">Page 3</NavLink>
                  </option>
                </select>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/news">News</NavLink>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-64 h-12 rounded-3xl pl-5 flex items-center gap-3 bg-[#FAFAFA]">
                <input
                  type="text"
                  placeholder="Enter type"
                  className="outline-none bg-transparent"
                />
                <div className="bg-[#7EB693] flex items-center justify-center rounded-3xl p-2">
                  <img src={search} width={21} height={21} alt="search icon" />
                </div>
              </div>
              <div className="w-32 h-12 border rounded-3xl pl-2 flex items-center gap-3">
                <div className="bg-[#274C5B] flex items-center justify-center rounded-3xl p-2">
                  <img src={cart} width={21} height={21} alt="search icon" />
                </div>
                <span className="">Cart (1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
