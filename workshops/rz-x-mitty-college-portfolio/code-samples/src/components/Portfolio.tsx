export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Advanced Research Project',
      description: 'Leading research on sustainable energy solutions',
      category: 'Research',
    },
    {
      id: 2,
      title: 'Web Application Development',
      description: 'Built a full-stack web application with modern technologies',
      category: 'Development',
    },
    {
      id: 3,
      title: 'Community Service Initiative',
      description: 'Organized and led environmental conservation efforts',
      category: 'Service',
    },
    {
      id: 4,
      title: 'Academic Presentation',
      description: 'Presented findings at regional academic conference',
      category: 'Academic',
    },
    {
      id: 5,
      title: 'Creative Design Project',
      description: 'Designed marketing materials for nonprofit organization',
      category: 'Design',
    },
    {
      id: 6,
      title: 'Leadership Role',
      description: 'Served as president of student technology club',
      category: 'Leadership',
    },
  ]

  return (
    <section className="bg-slate-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Portfolio
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Showcasing my best work and achievements
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-lg border border-slate-700 bg-slate-800 p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="mb-3 inline-block rounded-full bg-purple-500/10 px-3 py-1">
                <span className="text-sm font-medium text-purple-400">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-400">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-400">{project.description}</p>
              <button className="mt-4 text-purple-400 transition-colors duration-200 hover:text-purple-300">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
