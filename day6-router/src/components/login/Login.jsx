import { useContext, useState } from "react";
import { themeContext } from "../theme/ThemeApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setIsLog, setCurrentUser } = useContext(themeContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = userData.find(
      (user) => user.userName == name && user.password == password,
    );
    if (user) {
      setCurrentUser(user);
      setIsLog(true);
      navigate("/");
    } else {
      alert("Oops!😭 Invalid Username and Password ");
    }

    console.log(name, password);
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-900 dark:bg-white">
        <form className="bg-slate-500 p-8 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold text-center mb-6"> Login</h2>

          <div className="mb-4">
            <label className="block mb-2 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 bg-gray-200"
              onChange={(e) => setName(e.target.value.toLowerCase())}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400  bg-gray-200"
              onChange={(e) => setPassword(e.target.value.toLowerCase())}
            />
          </div>

          <button
            type="button"
            className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-purple-600 cursor-pointer"
            onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
