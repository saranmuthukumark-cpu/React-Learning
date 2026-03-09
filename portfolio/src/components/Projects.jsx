export default function Projects() {
  return (
    <section id="projects" className="bg-[#060a1f] text-white py-24 px-30 md:px-20">

      {/* Section Label */}
      <p className="text-cyan-400 tracking-widest text-sm mb-4">
        — PROJECTS
      </p>

      {/* Title */}
      <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent pb-6">
        Things I've Built
      </h2>

      {/* Description */}
      <p className="text-gray-400 mb-16 max-w-xl">
        Showcasing the projects I've worked on, combining modern
        technologies with clean design.
      </p>

{/* Project Card */}
      <div className="bg-[#0b0f2a] border border-gray-800 rounded-2xl overflow-hidden">

        <img
          src="public/images/project-alumni.png"
          alt="project"
          className="w-full h-80 object-cover"
        />

        
        <div className="p-10">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-sm bg-purple-500/10 border border-purple-500/30 text-purple-400 px-4 py-2 rounded-full mb-6">
            ⭐ Featured · Team Project
          </span>


          <h3 className="text-2xl font-semibold mb-4">
            Digital Platform for Centralized Alumni Data Management and Engagement
          </h3>

          <p className="text-gray-400 mb-8">
            A full-stack MERN application designed to centrally manage alumni records
            and engagement activities. Features secure authentication, role-based
            access for admins and alumni, interactive dashboards, and RESTful APIs
            for efficient data management.
          </p>


          <h4 className="font-semibold mb-4">Key Features</h4>

          <div className="grid md:grid-cols-2 gap-4 text-gray-400 mb-8">

            <ul className="space-y-3">
              <li>✦ Secure user authentication & role-based access</li>
              <li>✦ RESTful API architecture</li>
              <li>✦ Alumni records management</li>
            </ul>

            <ul className="space-y-3">
              <li>✦ Responsive interactive dashboards</li>
              <li>✦ MongoDB for efficient data storage</li>
              <li>✦ Engagement activity tracking</li>
            </ul>

          </div>


          <div className="flex flex-wrap gap-3">

            {[
              "MongoDB",
              "Express.js",
              "React.js",
              "Node.js",
              "JavaScript",
              "Tailwind CSS",
              "REST APIs",
              "Git"
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