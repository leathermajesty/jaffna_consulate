"use client";

import { useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Header() {
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();

      // India time (IST = UTC+5:30)
      const indiaTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
      const indiaFormatted = indiaTime.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }) + ' - ' + indiaTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      // Sri Lanka time (SLST = UTC+5:30, same as IST)
      const sriLankaTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
      const sriLankaFormatted = sriLankaTime.toLocaleDateString('en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }) + ' - ' + sriLankaTime.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });

      const indiaElement = document.getElementById('t1');
      const sriLankaElement = document.getElementById('t2');

      if (indiaElement) {
        indiaElement.textContent = indiaFormatted;
      }
      if (sriLankaElement) {
        sriLankaElement.textContent = sriLankaFormatted;
      }
    };

    // Update immediately
    updateClocks();

    // Update every second
    const interval = setInterval(updateClocks, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white pt-[15px] pb-[39px] border-b border-gray-200 overflow-x-hidden" aria-label="Main Header">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
        
        {/* LEFT SECTION */}
        <div className="flex flex-row items-center text-left gap-3 w-full lg:w-auto min-w-0">
          <div className="shrink-0">
            <img 
              title="Emblem of India" 
              src="https://www.indiainnewyork.gov.in/images/Emblem_of_India.svg" 
              alt="National Emblem of India" 
              width="45" 
              height="100" 
              loading="lazy"
              className="h-16 w-auto md:h-[90px] object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center min-w-0">
            <h1 className="text-lg sm:text-2xl md:text-[28px] font-bold text-navy-900 m-0 tracking-tight leading-tight break-words">
              Consulate General of India
            </h1>
            <span className="text-sm sm:text-lg md:text-xl text-gray-800 font-semibold m-0 mt-1 block">
              Jaffna, Sri Lanka
            </span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0 items-center lg:items-end">
          
          {/* RIGHT TOP: Time Blocks */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-3">
              <span role="img" aria-label="India Flag" className="text-[26px] drop-shadow-sm">🇮🇳</span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">IST (India)</span>
                <span id="t1" className="text-xs font-semibold text-gray-800">Loading...</span>
              </div>
            </div>

            <div className="hidden sm:block w-px bg-gray-300 h-8 self-center" aria-hidden="true"></div>

            <div className="flex items-center gap-3">
              <span role="img" aria-label="Sri Lanka Flag" className="text-[26px] drop-shadow-sm">🇱🇰</span>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">SLST (Sri Lanka)</span>
                <span id="t2" className="text-xs font-semibold text-gray-800">Loading...</span>
              </div>
            </div>
          </div>

          {/* RIGHT BOTTOM: Socials and Search in same line */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3" aria-label="Social Media Links">
              <a href="#" className="w-[34px] h-[34px] rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-saffron-500 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:scale-110 transition-all shadow-sm" aria-label="Facebook">
                <FaFacebookF size={15} />
              </a>
              <a href="#" className="w-[34px] h-[34px] rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-saffron-500 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:scale-110 transition-all shadow-sm" aria-label="X (Twitter)">
                <FaXTwitter size={15} />
              </a>
              <a href="#" className="w-[34px] h-[34px] rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-saffron-500 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:scale-110 transition-all shadow-sm" aria-label="Instagram">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="w-[34px] h-[34px] rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-saffron-500 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:scale-110 transition-all shadow-sm" aria-label="YouTube">
                <FaYoutube size={15} />
              </a>
              <a href="#" className="w-[34px] h-[34px] rounded-full bg-navy-900 text-white flex items-center justify-center hover:bg-saffron-500 focus:outline-none focus:ring-2 focus:ring-blue-600 hover:scale-110 transition-all shadow-sm" aria-label="LinkedIn">
                <FaLinkedinIn size={15} />
              </a>
            </div>

            {/* Search Bar */}
            <div className="searchBoxWrap">
              <div className="searchBox">
                <div className="searchBoxRow">
                  <form name="search_form" id="search_form" method="POST" action="/search">
                    <input
                      type="text"
                      name="searchBox"
                      id="searchBox"
                      title="Search"
                      placeholder="Search"
                      className="searchInput m-0"
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      value="Go"
                      title="Click here to search"
                      className="searchGo"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
