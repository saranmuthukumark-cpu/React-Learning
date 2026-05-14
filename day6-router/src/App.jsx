import "./App.css";
import React from "react";
import Blog from "./components/blog/Blog";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
