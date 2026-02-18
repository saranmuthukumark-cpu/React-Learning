import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex flex-row justify-center gap-10 ">
        <Skills
          title="Frontend Skills"
          skill1="HTML"
          skill2="CSS"
          skill3="JavaScript"
          skill4="React"
        />

        <Skills
          title="Backend Skills"
          skill1="Node.js"
          skill2="Express"
          skill3="MongoDB"
          skill4="SQL"
        />

        <Skills
          title="AI & Tools"
          skill1="VS Code"
          skill2="Prompting"
          skill3="Git"
          skill4="GitHub"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
