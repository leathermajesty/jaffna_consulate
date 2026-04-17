import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { 
      label: 'Home', 
      href: '/', 
      isDropdown: false 
    },
    { 
      label: 'Consulate General', 
      href: '#', 
      isDropdown: true,
      subLinks: [
        { label: 'Consul General', href: '/consulate-general/consul-general' },
        { label: 'Officer List', href: '/consulate-general/officer-list' }
      ]
    },
    { 
      label: 'India-Sri Lanka Relations', 
      href: '#', 
      isDropdown: true,
      subLinks: [
        { label: 'Bilateral Relations', href: '/india-sri-lanka-relations/bilateral-relations' },
        { label: 'Economic & Trade', href: '/india-sri-lanka-relations/economic-trade' }
      ]
    },
    { 
      label: 'Contact Us', 
      href: '/contact-us', 
      isDropdown: false 
    }
  ];

  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-50 shadow" aria-label="Main Navigation">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap m-0 p-0 list-none">
          {navLinks.map((link, index) => (
            <li key={index} className="group relative">
              {link.isDropdown ? (
                <>
                  <button 
                    className="flex items-center px-4 py-3 hover:bg-saffron-500 hover:text-white transition-colors text-sm md:text-base font-medium border-l border-white/10 group-last:border-r focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-saffron-500 outline-none w-full text-left cursor-default h-full"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {link.label}
                  </button>
                  <ul 
                    className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-200 rounded-b shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 list-none p-0 overflow-hidden text-navy-900 z-50"
                  >
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <Link 
                          href={subLink.href}
                          className="block px-4 py-3 text-sm border-b border-gray-100 last:border-0 hover:bg-gray-100 hover:text-blue-800 transition-colors focus:outline-none focus:bg-gray-100 focus:text-blue-800 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                        >
                          {subLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link 
                  href={link.href} 
                  className="flex items-center px-4 py-3 hover:bg-saffron-500 hover:text-white transition-colors text-sm md:text-base font-medium border-l border-white/10 group-last:border-r focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white focus:bg-saffron-500 outline-none h-full"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
