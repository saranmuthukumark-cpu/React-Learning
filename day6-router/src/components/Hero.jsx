import { useContext } from "react";
import Navbar from "./Navbar";
import { themeContext } from "./theme/ThemeApi";
import Login from "./login/Login";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const { isLog, setIsLog, currentUser } = useContext(themeContext);

  const navigate = useNavigate();
  return (
    <>
      {isLog && (
        <div className="bg-slate-900 min-h-screen pt-50 dark:bg-slate-300">
          <div>
            {" "}
            <Navbar />
          </div>

          <div
            className="max-w-6xl mx-auto  space-y-3 
    text-black ">
            <h1 className="font-medium text-xl text-gray-500 dark:text-gray-800">
              Hello, I'm
            </h1>

            <h1 className="bg-linear-to-b from-purple-600 to-sky-600 bg-clip-text text-transparent text-7xl font-bold ">
              {currentUser.userName}
            </h1>

            <h1 className="text-7xl font-bold text-white dark:text-black">
              Muthukumar K
            </h1>

            <div className="flex mt-5">
              <h1
                className="bg-gray-200 dark:bg-gray-900 
        text-sky-500 dark:text-sky-300 
        font-medium text-2xl rounded-full px-3 py-2">
                Full Stack Developer
              </h1>
            </div>
          </div>
        </div>
      )}{" "}
      {!isLog && navigate("/login")}
    </>
  );
}
