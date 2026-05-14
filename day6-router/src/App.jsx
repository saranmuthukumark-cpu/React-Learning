import "./App.css";
import React from "react";
<<<<<<< HEAD
import Blog from "./components/blog/Blog";
=======
import {Blog} from "./components/blog/Blog";
>>>>>>> 7873d17771031bfa013f44a93b869fd2b211226e
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
