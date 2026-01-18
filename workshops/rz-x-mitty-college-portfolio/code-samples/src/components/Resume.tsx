'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: 'Alex Chen Resume',
  });

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Print Button */}
        <div className="mb-6 flex justify-end gap-4">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors print:hidden"
          >
            📄 Print to PDF
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors print:hidden"
          >
            ← Back to Portfolio
          </a>
        </div>

        {/* Resume Content */}
        <div
          ref={resumeRef}
          className="bg-white border border-gray-300 p-12 shadow-lg print:shadow-none print:border-none print:p-0"
        >
          {/* Header */}
          <div className="border-b-2 border-gray-800 pb-6 mb-6">
            <h1 className="text-4xl font-bold text-gray-900">Alex Chen</h1>
            <p className="text-lg text-blue-600 font-semibold mt-1">
              HCI Researcher & Student Developer
            </p>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-3 text-sm text-gray-700">
              <span>📧 alex.chen@email.com</span>
              <span className="hidden md:inline">•</span>
              <span>📍 San Francisco, CA</span>
              <span className="hidden md:inline">•</span>
              <span>🔗 linkedin.com/in/alexchen</span>
              <span className="hidden md:inline">•</span>
              <span>💻 github.com/alexchen</span>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">
              HCI researcher with published paper at CHI conference and competitive rock climber. Passionate about
              designing intuitive interfaces and solving complex technical problems. Strong foundation in robotics,
              full-stack development, and sustainable technology. Seeking opportunities to apply research insights to
              real-world product development.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Education</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">High School Diploma</h3>
                    <p className="text-gray-700">Lincoln High School, San Francisco, CA</p>
                  </div>
                  <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2025</span>
                </div>
                <p className="text-gray-700 mt-2">Major: Human-Computer Interaction (HCI)</p>
                <div className="mt-2 flex gap-4 text-sm text-gray-700">
                  <span>📊 GPA: 4.0 / 4.0</span>
                  <span>📚 4 AP STEM Classes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Experience</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">Robotics Team Lead</h3>
                    <p className="text-gray-700">Lincoln High School Robotics Club</p>
                  </div>
                  <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2023-2025</span>
                </div>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>
                    Led 12-hour algorithm rewrite when primary sensor failed 48 hours before regional competition
                  </li>
                  <li>Achieved 95% accuracy using ultrasonic sensor backup, secured 2nd place and Nationals spot</li>
                  <li>Mentored 8 junior team members in embedded systems and robotics fundamentals</li>
                  <li>Designed sensor integration strategy reducing processing latency by 40%</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">Coding Club Founder & President</h3>
                    <p className="text-gray-700">Lincoln High School</p>
                  </div>
                  <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2023-2025</span>
                </div>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Founded and grew club to 30+ active members from zero</li>
                  <li>Taught weekly Python programming workshops covering fundamentals to advanced topics</li>
                  <li>Organized hackathons and coding competitions with external sponsors</li>
                  <li>Created comprehensive curriculum covering 8 programming topics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Projects</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900">EcoTrack: Waste Reduction Mobile App</h3>
                  <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2024</span>
                </div>
                <p className="text-gray-700 text-sm mt-1">React Native, Firebase, Mobile App</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Built full-stack mobile application helping users track and reduce waste</li>
                  <li>Achieved 50+ active users with 15% average waste reduction per user</li>
                  <li>Implemented real-time data synchronization and push notifications</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-900">Solar Array Efficiency Prototype</h3>
                  <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2024</span>
                </div>
                <p className="text-gray-700 text-sm mt-1">Hardware, Robotics, Clean Energy</p>
                <ul className="text-gray-700 mt-2 space-y-1 list-disc list-inside">
                  <li>Led 4-person team designing intelligent solar tracking system</li>
                  <li>Achieved 22% efficiency gain through real-time angle optimization</li>
                  <li>Implemented dual-axis servo control with weather compensation algorithm</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recognition */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Recognition & Awards</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">AP Scholar with Distinction</h3>
                  <p className="text-gray-700 text-sm">Scored 4 or higher on 5+ AP exams (Top 10% of global test-takers)</p>
                </div>
                <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2025</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">Regional Robotics MVP</h3>
                  <p className="text-gray-700 text-sm">Most Valuable Player among 50 competing students (1 award)</p>
                </div>
                <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2025</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-gray-900">Nationals Qualification</h3>
                  <p className="text-gray-700 text-sm">Qualified for National Robotics Championship (Top 50 teams)</p>
                </div>
                <span className="text-gray-700 font-semibold whitespace-nowrap ml-4">2025</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-700 text-sm">Python, JavaScript, TypeScript, C++, SQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Web Development</h4>
                <p className="text-gray-700 text-sm">React, Next.js, HTML, CSS, Tailwind CSS</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Robotics & Hardware</h4>
                <p className="text-gray-700 text-sm">Arduino, Raspberry Pi, Sensor Integration, Embedded Systems</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Tools & Frameworks</h4>
                <p className="text-gray-700 text-sm">Git, Firebase, Mobile Dev, REST APIs</p>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Publications & Research</h2>
            <div>
              <h3 className="font-bold text-gray-900">
                "Intuitive Interface Design for Robotics Control Systems"
              </h3>
              <p className="text-gray-700 text-sm mt-1">
                Published at CHI Conference 2025 • Co-authored with Dr. Sarah Johnson (Stanford)
              </p>
              <p className="text-gray-700 text-sm mt-2">
                Research focused on human-computer interaction in real-time robotic systems, exploring how interface
                design impacts operator performance under time constraints.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-300 pt-4">
            <p className="text-gray-600 text-sm">
              Competitive rock climber (V4 level). Fun fact: Can name every country in the world in under 3 minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
