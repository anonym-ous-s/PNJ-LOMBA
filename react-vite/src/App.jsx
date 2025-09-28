import React, { useEffect } from 'react'

export default function App(){
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{if(e.isIntersecting) e.target.classList.add('visible')})
    },{threshold:0.08})

    document.querySelectorAll('[data-animate]').forEach(el=>{
      el.classList.add('fade-in');observer.observe(el)
    })
  },[])

  return (
    <div className="font-sans bg-white text-gray-800">
      <header className="p-4"><img src="/assets/logo.png" alt="BANBAN" className="w-36"/></header>

      <section className="hero bg-hero-blue text-white">
        <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="left md:w-1/2" data-animate>
            <h1 className="title font-extrabold text-3xl md:text-5xl leading-tight mb-4">Bantu Belajar<br/>Bantu Bersosial</h1>
            <p className="subtitle text-lg md:text-xl mb-6 text-white/90">Hallo, Ready to Learn and earn more points today?</p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="btn btn-outline">Pelajari Lebih Lanjut</a>
              <a href="#" className="btn btn-primary">Mulai Belajar</a>
            </div>
          </div>

          <div className="right md:w-1/2 flex justify-center" data-animate>
            <div className="image-wrap relative">
              <div className="blob blob-purple"></div>
              <div className="blob blob-orange"></div>
              <img src="/assets/graduation.png" alt="Graduation" className="hero-image rounded-2xl shadow-2xl relative z-10"/>
            </div>
          </div>
        </div>
      </section>

      {/* rest of layout (features, trophies, testimonials, footer) - same structure as static */}

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-8" data-animate>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Belajar Jadi Lebih Seru dan Terarah!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Semua yang kamu butuhkan untuk belajar ada di BANBAN</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card" data-animate><div className="icon">👥</div><h3 className="font-semibold text-lg">Belajar Berkelompok</h3></div>
            <div className="card" data-animate><div className="icon">⏱️</div><h3 className="font-semibold text-lg">Fokus Timer</h3></div>
            <div className="card md:col-span-2" data-animate><div className="icon">🏆</div><h3 className="font-semibold text-lg">Prestasi</h3></div>
            <div className="card" data-animate><div className="icon">📚</div><h3 className="font-semibold text-lg">Materi</h3></div>
          </div>
        </div>
      </section>

      <section className="bg-orange-400 py-12 px-6" data-animate>
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Quality Education</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Problem trying to resolve the conflict between the two major realms of classical physics.</p>

          <div className="flex justify-center gap-8">
            <div className="trophy first">1st Place</div>
            <div className="trophy second">2nd Place</div>
            <div className="trophy third">3rd Place</div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="testimonial" data-animate>
              <div className="stars">★★★★★</div>
              <p className="text-gray-600 mb-4 text-sm">Some people say you need to work hard to reach your financial goals for the month and year.</p>
              <div className="flex items-center"><img src="https://placehold.co/40x40/gray/white?text=User" alt="User" className="w-10 h-10 rounded-full mr-2"/><div><h4 className="font-semibold text-sm">Hendry Wijaya</h4><p className="text-xs text-gray-500">Manager</p></div></div>
            </div>

            <div className="testimonial">...</div>
            <div className="testimonial">...</div>
            <div className="testimonial">...</div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-6" data-animate>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div><h3 className="font-bold mb-4">Navigate</h3></div>
            <div><h3 className="font-bold mb-4">Features</h3></div>
            <div><h3 className="font-bold mb-4">Resources</h3></div>
            <div><h3 className="font-bold mb-4">Get in Touch</h3></div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">All Rights Reserved</div>
        </div>
      </footer>

    </div>
  )
}
