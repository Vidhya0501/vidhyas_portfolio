import React, { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Vidhya S</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 text-sm text-slate-600">
            <a href="#about" className="hover:underline">About</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md border border-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-white border-t border-slate-200">
            <div className="flex flex-col px-6 py-3 space-y-2 text-slate-700">
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">
        <Hero />
        <div className="max-w-5xl mx-auto px-6">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
