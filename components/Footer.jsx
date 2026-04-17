import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-12 py-8 mt-auto border-t-4 border-saffron-500">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Consulate General of India</h2>
          <address className="not-italic text-sm space-y-2">
            <p>14, Maruthady Lane,</p>
            <p>Nallur, Jaffna, Sri Lanka</p>
            <p className="mt-4"><strong>Phone:</strong> +94-21-2220502</p>
            <p><strong>Email:</strong> ice.jaffna@mea.gov.in</p>
          </address>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Important Links</h2>
          <ul className="space-y-2 list-none p-0 text-sm">
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">Ministry of External Affairs</Link></li>
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">National Portal of India</Link></li>
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">High Commission of India, Colombo</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Policies</h2>
          <ul className="space-y-2 list-none p-0 text-sm">
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">Terms & Conditions</Link></li>
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">Copyright Policy</Link></li>
            <li><Link href="/" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded px-1">Hyperlinking Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-6 text-center text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Consulate General of India, Jaffna. All Rights Reserved.</p>
        <p className="mt-2 text-gray-400">Website designed following GIGW Guidelines.</p>
        <p className="mt-1 text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </footer>
  )
}
