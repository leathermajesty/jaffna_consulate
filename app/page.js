"use client";

import { useEffect } from 'react';
import Card from '../components/Card';
import HeroCarousel from '../components/HeroCarousel';

export default function Home() {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Reveal logic (Fade in)
          const reveals = document.querySelectorAll(".reveal");
          reveals.forEach((el) => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 150) {
              el.classList.add("active");
            }
          });

          // Advanced Multi-Layer Parallax logic
          const parallaxElements = document.querySelectorAll("[data-parallax]");
          parallaxElements.forEach((el) => {
            const speedY = parseFloat(el.getAttribute("data-parallax")) || 0;
            const speedX = parseFloat(el.getAttribute("data-parallax-x")) || 0;
            const rotationSpeed = parseFloat(el.getAttribute("data-parallax-rotate")) || 0;

            const rect = el.getBoundingClientRect();
            const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);

            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const yPos = (scrollPercent - 0.5) * 200 * speedY;
              const xPos = (scrollPercent - 0.5) * 100 * speedX;
              const rotation = (scrollPercent - 0.5) * 50 * rotationSpeed;
              el.style.transform = `translateY(${yPos}px) translateX(${xPos}px) rotate(${rotation}deg)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="main-content" className="flex-grow focus:outline-none overflow-x-hidden" tabIndex="-1">
      <HeroCarousel />

      {/* Announcements Marquee */}
      <section className="bg-saffron-500 py-4 relative z-10 shadow-lg w-full px-12" aria-label="Announcements">
        <div className="w-full">
          <div className="overflow-hidden">
            <div className="marquee whitespace-nowrap text-white font-medium">
              <span className="inline-block mr-8">Inviting applications for fully funded scholarship schemes by Government of India exclusively for Sri Lankan nationals</span>
              <span className="inline-block mr-8">Visit indbiz.gov.in for opportunities in Indian Economy</span>
              <span className="inline-block mr-8">Contribute your rendering of the National Anthem of India at rashtragaan.in</span>
              <span className="inline-block mr-8">The Indian Visa Service Application Centre in Jaffna reopens</span>
              <span className="inline-block mr-8">Revised Travel Advisory due to COVID-19 Pandemic</span>
              <span className="inline-block mr-8">Meet the Consul General without appointment every Wednesday 11am-1pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="bg-white py-24 border-t border-gray-100 reveal relative overflow-hidden" aria-label="News and Updates">
        {/* Parallax Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-saffron-500/5 rounded-full parallax-snappy" data-parallax="0.8" data-parallax-x="0.2"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-navy-900/5 rounded-full parallax-snappy" data-parallax="-0.5" data-parallax-x="-0.3"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div
              className="inline-block bg-navy-900 text-white text-[10px] font-black tracking-[0.3em] uppercase px-6 py-2 rounded-full mb-6"
              data-parallax="-0.2"
            >
              Latest Information
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-6">
              News & <span className="text-saffron-600">Updates</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Block 1: Press Releases */}
            <div className="space-y-8" data-parallax="0.1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-10 bg-saffron-500 rounded-full"></div>
                <h3 className="text-3xl font-black text-navy-900 uppercase tracking-tight">Press Releases</h3>
              </div>

              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="group bg-gray-50 border border-gray-100 p-8 rounded-[32px] hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-16 h-16 bg-white rounded-2xl flex flex-col items-center justify-center shadow-sm border border-gray-100 group-hover:bg-saffron-500 group-hover:border-saffron-500 transition-colors">
                        <span className="text-[10px] font-black text-gray-400 group-hover:text-white/80 uppercase">Apr</span>
                        <span className="text-2xl font-black text-navy-900 group-hover:text-white leading-none">{15 + i}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-saffron-600 transition-colors">
                          {i === 1 ? "Bilateral meeting on Trade and Investment" : "Special Consular Camp Announcement"}
                        </h4>
                        <p className="text-gray-600 line-clamp-2 text-base mb-4 leading-relaxed">
                          {i === 1
                            ? "A high-level meeting was convened to explore new avenues for economic cooperation between the two nations."
                            : "The Consulate will host a special camp to assist Indian citizens with urgent documentation and services."}
                        </p>
                        <a href="#" className="inline-flex items-center text-xs font-black text-saffron-600 uppercase tracking-widest hover:gap-3 transition-all">
                          Read Full Release <span className="ml-2">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-[24px] text-gray-400 font-bold hover:border-saffron-500 hover:text-saffron-500 transition-all uppercase tracking-widest text-xs">
                View All Press Releases
              </button>
            </div>

            {/* Block 2: Events */}
            <div className="space-y-8" data-parallax="-0.1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1.5 h-10 bg-green-600 rounded-full"></div>
                <h3 className="text-3xl font-black text-navy-900 uppercase tracking-tight">Upcoming Events</h3>
              </div>

              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="group bg-gray-50 border border-gray-100 p-8 rounded-[32px] hover:bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                    <div className="flex items-start gap-6">
                      <div className="shrink-0 w-16 h-16 bg-white rounded-2xl border-2 border-green-600/20 flex flex-col items-center justify-center group-hover:bg-green-600 group-hover:border-green-600 transition-colors">
                        <svg className="w-8 h-8 text-green-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-green-600 transition-colors">
                          {i === 1 ? "International Yoga Day Celebrations" : "Indian Cultural Night 2024"}
                        </h4>
                        <div className="flex items-center gap-4 mb-3 text-xs font-bold uppercase tracking-tighter">
                          <span className="text-green-600">Venue: Nallur Ground</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-500">Time: 06:00 AM</span>
                        </div>
                        <p className="text-gray-600 line-clamp-2 text-base leading-relaxed">
                          {i === 1
                            ? "Join us for a mass yoga demonstration to celebrate the spirit of wellness and harmony."
                            : "A vibrant evening showcasing classical dances and music traditions of India."}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 border-2 border-dashed border-gray-200 rounded-[24px] text-gray-400 font-bold hover:border-green-600 hover:text-green-600 transition-all uppercase tracking-widest text-xs">
                Explore Event Calendar
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Consul General Profile Section */}
      <section className="bg-navy-900 py-24 reveal relative overflow-hidden" aria-label="Consul General Profile">
        {/* Multi-Layer Parallax Circles */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-saffron-500/10 rounded-full -mr-64 parallax-snappy" data-parallax="0.2" data-parallax-x="0.1"></div>
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-white/5 rounded-full -ml-32 parallax-snappy" data-parallax="-0.4" data-parallax-x="-0.2"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16 bg-white/5 backdrop-blur-md p-10 md:p-16 rounded-[40px] border border-white/10 shadow-2xl">

            <div className="w-full md:w-1/3 shrink-0 flex justify-center">
              <div className="relative group parallax-snappy" data-parallax="0.15" data-parallax-x="-0.1">
                <div className="absolute inset-0 bg-saffron-500 rounded-[30px] rotate-6 group-hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative border-8 border-navy-900 rounded-[30px] overflow-hidden shadow-2xl">
                  <img
                    src="/images/consul-general.png"
                    alt="Shri Sai Murali S."
                    className="w-full h-auto object-cover max-w-[320px]"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <div className="mb-8" data-parallax="-0.1" data-parallax-x="0.05">
                <span className="inline-block bg-saffron-500 text-white text-xs font-black tracking-widest uppercase px-6 py-2 rounded-full mb-6">
                  OFFICIAL PROFILE
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                  Shri Sai Murali S.
                </h2>
                <h3 className="text-2xl font-medium text-white italic">
                  Consul General of India, Jaffna
                </h3>
              </div>

              <div className="text-gray-300 text-xl leading-relaxed mb-10 space-y-6" data-parallax="0.05">
                <p>
                  A career diplomat who joined the Indian Foreign Service in 2019, Shri Sai Murali S. brings a wealth of international experience to Northern Sri Lanka.
                </p>
                <p>
                  His previous postings include critical roles in **Moscow**, **New Delhi**, and serving as the Consul General in **Vladivostok**. His linguistic versatility spans English, Hindi, Tamil, Telugu, and Russian.
                </p>
              </div>

              <div>
                <a
                  href="/consulate-general/consul-general"
                  className="bg-saffron-500 hover:bg-saffron-600 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl hover:shadow-saffron-500/20 hover:-translate-y-1 inline-flex items-center"
                >
                  READ FULL PORTFOLIO
                  <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Links Section */}
      <section className="bg-white py-24 reveal relative overflow-hidden" aria-label="Important Links">
        {/* Floating background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full -mr-48 -mt-48 parallax-snappy" data-parallax="0.6" data-parallax-rotate="0.5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50/50 rounded-full -ml-48 -mb-48 parallax-snappy" data-parallax="-0.6" data-parallax-rotate="-0.5"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6 border-b-4 border-saffron-500 pb-3 inline-block">
              Important Links
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access key resources and essential government services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#" className="group bg-gray-50 border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-blue-500 rounded-3xl flex items-center justify-center shadow-xl mb-6 transform group-hover:rotate-6 transition-transform duration-300 parallax-snappy"
                data-parallax="0.4"
              >
                <span className="text-white text-4xl">🔒</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors">PRABHASS Portal</h3>
              <p className="text-gray-600 text-lg">Comprehensive online consular services for non-residents.</p>
            </a>

            <a href="#" className="group bg-gray-50 border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center shadow-xl mb-6 transform group-hover:-rotate-6 transition-transform duration-300 parallax-snappy"
                data-parallax="0.3"
              >
                <span className="text-white text-4xl">📱</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-green-600 transition-colors">MADAD</h3>
              <p className="text-gray-600 text-lg">Direct emergency assistance and grievance monitoring.</p>
            </a>

            <a href="#" className="group bg-gray-50 border border-gray-100 p-8 rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-purple-500 rounded-3xl flex items-center justify-center shadow-xl mb-6 transform group-hover:rotate-12 transition-transform duration-300 parallax-snappy"
                data-parallax="0.5"
              >
                <span className="text-white text-4xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-purple-600 transition-colors">Right to Information</h3>
              <p className="text-gray-600 text-lg">Empowering citizens to access public information.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="bg-gray-50 py-24 reveal relative overflow-hidden" aria-label="Social Media">
        {/* Background Parallax Shapes */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full -ml-64 -mt-32" data-parallax="0.2"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div
              className="inline-block bg-navy-900 text-white text-xs font-black tracking-[0.2em] uppercase px-6 py-2 rounded-full mb-6"
              data-parallax="-0.3"
            >
              Get Connected
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-6">
              Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Presence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Column 1: Instagram + X */}
            <div className="flex flex-col gap-12">
              {/* Instagram Side */}
              <div className="flex flex-col gap-6" data-parallax="0.1">
                <div className="bg-white p-2 rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1 rounded-[30px]">
                    <div className="bg-white rounded-[29px] overflow-hidden">
                      {/* IG Header */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-0.5">
                            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                              <img src="https://www.indiainnewyork.gov.in/images/Emblem_of_India.svg" className="w-full h-full object-contain p-1" alt="Profile" />
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-xs text-gray-900 leading-none">india_in_jaffna</p>
                            <p className="text-[10px] text-gray-500 mt-1">Instagram</p>
                          </div>
                        </div>
                        <a href="https://www.instagram.com/india_in_jaffna/" target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded-lg text-xs font-bold">Follow</a>
                      </div>
                      {/* IG Grid */}
                      <div className="grid grid-cols-3 gap-1 p-1">
                        <div className="aspect-square bg-gray-100 relative group overflow-hidden">
                          <img src="https://www.cgijaffna.gov.in/uploads/events/Photo.jpeg" className="w-full h-full object-cover" alt="Post" />
                        </div>
                        <div className="aspect-square bg-gray-100 relative group overflow-hidden">
                          <img src="https://www.cgijaffna.gov.in/uploads/events/Picture.jpeg" className="w-full h-full object-cover" alt="Post" />
                        </div>
                        <div className="aspect-square bg-gray-100 relative group overflow-hidden">
                          <img src="https://www.cgijaffna.gov.in/uploads/events/Photo3.jpeg" className="w-full h-full object-cover" alt="Post" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* X (Twitter) Side */}
              <div className="flex flex-col gap-6" data-parallax="0.2">
                <div className="bg-white p-2 rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="bg-black p-1 rounded-[30px]">
                    <div className="bg-white rounded-[29px] overflow-hidden">
                      {/* X Header */}
                      <div className="bg-black p-4 text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-white p-1">
                            <img src="https://www.indiainnewyork.gov.in/images/Emblem_of_India.svg" className="w-full h-full object-contain" alt="Emblem" />
                          </div>
                          <h4 className="font-bold text-xs uppercase tracking-widest">X Timeline</h4>
                        </div>
                      </div>
                      {/* X Official Embed */}
                      <div className="bg-white overflow-y-auto" style={{ height: '350px' }}>
                        <a
                          className="twitter-timeline"
                          data-height="350"
                          data-theme="light"
                          href="https://twitter.com/cgjaffna?ref_src=twsrc%5Etfw"
                        >
                          Tweets by @cgjaffna
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Facebook */}
            <div className="flex flex-col gap-8 h-full">
              <div className="bg-white p-2 rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 h-full flex flex-col">
                <div className="bg-blue-600 p-1 rounded-[30px] flex-1 flex flex-col">
                  <div className="bg-white rounded-[29px] overflow-hidden flex-1 flex flex-col">
                    {/* FB Header */}
                    <div className="bg-[#1877F2] p-6 text-white shrink-0">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white p-1">
                          <img src="https://www.indiainnewyork.gov.in/images/Emblem_of_India.svg" className="w-full h-full object-contain" alt="Emblem" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg leading-tight text-white mb-0">Consulate General of India, Jaffna</h4>
                          <p className="text-[10px] opacity-80 uppercase font-black">Official Facebook Updates</p>
                        </div>
                      </div>
                    </div>
                    {/* FB Official Embed */}
                    <div className="flex-1 bg-white min-h-[450px]">
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/CGJaffna&tabs=timeline&width=500&height=450&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', overflow: 'hidden', height: '100%', minHeight: '450px' }}
                        scrolling="yes"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="Facebook Page of CGI Jaffna"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2 flex items-center gap-3">
                    <svg className="w-8 h-8 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook Official Page
                  </h3>
                  <p className="text-gray-600 leading-relaxed">Join 10,000+ followers for daily news and broadcasts.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      {/* Contact Us Section */}
      <section className="bg-white py-24 reveal relative overflow-hidden" aria-label="Contact Us">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">

            {/* Left: Contact Info */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center" data-parallax="0.1">
              <div
                className="inline-block bg-orange-600 text-white text-xs font-black tracking-[0.2em] uppercase px-6 py-2 rounded-full mb-8 shadow-lg shadow-orange-500/20"
                data-parallax="-0.3"
              >
                Reach Us
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-navy-900 mb-10 leading-tight">
                Get in <span className="text-orange-600">Touch</span> <br />
                with the Consulate
              </h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1">Our Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      No. 14, Maruthady Lane, Nallur, <br />
                      Jaffna, Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 leading-relaxed">
                      +94-21-2220504 / 2220505
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy-900 mb-1">Email Support</h4>
                    <p className="text-gray-600 leading-relaxed">
                      hoc.jaffna@mea.gov.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className="w-full lg:w-3/5" data-parallax="-0.1">
              <div className="bg-gray-100 rounded-[48px] overflow-hidden shadow-2xl border-8 border-white aspect-square relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15743.896792349187!2d80.02129780000001!3d9.6658319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe56a08a91c2ed%3A0xf8cf2dccacb7b5de!2sConsulate%20General%20of%20India!5e0!3m2!1sen!2slk!4v1713370000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Consulate General of India, Jaffna Location"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs transform group-hover:-translate-y-2 transition-transform">
                  <p className="text-sm font-bold text-navy-900 mb-1">Find us faster</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Just 1.5km from Nallur Temple</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
