import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">About</h3>
      <p className="max-w-3xl">Dynamic and result-oriented Full Stack Developer with hands-on experience building document management and SaaS platforms. Passionate about web development, AI, and building scalable systems.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">Core Competencies</h4>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-sm md:text-base">
            <li>Interactive UI using React, SvelteKit, Next.js</li>
            <li>APIs with Node.js / Express</li>
            <li>PostgreSQL, MSSQL, MongoDB</li>
            <li>CI/CD, Git workflows</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Technical Skills</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {['React.js','Next.js','SvelteKit','Node.js','Express','PostgreSQL','MSSQL','MongoDB','Tailwind CSS','Shadcn'].map((s)=>(
              <span key={s} className="px-3 py-1 bg-white/60 text-slate-800 rounded-md text-sm md:text-base">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
