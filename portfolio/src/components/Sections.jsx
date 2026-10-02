import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Brain,
  Sparkles,
  Cpu,
  LineChart,
  Code2,
  Terminal,
  Database,
  Layers,
  Globe,
  BarChart3,
  ShieldCheck,
  Activity,
  Building2,
  GraduationCap,
  Award,
  CheckCircle2,
  Download,
  ExternalLink,
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  X,
  Menu,
  FileText,
  Briefcase,
  Calendar,
  MapPin,
  User,
  Zap,
  GitBranch,
  Workflow,
  TrendingUp,
  Maximize2
} from 'lucide-react'
import {
  profile,
  aboutText,
  focusAreas,
  currentlyFocusedOn,
  verifiableStats,
  skills,
  projects,
  experience,
  education,
  certifications,
  achievementCategories,
  formEndpoint
} from '../data/portfolioData'
import photo from '../assets/profile/profile.jpg'
import logo from '../assets/logo.png'

// Custom SVG Icons for GitHub and LinkedIn for maximum cross-environment reliability
const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedinIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const NAV = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Certifications', href: '#certifications', id: 'certifications' },
  { name: 'Code', href: '#code', id: 'code' },
  { name: 'Resume', href: '#resume', id: 'resume' },
  { name: 'Contact', href: '#contact', id: 'contact' },
]

function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

const SectionHeader = ({ indexTag, title, subtitle }) => (
  <Reveal className="mb-12">
    {indexTag && (
      <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-wider text-accent-light">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        {indexTag}
      </div>
    )}
    <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl font-sans">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 max-w-2xl text-base text-slate-400 sm:text-lg font-body">
        {subtitle}
      </p>
    )}
    <div className="mt-4 flex items-center gap-2">
      <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent to-blue-600" />
      <div className="h-1 w-3 rounded-full bg-gold" />
      <div className="h-1 w-1.5 rounded-full bg-slate-700" />
    </div>
  </Reveal>
)

