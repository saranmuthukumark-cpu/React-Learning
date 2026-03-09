import { useState } from "react";

const Hero = () => {
  const [userName, setUserName] = useState("Guest");
  const [input, setInput] = useState();

  return (
    <>
      <div className="flex justify-center items-center mt-10 gap-5">
        <input
          type="text"
          onChange={(event) => setInput(event.target.value)}
          className="bg-white text-xl px-5 py-3 rounded-full outline-none shadow-md "
          placeholder="Your Sweet Name"
        />

        <button
          onClick={() => setUserName(input)}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700  shadow-md hover:scale-105">
          Login
        </button>
      </div>

      <div className="flex items-center justify-center text-center mt-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi,
            <span className="capitalize text-blue-700 font-extrabold">
              {userName}
            </span>
            👋
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            Welcome to Flipkart! Discover the best deals today!
          </p>

          <h2 className="text-2xl font-bold text-blue-700 underline underline-offset-8">
            My Cart Items 🛒
          </h2>
        </div>
      </div>
    </>
  );
};

export default Hero;
