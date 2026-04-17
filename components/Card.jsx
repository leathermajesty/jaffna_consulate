import Link from 'next/link';

export default function Card({ title, content, link, linkText = "Read More", icon }) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 h-full flex flex-col hover:-translate-y-1">
      {icon && (
        <div className="w-16 h-16 bg-gradient-to-br from-saffron-500 to-orange-500 rounded-full flex items-center justify-center mb-6 text-2xl">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-saffron-600 transition-colors">{title}</h3>
      <p className="text-gray-700 flex-grow mb-6 leading-relaxed">{content}</p>
      {link && (
        <Link
          href={link}
          className="inline-flex items-center mt-auto bg-gradient-to-r from-saffron-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-saffron-600 hover:to-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:ring-offset-2 group-hover:translate-x-1"
        >
          {linkText}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  )
}
