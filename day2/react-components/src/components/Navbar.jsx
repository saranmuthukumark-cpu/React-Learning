import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class=" w-full bg-black shadow-lg shadow-cyan-500/30 ">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <a href="https://github.com/saranmuthukumark-cpu">
          <h1 class="text-3xl font-bold text-cyan-400 nosifer-regular ">
            SARAN
          </h1>
        </a>
        <div class="space-x-6 items-center">
          <a
            href="#"
            class=" hover:bg-cyan-400 hover:text-slate-900 px-2 py-1 rounded-2xl font-bold text-cyan-300">
            About
          </a>
          <a
            href="#"
            class="hover:bg-cyan-400 hover:text-slate-900 px-2 py-1 rounded-2xl font-bold text-cyan-300">
            Skills
          </a>
          <a
            href="#"
            class="hover:bg-cyan-400 hover:text-slate-900 px-2 py-1 rounded-2xl font-bold text-cyan-300">
            Projects
          </a>
          <a
            href="https://wa.me/+916379745451"
            target="_blank"
            class="hover:bg-cyan-400 hover:text-slate-900 px-2 py-1 rounded-2xl font-bold text-cyan-300">
            Contact
          </a>
          <a
            href="https://github.com/saranmuthukumark-cpu"
            target="_blank"
            class="hover:bg-cyan-400 hover:text-slate-900 px-2 py-1 rounded-2xl font-bold text-cyan-300">
            GitHub ↗️
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
