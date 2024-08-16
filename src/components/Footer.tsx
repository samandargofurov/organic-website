import { NavLink } from "react-router-dom";
import img from "../assets/footerImages/Background.png";
import logo from "../assets/icon/Logo.svg";
import insta from "../assets/icon/Insta.svg";
import fb from "../assets/icon/Fb.svg";
import x from "../assets/icon/Twiter.svg";
import pintrest from "../assets/icon/Pintrest.svg";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative top-0 left-0 mb-[110px]">
          <img src={img} alt="img" width={1440} />
          <div className="absolute top-0 left-0 mt-28 ml-16">
            <div className="flex items-center gap-[345px]">
              <p className="text-5xl font-bold text-white">
                Subscribe to <br /> our Newsletter
              </p>
              <div className="flex items-center gap-4">
                <div className="w-[330px] bg-white p-6 rounded-2xl">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="outline-none"
                  />
                </div>
                <button className="bg-[#274C5B] text-white p-5 text-[20px] hover:bg-[#2f5c6e] rounded-2xl w-52">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1050px] flex justify-between mb-32">
          <div className="border-r-2 pr-10 text-end flex flex-col gap-5">
            <h1 className="text-[#274C5B] font-bold text-2xl">Contact Us</h1>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[#525C60]">Email</span>
              <span className="text-[#525c60ae]">needhelp@Organia.com</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[#525C60]">Phone</span>
              <span className="text-[#525c60ae]">555 888 999</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-[#525C60]">Address</span>
              <span className="text-[#525c60ae]">
                88 road, broklyn street, USA
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <NavLink to="/">
              <div className="flex items-center gap-2 pb-6">
                <img src={logo} alt="" width={32} />
                <span className="text-3xl font-bold text-[#274c5b]">
                  Organick
                </span>
              </div>
            </NavLink>
            <div className="mb-12">
              <p className="text-sm text-center text-[#274C5B]">
                Simply dummy text of the printing and typesetting industry.{" "}
                <br />
                Lorem Ipsum simply dummy text of the printing{" "}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#EFF6F1] p-4 rounded-full">
                <NavLink to="/">
                  <img src={insta} alt="" />
                </NavLink>
              </div>
              <div className="bg-[#EFF6F1] p-4 rounded-full">
                <NavLink to="/">
                  <img src={fb} alt="" />
                </NavLink>
              </div>
              <div className="bg-[#EFF6F1] p-4 rounded-full">
                <NavLink to="/">
                  <img src={x} alt="" />
                </NavLink>
              </div>
              <div className="bg-[#EFF6F1] p-4 rounded-full">
                <NavLink to="/">
                  <img src={pintrest} alt="" />
                </NavLink>
              </div>
            </div>
          </div>

          <div className="border-l-2 pl-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-[#274C5B] font-bold text-2xl">
                Utility Pages
              </h1>
              <ul className="text-[#525C60] flex flex-col gap-4">
                <li className="hover:text-[#58656bb9]">
                  <NavLink to="/">Style Guide</NavLink>
                </li>
                <li className="hover:text-[#58656bb9]">
                  <NavLink to="*">404 Not Found</NavLink>
                </li>
                <li className="hover:text-[#58656bb9]">
                  <NavLink to="/">Password Protected</NavLink>
                </li>
                <li className="hover:text-[#58656bb9]">
                  <NavLink to="/">Licences</NavLink>
                </li>
                <li className="hover:text-[#58656bb9]">
                  <NavLink to="/">Changelog</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
