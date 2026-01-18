export default function AchievementsSection() {
  const honors = [
    {
      title: 'AP Scholar with Distinction',
      description: 'Top 10% of global test-takers',
      icon: '🎖️',
      category: 'Academic',
    },
    {
      title: 'Regional Robotics MVP',
      description: '1 of 50 students selected',
      icon: '🤖',
      category: 'Competition',
    },
  ]

  const badges = [
    { label: 'CHI Published', icon: '📄' },
    { label: 'Robotics MVP', icon: '🏅' },
    { label: '4.0 GPA (Senior)', icon: '📚' },
    { label: 'Leadership', icon: '👥' },
  ]

  return (
    <section id="achievements" className="bg-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Achievements & Recognition
        </h2>

        {/* Main Honors */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {honors.map((honor, index) => (
            <div key={index} className="rounded-lg border-2 border-gray-200 bg-white p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{honor.icon}</div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-600">{honor.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{honor.title}</h3>
                  <p className="mt-2 text-gray-600">{honor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badge Grid */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-gray-900">Recognition Badges</h3>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-300 bg-white px-4 py-6 text-center transition-all hover:border-gray-900 hover:shadow-md"
              >
                <p className="text-3xl">{badge.icon}</p>
                <p className="mt-2 text-sm font-medium text-gray-700">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Details */}
        <div className="mt-16 rounded-lg bg-white p-8">
          <h3 className="text-xl font-bold text-gray-900">What These Mean</h3>

          <div className="mt-8 space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-semibold text-gray-900">Academic Excellence</h4>
              <p className="mt-2 text-gray-600">
                Consistent high performance across rigorous coursework, maintaining GPA upward
                trend from 3.7 to 4.0 while taking four AP STEM classes
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-semibold text-gray-900">Recognition at Scale</h4>
              <p className="mt-2 text-gray-600">
                Top 10% of global test-takers for AP exams; 1 of 50 students selected for Robotics
                MVP—demonstrates excellence among high-achieving peers
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-semibold text-gray-900">Research Validation</h4>
              <p className="mt-2 text-gray-600">
                Published work at CHI (top-tier conference) validates original research contribution
                in Human-Computer Interaction
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h4 className="font-semibold text-gray-900">Well-Rounded Impact</h4>
              <p className="mt-2 text-gray-600">
                Recognition across academics, research, and competition—shows capability to excel
                across diverse domains
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
