import InnerPageLayout from '../../../components/InnerPageLayout';
import { FaUser, FaCommentDots } from 'react-icons/fa';

export default function ConsulGeneral() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Consulate General', href: null },
    { label: 'Consul General', href: null }
  ];

  const sidebarLinks = [];

  return (
    <InnerPageLayout 
      title="" 
      breadcrumbItems={breadcrumbItems}
      sidebarSection=""
      sidebarLinks={sidebarLinks}
    >
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-gray-800 underline">Consul General</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-auto flex flex-col items-center">
          <div className="border border-gray-300 p-1 bg-white shadow-sm mb-4">
            <img 
              src="/images/consul-general.png" 
              alt="Shri Sai Murali S." 
              className="w-full max-w-[280px] h-auto object-cover"
            />
          </div>
          <div className="text-center text-sm font-bold text-gray-800 leading-tight">
            <p>Shri Sai Murali S.</p>
            <p>Consul General</p>
          </div>
        </div>

        <div className="flex-1 pt-4 text-gray-800">
          <div className="prose prose-sm max-w-none space-y-4 text-justify">
            <p>
              <strong>Shri Sai Murali S.</strong> joined the Indian Foreign Service in 2019. He graduated in Chemical Engineering from National Institute of Technology, Calicut and earned his master's degree in Sociology from IGNOU.
            </p>
            <p>
              As a career diplomat, he served in the Embassy of India, Moscow in the Political and Economic & Commercial Wings. In the Ministry of External Affairs at New Delhi, he served as Under Secretary in Multilateral Economic Relations Division. Prior to joining the Consulate General of India in Jaffna, he served as Consul General of India in Vladivostok, Russian Federation.
            </p>
            <p>
              Mr. Sai Murali speaks English, Hindi, Tamil, Telugu and Russian. He is an active independent musician and has composed and produced original songs in English. His interests include painting, yoga and papier-mache art.
            </p>
            <p>
              He assumed charge on 26 February 2024 as the fifth Consul General of India in Jaffna.
            </p>
          </div>
          
          <div className="mt-8">
            <a href="#" className="flex items-center gap-3 text-blue-800 hover:text-navy-900 group font-medium border-t pt-4">
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <FaCommentDots className="text-gray-800" size={14} />
              </div>
              <span className="hover:underline">Speeches</span>
            </a>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  )
}
