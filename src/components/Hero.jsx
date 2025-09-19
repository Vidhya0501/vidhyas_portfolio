import React from 'react'
import profilePic from '/assets/profilePic.jpg'
export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-extrabold">Hi, I’m Vidhya S</h2>
            <p className="mt-4 text-lg">Full Stack Developer — MERN, SvelteKit, Next.js, PostgreSQL, MSSQL. I build scalable web applications and enjoy solving complex problems using modern web technologies.</p>
            <div className="mt-6 flex gap-4">
              <a href="#projects" className="bg-white/10 px-4 py-2 rounded-md border border-white/20 hover:bg-white/20">View projects</a>
              <a href="#contact" className="bg-white px-4 py-2 rounded-md text-slate-900 font-medium">Contact me</a>
            </div>
          </div>
          {/* <div className="w-48 h-48 rounded-lg bg-white/10 flex items-center justify-center">
            <div className="text-center">
              <div className="text-sm">Chennai, Tamil Nadu</div>
              <div className="mt-2 font-medium">(+91) 9159448195</div>
              <div className="text-xs mt-1">vidhyasuri97@gmail.com</div>
            </div>
          </div> */}
           <div className="w-48 h-49 rounded-full overflow-hidden shadow-lg border-4 border-white/20">
            <img
              src={profilePic}
              alt="Vidhya S"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
