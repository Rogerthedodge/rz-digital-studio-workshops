import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import AchievementsSection from '@/components/AchievementsSection'
import ProjectsSection from '@/components/ProjectsSection'
import LeadershipSection from '@/components/LeadershipSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <ProjectsSection />
        <LeadershipSection />
      </main>
      <Footer />
    </>
  )
}
