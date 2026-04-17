import InnerPageLayout from '../../../components/InnerPageLayout';

export default function BilateralRelations() {
  const breadcrumbItems = [
    { label: 'India-Sri Lanka Relations', href: null },
    { label: 'Bilateral Relations', href: null }
  ];

  const sidebarLinks = [
    { label: 'Bilateral Relations', href: '/india-sri-lanka-relations/bilateral-relations' },
    { label: 'Economic and Trade Profile', href: '/india-sri-lanka-relations/economic-trade' }
  ];

  return (
    <InnerPageLayout 
      title="Bilateral Relations" 
      breadcrumbItems={breadcrumbItems}
      sidebarSection="India-Sri Lanka Relations"
      sidebarLinks={sidebarLinks}
    >
      <p className="mb-4 text-justify">
        India and Sri Lanka have a legacy of intellectual, cultural, religious and linguistic interaction that goes back more than 2,500 years. In recent years, the relationship has been marked by close contacts at all levels.
      </p>
      
      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-2">Political Relations</h3>
      <p className="mb-4 text-justify">
        Political relations between the two countries have been marked by high-level exchanges of visits at regular intervals. Both countries share a broad understanding on major issues of international interest and frequently support each other on multilateral platforms.
      </p>

      <h3 className="text-xl font-bold text-navy-900 mt-6 mb-2">Cultural Relations</h3>
      <p className="mb-4 text-justify">
        Cultural cooperation is a very important aspect of the bilateral relationship. The Cultural Exchange Programme between the two countries covers a wide variety of areas including art, culture, education, and sports.
      </p>
      
      <div className="bg-gray-100 p-4 rounded border-l-4 border-navy-900 mt-6">
        <p className="text-sm italic">
          For more detailed information on specific treaties or historical documents, please refer to the archives or contact the Cultural Department of the Consulate.
        </p>
      </div>
    </InnerPageLayout>
  )
}
