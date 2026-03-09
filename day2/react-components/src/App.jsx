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
      <div className="flex flex-row justify-center gap-5 ">
        <Skills
          title="Frontend"
          skill1="HTML"
          skill2="CSS"
          skill3="JavaScript"
          skill4="React"
        />

        <Skills
          title="Backend"
          skill1="Nodejs"
          skill2="Express"
          skill3="Mongodb"
          skill4="SQL"
        />

        <Skills
          title="Tools"
          skill1="VS Code"
          skill2="Canva"
          skill3="Git"
          skill4="GitHub"
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
