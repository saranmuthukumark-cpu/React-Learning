import { NavLink, useNavigate } from "react-router-dom";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useContext, useEffect } from "react";
import { themeContext } from "./theme/ThemeApi";
import { IoLogOut } from "react-icons/io5";

export default function Navbar() {
  const { theme, setTheme, setIsLog } = useContext(themeContext);

  const navigate = useNavigate();

  useEffect(() => {
    const themed = localStorage.getItem("theme");
    const all = window.document.documentElement;
    if (themed === "dark") {
      all.classList.add("dark");
    } else {
      all.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <div className="fixed top-0  w-full z-5 bg-[#001933] border-b border-white/10 dark:border-black/20 dark:bg-slate-300 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold ">
              <NavLink
                to="/">
                <span className="text-purple-400 font-extrabold dark:text-purple-600">&lt; </span>
              <span className=" bg-linear-to-r from-purple-700 to-sky-700 bg-clip-text text-transparent">
                Saran
              </span>
              <span className="text-sky-400 font-extrabold"> /&gt;</span>
                
              </NavLink>  
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            

              <a href="#" className="text-white hover:text-white dark:text-slate-900  ">
                About
              </a>
              <a href="#" className="text-white hover:text-white dark:text-slate-900  ">
                Skills
              </a>
              <a href="#" className="text-white hover:text-white  dark:text-slate-900">
                Experience
              </a>
              <a href="#" className="text-white hover:text-white  dark:text-slate-900">
                Projects
              </a>
              <NavLink
                to="/blog"
                className="text-white hover:text-white dark:text-slate-900 ">
                Blog
              </NavLink>

              <a
                href="#"
                className="ml-2 px-5 py-2 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:scale-105 ">
                GitHub
              </a>
              <button
                className="text-white  text-xl font-extrabold dark:text-slate-900"
                onClick={handleTheme}>
                {theme === "dark" ? <MdDarkMode /> : <CiLight />}
              </button>
              <button
                className="text-white  text-xl font-extrabold dark:text-slate-900"
                onClick={() => {
                  setIsLog(false);
                  navigate("/login")
                }}>
                <IoLogOut />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
