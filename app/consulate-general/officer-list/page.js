import InnerPageLayout from '../../../components/InnerPageLayout';

export default function OfficerList() {
  const breadcrumbItems = [
    { label: 'Consulate General', href: null },
    { label: 'List of Officers', href: null }
  ];

  const sidebarLinks = [
    { label: 'Consul General', href: '/consulate-general/consul-general' },
    { label: 'List of Officers', href: '/consulate-general/officer-list' }
  ];

  return (
    <InnerPageLayout 
      title="List of Officers" 
      breadcrumbItems={breadcrumbItems}
      sidebarSection="Consulate General"
      sidebarLinks={sidebarLinks}
    >
      <h2 className="text-lg font-bold text-gray-800 mb-4 underline text-center">Officer List</h2>
      <p className="mb-4 text-gray-700">Directory of Officials</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-400 text-sm" aria-label="Directory of Officials">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="border border-gray-400 px-4 py-2 font-bold w-1/2" scope="col">Name & Designation</th>
              <th className="border border-gray-400 px-4 py-2 font-bold w-1/4" scope="col">Telephone</th>
              <th className="border border-gray-400 px-4 py-2 font-bold w-1/4" scope="col">Email address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-3 align-top">
                <span className="block mb-1 text-gray-800">Shri Sai Murali S.</span>
                <span className="block mb-2 text-gray-800">Consul General</span>
                <a href="/consulate-general/consul-general" className="text-blue-700 hover:underline">Consul General's Profile</a>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">021-2220502</td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">cg[dot]jaffna[at]mea[dot]gov[dot]in</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-3 align-top">
                <span className="block mb-1 text-gray-800">Shri Shankaran Rajagopalan</span>
                <span className="block text-gray-800">Consul (Development Cooperation, Commerce, Culture and Info) & Head of Chancery</span>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">021-2219671</td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">
                <span className="block">hoc[dot]jaffna[at]mea[dot]gov[dot]in</span>
                <span className="block">comm[dot]jaffna[at]mea[dot]gov[dot]in</span>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-3 align-top">
                <span className="block mb-1 text-gray-800">Shri Nagarajan Ramaswamy</span>
                <span className="block text-gray-800">Consul (CPV, Press and Education)</span>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">021-2219085</td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">dc[dot]jaffna[at]mea[dot]gov[dot]in</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-3 align-top">
                <span className="block mb-1 text-gray-800">Shri Dharam Pal</span>
                <span className="block text-gray-800">Vice Consul (Admin/DDO & Establishment)</span>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">021-2219673</td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">admn[dot]jaffna[at]mea[dot]gov[dot]in</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-3 align-top">
                <span className="block mb-1 text-gray-800">Shri Narendra Kumar</span>
                <span className="block text-gray-800">Vice Consul (CPV)</span>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">021-2219672</td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">cons[dot]jaffna[at]mea[dot]gov[dot]in</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-3 align-top">
                <span className="block text-gray-800">Help line contact for emergency Consular assistance</span>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">
                <span className="block mb-1">00-94-21-2219085 (office hours)</span>
                <span className="block mb-1">Cell No: 00-94-773238986</span>
                <span className="block">(holidays & after office hours)</span>
              </td>
              <td className="border border-gray-400 px-4 py-3 align-top text-gray-800">cons[dot]jaffna[at]mea[dot]gov[dot]in</td>
            </tr>
          </tbody>
        </table>
      </div>
    </InnerPageLayout>
  )
}
