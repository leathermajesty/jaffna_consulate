import InnerPageLayout from '../../../components/InnerPageLayout';

export default function EconomicTrade() {
  const breadcrumbItems = [
    { label: 'India-Sri Lanka Relations', href: null },
    { label: 'Economic and Trade Profile', href: null }
  ];

  const sidebarLinks = [
    { label: 'Bilateral Relations', href: '/india-sri-lanka-relations/bilateral-relations' },
    { label: 'Economic and Trade Profile', href: '/india-sri-lanka-relations/economic-trade' }
  ];

  return (
    <InnerPageLayout 
      title="Economic and Trade Profile" 
      breadcrumbItems={breadcrumbItems}
      sidebarSection="India-Sri Lanka Relations"
      sidebarLinks={sidebarLinks}
    >
      <p className="mb-4 text-justify">
        Sri Lanka is one of India's largest trading partners in SAARC. India in turn is Sri Lanka's largest trade partner globally. Trade between the two countries grew particularly rapidly after the entry into force of the India-Sri Lanka Free Trade Agreement in March 2000.
      </p>
      
      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-2">Bilateral Trade Statistics</h3>
      <p className="mb-4">Details of merchandise trade between the two countries are robust and cover diverse sectors.</p>
      
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left border-collapse border border-gray-300" aria-label="Trade Statistics Dummy Data">
          <thead>
            <tr className="bg-gray-100 text-navy-900">
              <th className="border border-gray-300 px-4 py-2 font-bold" scope="col">Year</th>
              <th className="border border-gray-300 px-4 py-2 font-bold" scope="col">Exports to Sri Lanka</th>
              <th className="border border-gray-300 px-4 py-2 font-bold" scope="col">Imports from Sri Lanka</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2021-22</td>
              <td className="border border-gray-300 px-4 py-2">$X.XX Billion</td>
              <td className="border border-gray-300 px-4 py-2">$X.XX Billion</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">2022-23</td>
              <td className="border border-gray-300 px-4 py-2">$X.XX Billion</td>
              <td className="border border-gray-300 px-4 py-2">$X.XX Billion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-2">Development Cooperation</h3>
      <p className="mb-4 text-justify">
        India has been active in supporting numerous developmental projects in Sri Lanka addressing various sectors including infrastructure, education, health, agriculture, and livelihood restoration.
      </p>
    </InnerPageLayout>
  )
}
