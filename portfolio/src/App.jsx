import { Navbar, Hero, About, Skills, Projects, Experience, Education, Certifications, CodeSection, ResumeSection, Contact, Footer } from './components/Sections.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-300 font-sans selection:bg-accent/30 selection:text-white">
      <a 
        href="#main" 
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-gold focus:px-4 focus:py-2.5 focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        Skip to content
      </a>

      {/* Layered ambient lighting and subtle background patterns */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="bg-grid-pattern absolute inset-0 opacity-60" />
        <div className="bg-dots-pattern absolute inset-0 opacity-30" />
        {/* Soft Electric Blue ambient glow top left */}
        <div className="absolute -left-40 -top-20 h-[550px] w-[550px] rounded-full bg-accent/15 blur-[150px]" />
        {/* Subtle Gold ambient glow right middle */}
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[160px]" />
        {/* Deep Indigo/Blue glow bottom left */}
        <div className="absolute -left-20 bottom-1/4 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[170px]" />
      </div>

      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <CodeSection />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
