import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-100 py-2 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center text-sm text-gray-600 m-0 p-0 list-none">
          <li className="flex items-center">
            <Link href="/" className="hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1">Home</Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400" aria-hidden="true">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 rounded px-1">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-medium px-1" aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