const Section = ({ id, indexTag, title, subtitle, children, className = '' }) => (
  <section id={id} className={`relative mx-auto max-w-7xl px-5 py-24 sm:px-8 ${className}`}>
    <SectionHeader indexTag={indexTag} title={title} subtitle={subtitle} />
    {children}
  </section>
)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )

    NAV.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'glass-nav py-3.5 shadow-card'
          : 'bg-transparent py-5'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Monogram Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 font-extrabold text-white transition focus:outline-none"
        >
          <img
            src={logo}
            alt="Nikhil Shingade Logo"
            className="h-10 w-10 rounded-xl object-contain shadow-glow transition group-hover:scale-105 border border-white/10"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-accent-light transition">
              Nikhil Shingade
            </span>
            <span className="text-[10px] font-mono font-medium tracking-widest text-gold uppercase">
              AI ENGINEER
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-panel/60 p-1.5 backdrop-blur-md xl:flex">
          {NAV.map((n) => {
            const isActive = active === n.id
            return (
              <li key={n.id}>
                <a
                  href={n.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-accent to-blue-600 text-white shadow-md shadow-accent/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {n.name}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resume}
            download
            className="btn btn-secondary hidden sm:inline-flex text-xs !py-2 !px-4 font-mono"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>

          <button
            className="btn btn-ghost !p-2 xl:hidden text-slate-300 hover:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-ink-light/95 px-5 py-6 backdrop-blur-2xl xl:hidden"
          >
            <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 font-semibold transition ${
                      active === n.id
                        ? 'bg-accent/20 text-accent-light border border-accent/30'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <ChevronRight className="h-4 w-4 text-gold" />
                    {n.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-4">
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="btn btn-primary w-full justify-center text-xs py-3 font-mono"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full overflow-hidden pt-32 pb-16 flex flex-col justify-center border-b border-white/[0.06]"
    >
      {/* Premium Layered Ambient Hero Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Deep Navy → Midnight Blue → Near Black Base Gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #050816 0%, #0a1020 50%, #03050d 100%)'
          }}
        />

        {/* Soft royal/electric blue ambient glow behind profile image */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 75% 45%, rgba(37, 99, 235, 0.14), transparent 40%)'
          }}
        />

        {/* Subtle warm gold accent glow near CTA / buttons */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 18% 65%, rgba(245, 158, 11, 0.06), transparent 30%)'
          }}
        />

        {/* Subtle top blue ambient highlight around hero header content */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 10%, rgba(59, 130, 246, 0.07), transparent 45%)'
          }}
        />

        {/* High-tech grid line mask overlay at subtle opacity */}
        <div className="bg-grid-pattern absolute inset-0 opacity-40 mix-blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 w-full">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center w-full">
          {/* LEFT COLUMN: Bio & CTAs */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Top Specialty Badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold-light backdrop-blur-md font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="tracking-widest uppercase font-mono">
                ARTIFICIAL INTELLIGENCE • AI & DATA SCIENCE
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.08]">
              <span className="block text-slate-300 font-sans">Hi, I'm</span>
              <span className="text-gradient-primary block mt-1 font-sans">Nikhil Shingade</span>
            </h1>

            {/* Titles */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <p className="text-2xl sm:text-3xl font-bold text-gradient-blue tracking-tight font-sans">
                Artificial Intelligence Engineer
              </p>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="text-lg font-semibold text-gold-light font-mono">
                AI & Data Science
              </span>
            </div>

            {/* Short Introduction */}
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-body">
              I build intelligent, data-driven applications using Machine Learning, Generative AI, LLMs and modern software technologies.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn btn-primary text-sm py-3 px-6 shadow-glow uppercase font-mono tracking-wider font-bold">
                <span>VIEW PROJECTS</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={profile.resume} download className="btn btn-secondary text-sm py-3 px-6 uppercase font-mono tracking-wider font-bold">
                <Download className="h-4 w-4" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono font-medium uppercase tracking-wider text-slate-500 mr-2">
                CONNECT:
              </span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="btn btn-ghost text-xs !py-2 !px-3.5 font-mono"
              >
                <GithubIcon className="h-4 w-4 text-slate-300" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="btn btn-ghost text-xs !py-2 !px-3.5 font-mono"
              >
                <LinkedinIcon className="h-4 w-4 text-accent-light" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send Email"
                className="btn btn-ghost text-xs !py-2 !px-3.5 font-mono"
              >
                <Mail className="h-4 w-4 text-gold-light" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: ONLY Profile Image with Clean, Premium Framing */}
          <motion.div
            className="relative mx-auto lg:ml-auto flex justify-center items-center"
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Subtle Soft Glow behind Photo */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 via-blue-600/15 to-gold/20 blur-3xl opacity-70 scale-105"
            />

            {/* Clean Squircle / Rounded Rectangular Frame */}
            <div className="relative group">
              <div className="relative p-2.5 rounded-[2.25rem] bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl backdrop-blur-xl border border-white/10 transition duration-500 group-hover:border-accent/40">
                <div className="relative overflow-hidden rounded-[2rem] bg-ink-light">
                  <img
                    src={photo}
                    alt="Nikhil Shingade - Artificial Intelligence Engineer"
                    width="380"
                    height="380"
                    className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 object-cover object-top filter brightness-105 contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Name & Title Badge below image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl border border-white/15 bg-ink/85 backdrop-blur-md text-center shadow-card">
                    <p className="text-base font-extrabold text-white tracking-tight font-sans">Nikhil Shingade</p>
                    <p className="text-xs font-mono font-bold text-gold mt-0.5">Artificial Intelligence Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL TO EXPLORE INDICATOR */}
        <div className="mt-12 text-center">
          <a href="#about" className="inline-flex flex-col items-center gap-1 text-xs font-mono text-slate-500 hover:text-gold transition">
            <span className="tracking-widest uppercase font-semibold">SCROLL TO EXPLORE</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-gold" />
          </a>
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <Section
      id="about"
      indexTag="01 / ABOUT"
      title="About Me"
      subtitle="Artificial Intelligence Engineer & Data Science student focused on practical ML model building, data-driven applications, and intelligent systems."
    >
      <div className="grid items-stretch gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left Side: Real Bio Information */}
        <Reveal className="glass-card p-7 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="space-y-4 text-base leading-relaxed text-slate-300 font-body">
              {aboutText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h4 className="mt-8 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-gold">
              Technical Focus Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="badge-tech text-xs font-mono">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 font-mono">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">CURRENTLY</span>
              <p className="mt-1 text-xs font-bold text-white flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-accent-light" />
                B.E. AI & Data Science
              </p>
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">FOCUS & INTEREST</span>
              <p className="mt-1 text-xs font-bold text-white flex items-center gap-1.5">
                <Brain className="h-3.5 w-3.5 text-gold" />
                AI / ML / GenAI
              </p>
            </div>
          </div>
        </Reveal>

        {/* Right Side: AI ENGINEER PROFILE Cards & Stats */}
        <div className="space-y-6">
          <Reveal>
            <div className="glass-card p-6 border-gold/30 bg-gradient-to-br from-panel to-ink-light">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-gold uppercase tracking-wider mb-3">
                <Zap className="h-4 w-4 text-gold" />
                AI ENGINEER PROFILE
              </div>
              <ul className="grid grid-cols-2 gap-2 font-mono text-xs text-slate-200">
                {['Machine Learning', 'Generative AI', 'LLMs', 'Data Science', 'Python', 'API Integration', 'Intelligent Automation'].map((item) => (
                  <li key={item} className="flex items-center gap-2 p-2 rounded bg-white/[0.03] border border-white/5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Verifiable Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {verifiableStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="glass-card p-5 hover:border-accent/40">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-accent-light mt-1 font-sans">
                    {stat.label}
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-0.5 font-mono">
                    {stat.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  const categoryIcons = {
    'Programming': Terminal,
    'AI & Machine Learning': Brain,
    'Generative AI': Cpu,
    'Data Science': BarChart3,
    'Frameworks & Libraries': Layers,
    'Web': Globe,
    'Database': Database,
    'Tools': GitBranch,
  }

  return (
    <Section
      id="skills"
      indexTag="02 / SKILLS"
      title="Technical Skills"
      subtitle="Interactive skill clusters across programming languages, AI/ML models, data science, and web frameworks."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items], i) => {
          const CatIcon = categoryIcons[category] || Code2
          const numStr = String(i + 1).padStart(2, '0')
          return (
            <Reveal key={category} delay={i * 0.05}>
              <div className="glass-card p-6 h-full flex flex-col justify-between hover:border-gold/50 group">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl border border-gold/30 bg-gold/10 text-gold-light group-hover:scale-110 transition">
                        <CatIcon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                        {category}
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-600">{numStr}</span>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li key={skill} className="badge-tech font-mono text-xs">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{items.length} Skills</span>
                  <span className="text-accent-light group-hover:text-gold transition">Verified</span>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function ProjectModal({ p, onClose }) {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={p.title}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-panel-light p-6 sm:p-8 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <span className="font-mono text-xs font-bold text-gold uppercase tracking-wider">
              PROJECT {p.id}
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1 font-sans">{p.title}</h3>
            {p.subtitle && (
              <p className="text-sm font-semibold text-accent-light mt-1 font-mono">{p.subtitle}</p>
            )}
          </div>
          <button
            autoFocus
            onClick={onClose}
            aria-label="Close project modal"
            className="btn btn-ghost !p-2 rounded-full text-slate-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6 pt-5">
          {p.description && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold mb-2">
                Overview & Purpose
              </h4>
              <p className="text-slate-300 leading-relaxed text-sm font-body">{p.description}</p>
            </div>
          )}

          {p.pipeline && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold mb-2">
                {p.workflowTitle || 'Visual Pipeline Architecture'}
              </h4>
              <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-xl border border-white/10 bg-ink-light text-xs font-mono text-slate-300">
                {p.pipeline.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 font-semibold text-white">
                      {step}
                    </span>
                    {idx < p.pipeline.length - 1 && <ChevronRight className="h-3 w-3 text-gold" />}
                  </div>
                ))}
              </div>
            </div>
          )}

          {p.features && p.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold mb-3">
                Key Features
              </h4>
              <div className="grid gap-2 sm:grid-cols-2">
                {p.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2 text-xs text-slate-300 font-body">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {p.tech && p.tech.length > 0 && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gold mb-2">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="badge-tech font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-3 font-mono text-xs">
            {p.github ? (
              <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-ghost text-xs">
                <GithubIcon className="h-4 w-4" />
                <span>View GitHub Repo</span>
              </a>
            ) : (
              <button disabled className="btn btn-ghost text-xs opacity-50 cursor-not-allowed">
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
              </button>
            )}

            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary text-xs">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
          <button onClick={onClose} className="btn btn-secondary text-xs font-mono">
            Close Window
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <Section
      id="projects"
      indexTag="03 / PROJECTS"
      title="Featured Projects"
      subtitle="Engineering case-study cards detailing system architecture, predictive pipelines, and real-world technology stacks."
    >
      <div className="space-y-8">
        {/* PROJECT 01: RiskShield AI (Featured Showcase Card) */}
        {projects[0] && (
          <Reveal delay={0.1}>
            <div className="glass-card p-6 sm:p-10 border-accent/30 bg-gradient-to-br from-panel via-panel-light to-ink hover:border-accent/60 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black text-gold border border-gold/30 bg-gold/10 px-3 py-1 rounded-lg">
                    PROJECT {projects[0].id}
                  </span>
                  <span className="badge-gold font-mono">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    FEATURED AI SYSTEM
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">ML & Explainable AI</span>
              </div>

              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
                    {projects[0].title}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-accent-light font-mono">
                    {projects[0].subtitle}
                  </p>
                  <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base font-body">
                    {projects[0].description}
                  </p>

                  {/* VISUAL WORKFLOW PIPELINE FOR PROJECT 1 */}
                  <div className="mt-6 p-4 rounded-xl border border-white/10 bg-ink-light/90">
                    <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold mb-2.5">
                      Visual System Pipeline
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                      {projects[0].pipeline.map((step, idx) => (
                        <div key={step} className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 font-semibold text-white">
                            {step}
                          </span>
                          {idx < projects[0].pipeline.length - 1 && <ChevronRight className="h-3 w-3 text-gold" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Key Features
                    </h4>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {projects[0].features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-300 font-body">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-ink-light/80 p-6 flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[0].tech.map((t) => (
                        <span key={t} className="badge-tech font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10 font-mono">
                    <button
                      onClick={() => setSelectedProject(projects[0])}
                      className="btn btn-primary w-full justify-center text-xs py-2.5"
                    >
                      <span>VIEW PROJECT →</span>
                    </button>
                    {projects[0].github && (
                      <a
                        href={projects[0].github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost w-full justify-center text-xs py-2.5"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>GitHub Repo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* PROJECTS 02, 03, 04 Cards with Workflows */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(1).map((p, index) => {
            return (
              <Reveal key={p.id} delay={(index + 1) * 0.08}>
                <div className="glass-card p-6 h-full flex flex-col justify-between group hover:border-gold/50">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-gold">
                        PROJECT {p.id}
                      </span>
                      {p.isPlaceholder && (
                        <span className="badge-gold text-[10px] py-0.5 px-2 font-mono">
                          EDITABLE DETAILS
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition line-clamp-2 font-sans">
                      {p.title}
                    </h3>
                    {p.subtitle && (
                      <p className="text-xs font-semibold text-accent-light mt-1 font-mono">
                        {p.subtitle}
                      </p>
                    )}

                    <p className="mt-3 text-xs text-slate-400 leading-relaxed font-body line-clamp-3">
                      {p.description}
                    </p>

                    {/* VISUAL WORKFLOW FOR PROJECT CARDS */}
                    {p.pipeline && (
                      <div className="mt-4 p-3 rounded-lg border border-white/10 bg-ink-light/90">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold mb-1.5">
                          {p.workflowTitle || 'Pipeline Workflow'}
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono text-slate-300">
                          {p.pipeline.map((step, idx) => (
                            <div key={step} className="flex items-center gap-1">
                              <span className="px-1.5 py-0.5 rounded bg-white/[0.04] text-white">
                                {step}
                              </span>
                              {idx < p.pipeline.length - 1 && <ChevronRight className="h-2.5 w-2.5 text-gold shrink-0" />}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {p.isPlaceholder && (
                      <div className="mt-3 p-2.5 rounded-lg border border-gold/30 bg-gold/5 text-[11px] font-mono text-gold-light">
                        {p.placeholderNote}
                      </div>
                    )}

                    {p.tech && p.tech.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-1.5 font-mono">
                        {p.tech.map((t) => (
                          <li key={t} className="badge-tech text-[10px] py-0.5 px-2">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 font-mono">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="btn btn-primary flex-1 text-xs !py-2"
                    >
                      VIEW PROJECT →
                    </button>
                    {p.github ? (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-ghost text-xs !py-2 !px-3"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                    ) : (
                      <button
                        disabled
                        className="btn btn-ghost text-xs !py-2 !px-3 opacity-40 cursor-not-allowed"
                        title="GitHub repository"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal p={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </Section>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      indexTag="04 / EXPERIENCE"
      title="Experience"
      subtitle="Industry experience developing AI models, machine learning algorithms, and software solutions."
    >
      <div className="relative border-l-2 border-accent/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
        {experience.map((exp, index) => {
          const numStr = String(index + 1).padStart(2, '0')
          return (
            <div key={exp.role + exp.org} className="relative">
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-ink shadow-glow font-mono text-[10px] text-gold font-bold">
                {numStr}
              </div>

              <Reveal delay={index * 0.1}>
                <div className="glass-card p-6 sm:p-8 hover:border-accent/40">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white sm:text-2xl font-sans">
                        {exp.role}
                      </h3>
                      <p className="text-base font-semibold text-accent-light flex items-center gap-2 mt-0.5 font-mono">
                        <Building2 className="h-4 w-4 text-gold" />
                        {exp.org}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="badge-gold text-xs font-mono">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <span className="glass-pill text-xs font-mono">
                        {exp.mode}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-sm text-slate-300 font-body">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <ChevronRight className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.tags && (
                    <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05] font-mono">
                      {exp.tags.map((t) => (
                        <span key={t} className="badge-tech text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {exp.certificate && (
                    <div className="mt-5">
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-secondary text-xs inline-flex items-center gap-2 font-mono"
                      >
                        <FileText className="h-4 w-4" />
                        <span>View Internship Certificate</span>
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export function Education() {
  return (
    <Section
      id="education"
      indexTag="05 / EDUCATION"
      title="Education"
      subtitle="Academic background in Artificial Intelligence & Data Science and Higher Secondary Science."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {education.map((edu, index) => (
          <Reveal key={edu.degree} delay={index * 0.08}>
            <div className="glass-card p-6 h-full flex flex-col justify-between hover:border-gold/50">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] text-gold">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <span className="glass-pill text-[10px] font-mono">{edu.tag}</span>
                </div>
                <h3 className="text-base font-bold text-white tracking-tight leading-snug font-sans">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-xs font-medium text-slate-400 font-body">
                  {edu.school}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">{edu.period}</span>
                <span className="badge-gold">{edu.score}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      indexTag="06 / CERTIFICATIONS"
      title="Certifications"
      subtitle="Verified completion and technical internship credentials."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <Reveal key={cert.title}>
            <div className="glass-card p-6 h-full flex flex-col justify-between hover:border-accent/50 group">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2.5 rounded-xl border border-accent/30 bg-accent/10 text-accent-light group-hover:scale-110 transition">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="badge-gold text-[10px] font-mono">
                    {cert.file?.endsWith('.pdf') ? 'VERIFIED PDF' : 'VERIFIED CERTIFICATE'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  {cert.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400 font-medium">
                  Issuer: {cert.issuer}
                </p>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  {cert.date}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-full justify-center text-xs py-2.5 font-mono"
                >
                  <FileText className="h-4 w-4" />
                  <span>VIEW CERTIFICATE →</span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function CodeSection() {
  return (
    <Section
      id="code"
      indexTag="08 / EXPLORE MY CODE"
      title="Building in Public"
      subtitle="Developer workspace preview highlighting code repositories, open-source work, and machine learning models."
    >
      <Reveal>
        <div className="glass-card p-6 sm:p-8 border-accent/30 bg-[#050914] font-mono shadow-2xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Terminal className="h-4 w-4 text-accent-light" />
              <span>bash - nikks1036@developer-workspace</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
          </div>

          {/* Terminal Content Commands */}
          <div className="space-y-3 text-xs sm:text-sm">
            <div>
              <span className="text-emerald-400 font-bold">$ whoami</span>
              <div className="text-slate-200 mt-1 pl-4">Nikhil Shingade</div>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">$ role</span>
              <div className="text-slate-200 mt-1 pl-4">Artificial Intelligence Engineer</div>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">$ focus</span>
              <div className="text-slate-200 mt-1 pl-4">Machine Learning | Generative AI | LLMs | Data Science</div>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">$ github</span>
              <div className="text-accent-light mt-1 pl-4 flex items-center gap-2">
                <GithubIcon className="h-4 w-4" />
                <a href={profile.github} target="_blank" rel="noreferrer" className="hover:underline">
                  github.com/nikks1036
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary py-2.5 px-5 text-xs font-mono"
            >
              <GithubIcon className="h-4 w-4" />
              <span>VISIT GITHUB WORKSPACE →</span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function ResumeSection() {
  return (
    <Section
      id="resume"
      indexTag="09 / MY RESUME"
      title="My Resume"
      subtitle="Detailed record of my education, technical skills, project contributions, and practical internship experiences."
    >
      <Reveal>
        <div className="glass-card p-8 sm:p-10 border-gold/30 bg-gradient-to-r from-panel via-panel-light to-ink text-center max-w-3xl mx-auto space-y-6">
          <div className="mx-auto p-4 rounded-2xl border border-gold/30 bg-gold/10 text-gold-light w-fit">
            <FileText className="h-8 w-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white font-sans uppercase tracking-tight">
              READY TO BUILD SOMETHING INTELLIGENT?
            </h3>
            <p className="mt-2 text-slate-300 text-sm font-body">
              Explore my education, technical skills, projects and practical experience in a clean, recruiter-friendly format.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2 font-mono">
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary py-3 px-6 text-xs font-bold"
            >
              <ExternalLink className="h-4 w-4" />
              <span>VIEW RESUME (PDF)</span>
            </a>
            <a
              href={profile.resume}
              download
              className="btn btn-secondary py-3 px-6 text-xs font-bold"
            >
              <Download className="h-4 w-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formEndpoint) {
      const body = `${formData.message}\n\n— Sent from Portfolio by ${formData.name} (${formData.email})`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Contact'
      )}&body=${encodeURIComponent(body)}`
      return setStatus('Opening your default email application…')
    }
    setStatus('Sending message…')
    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error()
      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus('Message sent successfully! Thank you for reaching out.')
    } catch {
      setStatus(`Could not send automatically. Please email ${profile.email} directly.`)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-accent focus:bg-white/[0.05] focus:outline-none transition font-body'

  return (
    <Section
      id="contact"
      indexTag="10 / CONTACT"
      title="LET'S BUILD SOMETHING INTELLIGENT."
      subtitle="Whether it's an AI application, machine learning system, data-driven dashboard, or intelligent automation solution. Let's connect."
    >
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        {/* Left Side Contact Info */}
        <Reveal className="space-y-6">
          <div className="glass-card p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
              Get in Touch
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-body">
              Whether it's an AI application, machine learning system, data-driven dashboard, or intelligent automation solution. Let's connect.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] transition hover:border-gold/40 hover:bg-gold/5 group"
              >
                <div className="p-2.5 rounded-lg border border-gold/30 bg-gold/10 text-gold-light">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500">Email Address</div>
                  <div className="text-sm font-semibold text-white group-hover:text-gold-light transition font-mono">
                    {profile.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] transition hover:border-accent/40 hover:bg-accent/5 group"
              >
                <div className="p-2.5 rounded-lg border border-accent/30 bg-accent/10 text-accent-light">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-500">Phone Number</div>
                  <div className="text-sm font-semibold text-white group-hover:text-accent-light transition font-mono">
                    {profile.phone}
                  </div>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3 font-mono">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost text-xs">
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost text-xs">
                <LinkedinIcon className="h-4 w-4 text-accent-light" />
                <span>LinkedIn</span>
              </a>
              <a href={profile.resume} download className="btn btn-secondary text-xs">
                <Download className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Side Form */}
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2 font-sans">Send Message</h3>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-300 font-sans">
                Your Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Recruiter / Collaborator"
                value={formData.name}
                onChange={handleChange('name')}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-300 font-sans">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="e.g. name@company.com"
                value={formData.email}
                onChange={handleChange('email')}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-slate-300 font-sans">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="e.g. AI Engineering Opportunity"
                value={formData.subject}
                onChange={handleChange('subject')}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-300 font-sans">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                required
                placeholder="Write your message details..."
                value={formData.message}
                onChange={handleChange('message')}
                className={inputClass}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full justify-center text-sm py-3 mt-2 font-mono">
              <Mail className="h-4 w-4" />
              <span>SEND MESSAGE</span>
            </button>

            {status && (
              <p role="status" className="mt-3 text-xs font-semibold text-gold text-center font-mono">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-light/80 py-12 backdrop-blur-md text-center">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <img
          src={logo}
          alt="Nikhil Shingade Logo"
          className="mx-auto mb-4 h-12 w-12 rounded-2xl object-contain shadow-glow border border-white/10"
        />

        <h3 className="text-lg font-extrabold text-white tracking-tight font-sans">
          {profile.name}
        </h3>
        <p className="mt-1 text-xs text-slate-400 font-mono">
          {profile.title} | {profile.subtitle}
        </p>

        <div className="my-6 flex flex-wrap justify-center gap-6 text-xs font-semibold font-mono">
          {NAV.map((n) => (
            <a key={n.id} href={n.href} className="text-slate-400 hover:text-white transition">
              {n.name}
            </a>
          ))}
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© 2026 Nikhil Shingade. All rights reserved.</p>
          <p>AI & Data Science Engineering Portfolio</p>
        </div>
      </div>
    </footer>
  )
}
