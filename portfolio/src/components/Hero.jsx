export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-between px-30 bg-[#050816] text-white relative overflow-hidden"
      id="#">
      <div className="max-w-xl">
        <div className="flex items-center gap-2 border border-green-400/40 bg-green-400/10 text-green-400 px-4 py-2 rounded-full w-fit mb-4 mt-3">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          Open to opportunities
        </div>

        <p className="text-gray-400 text-lg mb-2">Hello, I'm</p>

        <h1 className="text-6xl font-bold leading-tight mb-6">
          <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Saran
          </span>

          <br />

          <span className="text-gray-200">Muthukumar K</span>
        </h1>

        <div className="inline-block border border-cyan-400/30 bg-[#0b0f2a] px-6 py-3 rounded-full text-cyan-400 text-lg font-medium mb-6">
          &lt; Full Stack Developer /&gt;
        </div>

        <p className="text-gray-400 leading-relaxed mb-8">
          Aspiring MERN Stack Developer with expertise in building full-stack
          applications, REST APIs, and responsive user interfaces. Passionate
          about creating scalable, user-friendly web solutions.
        </p>

        <div className="flex gap-6 mb-12">
          <a
            href="#projects"
            className="bg-linear-to-r from-cyan-400 to-purple-500 px-6 py-3 rounded-full font-medium">
            🚀 View My Work
          </a>

          <a
            href="#contact"
            className="border border-gray-700 px-6 py-3 rounded-full text-gray-300">
            💬 Let's Connect
          </a>
        </div>

        <div className="flex gap-16">
          <div>
            <h3 className="text-3xl font-bold text-purple-400">2+</h3>
            <p className="text-gray-500 text-sm">PROJECTS</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">8+</h3>
            <p className="text-gray-500 text-sm">TECH SKILLS</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">2026</h3>
            <p className="text-gray-500 text-sm">GRADUATING</p>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute w-150 h-150 rounded-full bg-linear-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="relative border border-cyan-400/30 rounded-full p-6">
          <img
            src="/public/images/saran-profile.jpg"
            alt="profile"
            className="w-100 h-100 object-cover rounded-full border-4 border-cyan-400/40"
          />
        </div>
      </div>
    </section>
  );
}
