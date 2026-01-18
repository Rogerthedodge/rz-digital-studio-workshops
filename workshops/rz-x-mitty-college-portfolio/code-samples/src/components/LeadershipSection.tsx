export default function LeadershipSection() {
  return (
    <section id="leadership" className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Leadership
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Main Leadership Role */}
          <div>
            <div className="rounded-lg border-2 border-gray-200 bg-white p-8">
              <div className="text-4xl">👥</div>

              <h3 className="mt-4 text-2xl font-bold text-gray-900">Founder, Coding Club</h3>

              <p className="mt-4 text-lg text-gray-700">
                Founder of Coding Club | Led 30 peers in weekly Python workshops
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Community Size</p>
                  <p className="text-3xl font-bold text-blue-600">30+ Students</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Meeting Frequency</p>
                  <p className="text-3xl font-bold text-blue-600">Weekly</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="font-semibold text-gray-900">Primary Focus</p>
                  <p className="text-lg font-bold text-blue-600">Python Programming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Details */}
          <div>
            <h3 className="text-xl font-bold text-gray-900">Leadership Impact</h3>

            <div className="mt-6 space-y-6">
              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                <h4 className="font-semibold text-gray-900">Building Community</h4>
                <p className="mt-2 text-gray-700">
                  Created a welcoming environment for 30+ students to learn programming together,
                  fostering collaboration and peer learning
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                <h4 className="font-semibold text-gray-900">Technical Education</h4>
                <p className="mt-2 text-gray-700">
                  Designed and delivered weekly Python workshops, breaking down complex concepts
                  into accessible lessons
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                <h4 className="font-semibold text-gray-900">Initiative & Vision</h4>
                <p className="mt-2 text-gray-700">
                  Founded the club from scratch, identifying a need and building a sustainable
                  organization that continues to thrive
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-blue-600 bg-blue-50 p-6">
                <h4 className="font-semibold text-gray-900">Mentorship</h4>
                <p className="mt-2 text-gray-700">
                  Guide peers in their coding journey, providing both technical help and
                  encouragement to pursue computer science
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Principles */}
        <div className="mt-16 rounded-lg bg-white p-8">
          <h3 className="text-xl font-bold text-gray-900">Leadership Philosophy</h3>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl">🎯</p>
              <h4 className="mt-4 font-semibold text-gray-900">Vision</h4>
              <p className="mt-2 text-gray-600">
                Clear goals that inspire others to join and contribute
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl">📚</p>
              <h4 className="mt-4 font-semibold text-gray-900">Learning</h4>
              <p className="mt-2 text-gray-600">
                Create environments where people can grow and develop new skills
              </p>
            </div>

            <div className="text-center">
              <p className="text-4xl">🤝</p>
              <h4 className="mt-4 font-semibold text-gray-900">Collaboration</h4>
              <p className="mt-2 text-gray-600">
                Foster teamwork and mutual support among all members
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
