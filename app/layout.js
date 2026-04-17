import './globals.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Consulate General of India, Jaffna',
  description: 'Official Website of the Consulate General of India in Jaffna, Sri Lanka.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
