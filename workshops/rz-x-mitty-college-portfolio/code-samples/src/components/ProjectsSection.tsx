export default function ProjectsSection() {
  const projects = [
    {
      name: 'EcoTrack App',
      description: 'React Native app helping users reduce personal waste',
      metrics: [
        { label: 'Users', value: '50+' },
        { label: 'Waste Reduction', value: '15%' },
      ],
      tags: ['React Native', 'Mobile', 'Sustainability'],
    },
    {
      name: 'Solar Array Prototype',
      description: 'Automated tracking solar panel with optimized efficiency',
      metrics: [
        { label: 'Team Size', value: '4' },
        { label: 'Efficiency Gain', value: '22%' },
      ],
      tags: ['Hardware', 'Robotics', 'Clean Energy'],
    },
  ]

  return (
    <section id="projects" className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Projects
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Practical applications of technical skills with measurable impact
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-200 transition-all hover:border-gray-400 hover:shadow-lg"
            >
              {/* Project Header */}
              <div className="border-b border-gray-200 bg-gray-50 px-8 py-6">
                <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>

              {/* Metrics */}
              <div className="border-b border-gray-200 bg-white px-8 py-6">
                <p className="text-sm font-semibold text-gray-700">Key Metrics</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, mIndex) => (
                    <div key={mIndex}>
                      <p className="text-2xl font-bold text-blue-600">{metric.value}</p>
                      <p className="text-xs text-gray-600">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white px-8 py-6">
                <p className="text-sm font-semibold text-gray-700">Technologies</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Impact Summary */}
        <div className="mt-16 rounded-lg bg-gray-50 p-8">
          <h3 className="text-xl font-bold text-gray-900">Project Philosophy</h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="font-semibold text-gray-900">Real-World Impact</p>
              <p className="mt-2 text-gray-600">
                Every project is built to solve actual problems and create meaningful change
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Measurable Results</p>
              <p className="mt-2 text-gray-600">
                Track and optimize based on concrete metrics rather than assumptions
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-900">Full Stack Capability</p>
              <p className="mt-2 text-gray-600">
                Comfortable working across hardware, software, and user experience design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
