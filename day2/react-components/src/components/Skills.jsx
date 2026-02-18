function Skills({ title, skill1, skill2, skill3, skill4 }) {
  return (
    <section className="flex flex-row justify-center  mt-20">
      <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-4 w-100 shadow-xl">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
          {title}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <span className=" font-medium px-5 py-2 bg-cyan-400/10 text-cyan-300 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 ">
            {skill1}
          </span>

          <span className=" font-medium px-5 py-2 bg-cyan-400/10 text-cyan-300 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 ">
            {skill2}
          </span>

          <span className=" font-medium px-5 py-2 bg-cyan-400/10 text-cyan-300 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 ">
            {skill3}
          </span>

          <span className=" font-medium px-5 py-2 bg-cyan-400/10 text-cyan-300 border border-cyan-400 rounded-full hover:bg-cyan-400 hover:text-slate-900 ">
            {skill4}
          </span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
