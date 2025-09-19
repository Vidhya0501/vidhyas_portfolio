import React from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Legacies Techno Pvt Ltd, Chennai',
    period: 'Feb 2025 – Sep 2025',
    bullets: [
      'Converted legacy document indexing system into a scalable web application — improved processing speed by 40% and reduced indexing errors by 25%.',
      'Built role-based access workflows, batch assignment features and real-time admin dashboards (SvelteKit, Tailwind, Node.js, MSSQL).',
      'Worked on Lynt-x Document Tool (Next.js, Tailwind, PostgreSQL) — image viewing, OCR processing, SFTP integration.'
    ]
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Kodukku Classifieds Pvt Ltd, Chennai',
    period: 'Aug 2024 – Jan 2025',
    bullets: [
      'Built classifieds web app with Blood Donation module using geolocation & notifications.',
      'Optimized frontend performance (35% load reduction) and built REST APIs with MSSQL and AWS S3.'
    ]
  }
]

export default function Experience(){
  return (
    <section id="experience" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <div className="space-y-6">
        {experiences.map((e)=>(
          <div key={e.role} className="bg-white shadow-sm rounded-md p-5">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{e.role}</div>
                <div className="text-sm md:text-base text-slate-600">{e.company}</div>
              </div>
              <div className="text-sm md:text-base text-slate-500">{e.period}</div>
            </div>
            <ul className="mt-3 list-disc ml-5 text-sm md:text-base space-y-1">
              {e.bullets.map(b=> <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
