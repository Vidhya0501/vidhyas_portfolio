import React from 'react'

const projects = [
  {
    title: 'TPB (Title Plant Builder)',
    company: 'Legacies Techno Pvt Ltd',
    tech: 'SvelteKit, Tailwind CSS, Node.js, MSSQL',
    desc: 'Document indexing web application for Fidelity National Financial. Features: secure login, batch-wise assignment, real-time admin dashboard.'
  },
  {
    title: 'Lynt-x Document Tool (SaaS)',
    company: 'Legacies Techno Pvt Ltd',
    tech: 'Next.js, Tailwind, Prisma, PostgreSQL',
    desc: 'SaaS for document processing — image viewing, OCR workflows, multi-tenant batch management.'
  },
  {
    title: 'Blood Donation Module (Kodukku Classifieds)',
    company: 'Kodukku Classifieds Pvt Ltd',
    tech: 'MERN, Geolocation API, Notifications',
    desc: 'Developed a blood donation module integrated into Kodukku Classifieds, allowing users to register as donors, get notified of urgent requests, and match donors/recipients using location-based search.'
  },
  {
    title: 'Online Music Player',
    company: 'Personal Project',
    tech: 'MERN',
    desc: 'Full-stack music streaming platform with authentication, playlists, and Cloudinary integration.'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Selected Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p=>(
          <div key={p.title} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="font-semibold text-lg">{p.title}</div>
            <div className="text-sm md:text-base text-slate-600 mb-1">{p.company}</div>
            <div className="text-sm md:text-base text-slate-500 italic">{p.tech}</div>
            <p className="mt-3 text-sm md:text-base leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
