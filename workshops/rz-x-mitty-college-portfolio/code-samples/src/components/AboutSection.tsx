'use client'

import { useState } from 'react'

export default function AboutSection() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const gpaData = [3.7, 3.9, 4.0]
  const years = ['Junior', 'Senior 1st', 'Senior 2nd']

  const maxGPA = 4.0
  const gpaNormalized = gpaData.map((g) => (g / maxGPA) * 100)

  return (
    <section id="about" className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Me
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {/* Identity & Background */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Background</h3>
            <p className="mt-4 text-lg text-gray-700">
              <strong className="text-gray-900">Major:</strong> Human-Computer Interaction
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              I'm a researcher at the intersection of human behavior and technology. With a
              published paper at CHI (the premier HCI conference), I'm deeply passionate about
              understanding how people interact with technology and designing better solutions.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Outside the lab, I'm a competitive rock climber who loves pushing physical and
              mental boundaries. This dual passion—rigorous research and physical challenge—shapes
              how I approach problem-solving.
            </p>

            <h3 className="mt-8 text-xl font-semibold text-gray-900">Academic Progression</h3>
            <p className="mt-2 text-sm text-gray-600">
              Maintained upward trend while increasing rigor with four AP STEM classes
            </p>

            {/* GPA Chart */}
            <div className="mt-6 space-y-4">
              {gpaData.map((gpa, index) => (
                <div key={index}>
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-medium text-gray-700">{years[index]}</span>
                    <span className="text-sm font-bold text-gray-900">{gpa.toFixed(1)}</span>
                  </div>
                  <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-blue-600 transition-all duration-500"
                      style={{ width: `${gpaNormalized[index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Easter Egg */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Fun Fact</h3>
            <button
              onClick={() => setShowEasterEgg(!showEasterEgg)}
              className="mt-4 rounded-lg border-2 border-gray-300 px-6 py-3 text-center font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-100"
            >
              {showEasterEgg ? 'Hide' : 'Reveal'} My Secret Talent
            </button>

            {showEasterEgg && (
              <div className="mt-6 rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                <p className="text-lg font-semibold text-gray-900">
                  🗺️ I can name every country in the world in under 3 minutes!
                </p>
                <p className="mt-2 text-gray-600">
                  This skill combines my love for geography, pattern recognition, and quick
                  thinking—all essential in research and technical problem-solving.
                </p>
              </div>
            )}

            {/* Quick Facts */}
            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Highlights</h3>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <p className="font-semibold text-gray-900">Research Focus</p>
                <p className="mt-2 text-gray-600">
                  Published work on human-computer interaction published at CHI
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <p className="font-semibold text-gray-900">Technical Skills</p>
                <p className="mt-2 text-gray-600">
                  Full-stack development, UX research, robotics, machine learning
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <p className="font-semibold text-gray-900">Passion</p>
                <p className="mt-2 text-gray-600">
                  Making complex technology accessible and intuitive for users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
