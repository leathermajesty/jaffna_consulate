"use client";

import { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Photo.jpeg',
    title: "Celebration of International Women's Day 2026 at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/791'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/St_-Anthonys-Feast-at-Katchatheevu-1.jpeg',
    title: "St. Anthony's Feast at Katchatheevu",
    link: 'https://www.cgijaffna.gov.in/events/detail/790'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Celebration-of-World-Hindi-Day-2026-1.jpeg',
    title: "Celebration of World Hindi Day 2026 at University of Vavuniya",
    link: 'https://www.cgijaffna.gov.in/events/detail/789'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Photo11.jpeg',
    title: "Celebration of ITEC Day at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/788'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture150.jpeg',
    title: "The International Thirukkural Conference on Human Dignity",
    link: 'https://www.cgijaffna.gov.in/events/detail/787'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Photo1.jpeg',
    title: "Consul General Shri Sai Murali S. offered floral tributes at the IPKF Memorial, Palaly",
    link: 'https://www.cgijaffna.gov.in/events/detail/781'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Photo3.jpeg',
    title: "Celebration of the 77th Republic Day of India",
    link: 'https://www.cgijaffna.gov.in/events/detail/783'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Photo5.jpeg',
    title: "A cultural programme was organized at JTCC as a part of the 77th Republic Day Reception",
    link: 'https://www.cgijaffna.gov.in/events/detail/785'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture.jpeg',
    title: "CGI Jaffna addressed the Second International Research Conference by University of Jaffna's Sir Ponn",
    link: 'https://www.cgijaffna.gov.in/events/detail/747'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture1.jpeg',
    title: "Bharatanatyam performance on the Day II of the Second International Research Conference by Universit",
    link: 'https://www.cgijaffna.gov.in/events/detail/748'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture2.jpeg',
    title: "CGI Jaffna commemorated Rashtriya Ekta Diwas marking the 150th birth anniversary of Sardar Patel at",
    link: 'https://www.cgijaffna.gov.in/events/detail/749'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture126.jpeg',
    title: "Launch of The Thirukkural 1330: Musical Ethos - Volume II, organised at JTCC in collaboration with C",
    link: 'https://www.cgijaffna.gov.in/events/detail/751'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture120.jpeg',
    title: "Agripreneurship Roundtable at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/752'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture105.jpeg',
    title: "CGI Jaffna organised Viksit Bharat Run 2025 at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/753'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture98.jpeg',
    title: "CGI Jaffna, in collaboration with University of Vavuniya, hosted Volleyball Competition 2025",
    link: 'https://www.cgijaffna.gov.in/events/detail/754'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture91.jpeg',
    title: "CGI Jaffna celebrated Hindi Diwas at University of Vavuniya as part of Hindi Pakhwada 2025",
    link: 'https://www.cgijaffna.gov.in/events/detail/756'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture85.jpeg',
    title: "CGI Jaffna, in collaboration with Dhanur, organized the Ramayana Cultural Conference at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/757'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture78.jpeg',
    title: "Celebration of Hindi Diwas 2025 at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/760'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture74.jpeg',
    title: "Consul General Shri Sai Murali S. attended the 3rd edition of Yarl Dreamin",
    link: 'https://www.cgijaffna.gov.in/events/detail/762'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture70.jpeg',
    title: "Consul General Shri Sai Murali S. addressed the Global Seminar on Nutrition, Health and Early Learni",
    link: 'https://www.cgijaffna.gov.in/events/detail/763'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture67.jpeg',
    title: "CGI Jaffna, in collaboration with the Jaffna District Chess Association organized Chess Tournament",
    link: 'https://www.cgijaffna.gov.in/events/detail/764'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture62.jpeg',
    title: "YGC Innovation Festival 2025 at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/766'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture58.jpeg',
    title: "Consul General Shri Sai Murali S. attended World Entrepreneurs Day & Industrial Exhibition 2025 at U",
    link: 'https://www.cgijaffna.gov.in/events/detail/768'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture55.jpeg',
    title: "Bharatanatyam performance by Kiranmayee Madupu and her team at JTCC",
    link: 'https://www.cgijaffna.gov.in/events/detail/772'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture43.jpeg',
    title: "CGI Jaffna in collaboration with ICCR hosted Divine Ecstasy at the iconic Nallur Temple as part of",
    link: 'https://www.cgijaffna.gov.in/events/detail/773'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture39.jpeg',
    title: "Carnatic music concert by Dr. Nithyasree Mahadevan at JTCC organised by CGI Jaffna",
    link: 'https://www.cgijaffna.gov.in/events/detail/770'
  },
  {
    image: 'https://www.cgijaffna.gov.in/uploads/events/Picture19.jpeg',
    title: "Celebration of the 79th Independence Day of India",
    link: 'https://www.cgijaffna.gov.in/events/detail/775'
  }
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isHovered]);

  return (
    <div className="container mx-auto max-w-[1800px] my-6 px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: The Slider */}
        <section
          className="relative w-full lg:w-3/4 h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 shadow-xl border border-gray-200 rounded-2xl"
          aria-label="Hero Image Carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Sliding Image Container */}
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative group">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none" />
                
                {/* Slide Text Overlay */}
                <div className="absolute bottom-0 w-full p-6 z-20">
                  <div className="bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <h1 className="text-sm md:text-xl font-bold text-white leading-tight drop-shadow-md">
                      {slide.title}
                    </h1>
                    <a
                      href={slide.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block bg-saffron-500 hover:bg-saffron-600 text-white text-xs font-bold py-2 px-4 rounded transition-colors"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none z-30">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition-all pointer-events-auto backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
              className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/70 transition-all pointer-events-auto backdrop-blur-sm"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Pagination */}
          <div className="absolute bottom-4 w-full flex justify-center gap-2 z-30">
            {slides.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-saffron-500 scale-125' : 'bg-white/50 hover:bg-white'}`}
              />
            ))}
          </div>
        </section>

        {/* Right Column: Notices/Quick Links */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg flex-grow flex flex-col overflow-hidden">
            <div className="bg-navy-900 text-white px-6 py-4 flex items-center justify-between">
              <h2 className="font-bold text-lg tracking-tight">Consular Notices</h2>
              <span className="animate-pulse w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <div className="p-6 flex flex-col gap-4 overflow-y-auto max-h-[400px]">
              <div className="group border-b border-gray-100 pb-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold text-saffron-600 uppercase">Visa Update</span>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-navy-900 mt-1">E-Visa services strictly for the citizens of Sri Lanka resumed.</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[11px] text-gray-400 italic">April 17, 2026</span>
                  <span className="text-[11px] bg-green-100 text-green-700 px-2 rounded-full font-bold">New</span>
                </div>
              </div>

              <div className="group border-b border-gray-100 pb-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold text-saffron-600 uppercase">Scholarship</span>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-navy-900 mt-1">Application window for ICCR Graduate courses is now open.</p>
                <span className="text-[11px] text-gray-400 italic mt-2 block">April 15, 2026</span>
              </div>

              <div className="group border-b border-gray-100 pb-3 hover:bg-gray-50 transition-colors cursor-pointer">
                <span className="text-[10px] font-bold text-saffron-600 uppercase">Holiday List</span>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-navy-900 mt-1">Updated list of public holidays for the year 2026 published.</p>
                <span className="text-[11px] text-gray-400 italic mt-2 block">March 30, 2026</span>
              </div>
            </div>
            <div className="mt-auto p-4 bg-gray-50 border-t border-gray-100">
              <a href="#" className="flex items-center justify-center gap-2 text-navy-900 font-bold text-xs uppercase hover:text-saffron-500 transition-colors">
                View All Notices
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
