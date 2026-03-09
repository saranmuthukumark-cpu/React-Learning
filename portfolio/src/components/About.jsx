export default function About() {
  return (
    <section className="px-30 py-24" id="about">
        <p className="text-cyan-400 tracking-widest text-sm mb-4">
        — ABOUT
      </p>

      <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent pb-6">
        Turning Ideas Into Digital Reality
      </h2>

      <div className="grid grid-cols-2 gap-16 mt-16">

        <img
          src="/public/images/saran-profile.jpg"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h3 className="text-2xl font-semibold mb-6">
            A passionate developer crafting the web
          </h3>

          <p className="text-gray-400 leading-relaxed">
            I'm a B.Tech IT student at J K K Nataraja College of Engineering and Technology,
            currently working as a Full Stack Engineer Intern at Cyberdude Networks.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#14193d] p-6 rounded-xl">
              🚀 Full Stack Development
            </div>

            <div className="bg-[#14193d] p-6 rounded-xl">
              ⚡ REST API Design
            </div>

            <div className="bg-[#14193d] p-6 rounded-xl">
              🎨 Responsive UI/UX
            </div>

            <div className="bg-[#14193d] p-6 rounded-xl">
              🤖 Artificial Intelligence
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}