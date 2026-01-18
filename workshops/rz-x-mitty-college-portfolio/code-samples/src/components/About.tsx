export default function About() {
  return (
    <section className="bg-slate-800 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          About Me
        </h2>
        <p className="mt-4 text-lg text-slate-300">
          I am a passionate student dedicated to academic excellence and
          creative problem-solving. With a strong foundation in multiple
          disciplines, I bring a unique perspective to every project.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Leadership',
              description:
                'Active in student organizations and community service',
            },
            {
              title: 'Innovation',
              description:
                'Bringing creative solutions to complex problems',
            },
            {
              title: 'Excellence',
              description:
                'Committed to achieving the highest standards in all work',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-purple-500/20 bg-slate-700/50 p-6 transition-all duration-200 hover:border-purple-500/50 hover:bg-slate-700"
            >
              <h3 className="text-xl font-semibold text-purple-400">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
