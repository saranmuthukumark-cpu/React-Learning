export default function Experience() {
  return (
    <section id="experience" className="bg-[#05081a] text-white py-24 px-8 md:px-20">

      <p className="text-cyan-400 tracking-widest text-sm mb-4">
        — EXPERIENCE
      </p>

      <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-16">
        Where I've Worked
      </h2>


      <div className="relative">

        

        <div className="ml-10 bg-[#0b0f2a] border border-gray-800 rounded-2xl p-10">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h3 className="text-2xl font-semibold">
                Full Stack Engineer Intern
              </h3>

              <a href="https://www.cyberdudenetworks.com/" target="_blank" className="text-cyan-400 mt-2 flex items-center gap-2">
                🏢 Cyberdude Networks Private Limited
              </a>
            </div>


            <span className="px-4 py-2 text-sm bg-[#0f1735] border border-cyan-400/40 text-cyan-400 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Present
            </span>

          </div>


          <ul className="space-y-4 text-gray-400">

            <li className="flex gap-3">
              <span className="text-cyan-400">▸</span>
              Working on real-world full-stack web development projects using MERN Stack
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">▸</span>
              Developing and integrating frontend components with backend APIs
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">▸</span>
              Collaborating with mentors and teams using Git/GitHub for version control
            </li>

            <li className="flex gap-3">
              <span className="text-cyan-400">▸</span>
              Gaining hands-on exposure to industry best practices and clean code standards
            </li>

          </ul>


          <div className="flex flex-wrap gap-3 mt-8">

            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "REST APIs",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm border border-cyan-400/30 text-cyan-400 rounded-lg bg-[#071129]"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}