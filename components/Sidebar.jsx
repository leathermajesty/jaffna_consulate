import Link from 'next/link';

export default function Sidebar({ section, links }) {
  return (
    <aside className="bg-gray-50 border border-gray-200 rounded p-4 mb-6 md:mb-0" aria-label={`${section} Navigation`}>
      <h2 className="text-lg font-bold text-navy-900 border-b-2 border-saffron-500 pb-2 mb-4">{section}</h2>
      <ul className="list-none p-0 m-0 space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <Link 
              href={link.href} 
              className="block p-2 text-gray-700 hover:bg-gray-200 hover:text-navy-900 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
