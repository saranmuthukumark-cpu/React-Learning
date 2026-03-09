export default function Skills() {
  return (
    <section id="skills" className="bg-[#070b1f] text-white py-24 px-30 md:px-20">

      <p className="text-cyan-400 tracking-widest text-sm mb-4">
        — SKILLS
      </p>

      <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent pb-6">
        Technologies I Work With
      </h2>

      <p className="text-gray-400 mb-16 max-w-xl">
        Here's my toolkit for building modern, scalable web applications from
        front to back.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-[#0c1027] border border-gray-800 rounded-2xl p-8">

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121739] mb-6 text-2xl">
            🎨
          </div>

          <h3 className="text-xl font-semibold mb-2">Frontend</h3>

          <p className="text-gray-400 mb-6">
            Building pixel-perfect, responsive interfaces
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Bootstrap",
              "React Hooks",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-[#121739] border border-gray-700 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

        <div className="bg-[#0c1027] border border-gray-800 rounded-2xl p-8">

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121739] mb-6 text-2xl">
            ⚙️
          </div>

          <h3 className="text-xl font-semibold mb-2">Backend</h3>

          <p className="text-gray-400 mb-6">
            Crafting robust server-side applications
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Authentication",
              "Database Design",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-[#121739] border border-gray-700 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

        <div className="bg-[#0c1027] border border-gray-800 rounded-2xl p-8">

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121739] mb-6 text-2xl">
            🤖
          </div>

          <h3 className="text-xl font-semibold mb-2">AI </h3>

          <p className="text-gray-400 mb-6">
            Building intelligent, data-driven applications
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Lovable",
              "Chatgpt",
              "Antigravity",
              "Claude",
              "Promt Engineer",
              "Vibe Coding",
             
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-[#121739] border border-gray-700 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

        <div className="bg-[#0c1027] border border-gray-800 rounded-2xl p-8">

          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#121739] mb-6 text-2xl">
            🛠️
          </div>

          <h3 className="text-xl font-semibold mb-2">Tools & More</h3>

          <p className="text-gray-400 mb-6">
            Productivity tools and best practices
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Responsive Design",
              "Debugging",
              "Team Collaboration",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-[#121739] border border-gray-700 rounded-full text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}