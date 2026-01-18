export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
          Welcome to My
          <span className="block bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            College Portfolio
          </span>
        </h1>
        <p className="mt-6 text-lg text-slate-300 sm:text-xl">
          Showcasing my academic achievements, projects, and creative work
        </p>
        <button className="mt-8 rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50">
          Explore My Work
        </button>
      </div>
    </section>
  )
}
