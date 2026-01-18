export default function ExperienceSection() {
  const starSteps = [
    {
      title: 'Situation',
      content: "Robotics team's main sensor failed 48 hours before regional competition",
      icon: '⚠️',
    },
    {
      title: 'Task',
      content: 'Find a software workaround to replace the hardware data feed',
      icon: '🎯',
    },
    {
      title: 'Action',
      content:
        'Spent 12 hours recoding the movement algorithm using peripheral ultrasonic sensors instead of primary LiDAR',
      icon: '⚙️',
    },
    {
      title: 'Result',
      content: 'Robot achieved 95% accuracy in navigation, secured 2nd place and spot at Nationals',
      icon: '🏆',
    },
  ]

  return (
    <section id="experience" className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Experience Highlight
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          A pivotal moment that showcases problem-solving under pressure
        </p>

        {/* STAR Timeline */}
        <div className="mt-12">
          <div className="space-y-8">
            {starSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < starSteps.length - 1 && (
                  <div className="absolute left-8 top-24 h-12 w-1 bg-gradient-to-b from-blue-600 to-gray-300" />
                )}

                {/* Card */}
                <div className="flex gap-6">
                  {/* Icon/Number */}
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-2xl">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-lg bg-gray-50 p-6">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-gray-700">{step.content}</p>

                    {/* Result Highlight */}
                    {step.title === 'Result' && (
                      <div className="mt-4 border-l-4 border-blue-600 bg-blue-50 p-3">
                        <p className="font-semibold text-gray-900">Key Outcomes:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-700">
                          <li>✓ 95% navigation accuracy achieved</li>
                          <li>✓ 2nd place in regional competition</li>
                          <li>✓ Advanced to Nationals</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mt-16 rounded-lg border border-gray-200 bg-gray-50 p-8">
          <h3 className="text-xl font-bold text-gray-900">Key Takeaways</h3>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-blue-600">Pressure Handling</p>
              <p className="mt-2 text-gray-700">
                Able to think clearly and execute effectively under tight deadlines
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">Creative Problem Solving</p>
              <p className="mt-2 text-gray-700">
                Found innovative software solution when hardware wasn't available
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-blue-600">Technical Excellence</p>
              <p className="mt-2 text-gray-700">
                Delivered 95% accuracy—surpassing typical expectations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
