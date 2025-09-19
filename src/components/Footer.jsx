import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white/60 mt-8">
      <div className="max-w-5xl mx-auto px-6 py-6 text-sm md:text-base text-slate-600 text-center md:text-left">
        © {new Date().getFullYear()} Vidhya S — Full Stack Developer
      </div>
    </footer>
  )
}
