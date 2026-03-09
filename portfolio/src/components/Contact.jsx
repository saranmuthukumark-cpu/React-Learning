export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#070b1f] text-white py-24 px-30 md:px-20">
      <p className="text-cyan-400 tracking-widest text-sm mb-4">— CONTACT</p>

      <h2 className="text-5xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent pb-6">
        Let's Work Together
      </h2>

      <p className="text-gray-400 mb-10 max-w-xl">
        Have a project in mind or just want to say hi? I'd love to hear from
        you.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

          <p className="text-gray-400 mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question, a project idea, or just want to connect — feel free to
            reach out!
          </p>

          <div className="space-y-6">
            <a
              href="mailto:saranmuthukumar.k@gmail.com"
              className="flex justify-between items-center bg-[#0c1027] border border-gray-800 p-5 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition">
              <div className="flex gap-4 items-center">
                <span className="text-xl">📧</span>

                <div>
                  <p className="text-gray-400 text-sm">EMAIL</p>
                  <p>saranmuthukumar.k@gmail.com</p>
                </div>
              </div>

              <span>→</span>
            </a>

            <a
              href="tel:+916379745451"
              className="flex justify-between items-center bg-[#0c1027] border border-gray-800 p-5 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition">
              <div className="flex gap-4 items-center">
                <span className="text-xl">📱</span>

                <div>
                  <p className="text-gray-400 text-sm">PHONE</p>
                  <p>+91 6379745451</p>
                </div>
              </div>

              <span>→</span>
            </a>

            <a
              href="https://linkedin.com/in/saran-muthukumar-k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center bg-[#0c1027] border border-gray-800 p-5 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition">
              <div className="flex gap-4 items-center">
                <span className="text-xl">💼</span>

                <div>
                  <p className="text-gray-400 text-sm">LINKEDIN</p>
                  <p>saran-muthukumar-k</p>
                </div>
              </div>

              <span>→</span>
            </a>

            <a
              href="https://github.com/saranmuthukumark-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center bg-[#0c1027] border border-gray-800 p-5 rounded-xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition">
              <div className="flex gap-4 items-center">
                <span className="text-xl">🐙</span>

                <div>
                  <p className="text-gray-400 text-sm">GITHUB</p>
                  <p>saranmuthukumark-cpu</p>
                </div>
              </div>

              <span>→</span>
            </a>
          </div>
        </div>

        <div className="">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400">NAME</label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-2 bg-[#0c1027] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">EMAIL</label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full mt-2 bg-[#0c1027] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-400">SUBJECT</label>

              <input
                type="text"
                placeholder="What's this about?"
                className="w-full mt-2 bg-[#0c1027] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">MESSAGE</label>

              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full mt-2 bg-[#0c1027] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-400"></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-linear-to-r from-cyan-400 to-purple-500 py-4 rounded-full font-semibold hover:opacity-90 transition">
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
