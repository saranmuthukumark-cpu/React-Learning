import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div class="card">
        <h1>Developer Profile</h1>

        <section>
          <h2>Basic Info</h2>
          <p>
            <strong>Name:</strong> Saran MuthuKumar K
          </p>
          <p>
            <strong>Role:</strong> FullStack Developer
          </p>
        </section>

        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>

        <section>
          <h2>Projects</h2>

          <div class="project">
            <h3> 1. Portfolio Website</h3>
            <p>Personal portfolio built using React.</p>
            
          </div>

          <div class="project">
            <h3> 2. Task Manager</h3>
            <p>A simple task management app.</p>
            
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
