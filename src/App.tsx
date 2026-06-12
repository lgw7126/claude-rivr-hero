import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import FeaturesSection from './components/FeaturesSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <StatsBar />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
