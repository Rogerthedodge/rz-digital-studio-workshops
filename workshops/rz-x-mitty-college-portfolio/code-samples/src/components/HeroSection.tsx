export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-32 lg:py-40">
      {/* Background Elements */}
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-gray-100 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:align-middle">
          {/* Content */}
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Alex Chen
            </h1>

            <p className="mt-4 text-base font-semibold text-blue-600">
              Human-Computer Interaction Researcher
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              A Human-Computer Interaction researcher with a published paper at CHI who is also a
              competitive rock climber. Passionate about solving complex problems at the intersection
              of human behavior and technology.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="rounded-lg bg-gray-900 px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-gray-800"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-lg border-2 border-gray-900 px-8 py-3 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-gray-900">CHI</p>
                <p className="text-sm text-gray-600">Published</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.0</p>
                <p className="text-sm text-gray-600">GPA (Senior)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">Nationals</p>
                <p className="text-sm text-gray-600">Robotics</p>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-80 w-80 rounded-lg bg-gradient-to-br from-gray-200 to-gray-100 shadow-lg">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="mt-4 text-gray-600">Profile Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
