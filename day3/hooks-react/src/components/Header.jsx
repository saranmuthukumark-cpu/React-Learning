import "./Header.css";
import { FaGithub } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className=" w-full px-15 py-3 flex justify-between items-center bg-blue-500 shadow-sm shadow-blue-300 ">
        <div className=" bg-yellow-300 rounded-2xl text-white">
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fk-mp-c815b6.svg"
            alt="flipkart-logo"
            className="w-40"
          />
        </div>
        <div
          className="flex space-x-10 text-2xl
        ">
          <a
            href="#"
            title="Home"
            className="text-white font-bold hover:bg-blue-800 px-3 py-1 rounded-2xl">
            <FaHome />
          </a>
          <a
            href="#"
            title="Products"
            className="text-white font-bold hover:bg-blue-800 px-3 py-1 rounded-2xl">
            <AiFillProduct />
          </a>
          <a
            href="#"
            title="Profile"
            className="text-white font-bold hover:bg-blue-800 px-3 py-1 rounded-2xl">
            <CgProfile />
          </a>
          <a
            href="#"
            title="My Cart"
            className="text-white font-bold hover:bg-blue-800 px-3 py-1 rounded-2xl flex items-center gap-1">
            <FaCartShopping />
          </a>
          <a
            href="#"
            title="GitHub"
            className="text-white font-bold hover:bg-blue-800 px-3 py-1 rounded-2xl">
            <FaGithub />
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
