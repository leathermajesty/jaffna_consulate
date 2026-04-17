import InnerPageLayout from '../../components/InnerPageLayout';

export default function ContactUs() {
  const breadcrumbItems = [{ label: 'Contact', href: null }];
  const sidebarLinks = [];

  return (
    <InnerPageLayout
      title=""
      breadcrumbItems={breadcrumbItems}
      sidebarSection="Contact"
      sidebarLinks={sidebarLinks}
    >
      {/* Header */}
      <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200">
        <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg border border-orange-300">
          IN
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest font-medium mb-0.5">
            Government of India
          </p>
          <h2 className="text-xl font-semibold text-gray-900 leading-tight">
            Consulate General of India
          </h2>
          <p className="text-sm text-gray-500">Jaffna, Sri Lanka</p>
        </div>
        <span className="ml-auto text-xs font-medium bg-blue-900 text-blue-200 px-4 py-1.5 rounded-full tracking-widest uppercase hidden sm:inline-block">
          Contact Information
        </span>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Address</p>
          <p className="text-sm text-gray-800 leading-relaxed">
            No. 14, Maruthady Lane,<br />
            Nallur, Jaffna,<br />
            Sri Lanka
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Office hours</p>
          <p className="text-sm text-gray-800">9:00 AM – 5:30 PM</p>
          <p className="text-xs text-gray-500 mt-1">Monday – Friday</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5">Time zone</p>
          <p className="text-sm text-gray-800">IST / GMT +5:30</p>
          <p className="text-xs text-gray-500 mt-1">India Standard Time</p>
        </div>
      </div>

      {/* Phone & Fax */}
      <div className="border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Phone &amp; Fax</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-400 mb-1">Telephone (PABX)</p>
            <p className="text-sm text-gray-800">+94-21-2220504</p>
            <p className="text-sm text-gray-800">+94-21-2220505</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Fax</p>
            <p className="text-sm text-gray-800">+94-21-2219675</p>
            <p className="text-sm text-gray-800">+94-21-2220503</p>
          </div>
        </div>
      </div>

      {/* Online presence */}
      <div className="border border-gray-200 rounded-xl p-5 mb-5">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Online Presence</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            {
              label: 'Website',
              value: 'www.cgijaffna.gov.in',
              href: 'http://www.cgijaffna.gov.in',
            },
            { label: 'Twitter / X', value: '@CGJaffna', href: null },
            {
              label: 'Facebook',
              value: 'CGJaffna',
              href: 'https://www.facebook.com/CGJaffna',
            },
            { label: 'Instagram', value: 'india_in_jaffna', href: null },
          ].map(({ label, value, href }) => (
            <div key={label} className="border border-gray-100 rounded-lg px-3.5 py-2.5">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-blue-700 hover:underline break-all"
                >
                  {value}
                </a>
              ) : (
                <p className="text-sm text-gray-800">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Departmental contacts */}
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
          Departmental Contacts
        </p>
        <div className="flex flex-col gap-3">
          {[
            {
              dept: 'Passport, visa & consular matters',
              phone: '+94-21-2220995 · +94-21-2220504/5',
              email: 'cons.jaffna@mea.gov.in',
              color: 'border-blue-700',
            },
            {
              dept: 'ICCR scholarship, ITEC training & education',
              phone: '+94-21-2219085',
              email: 'dc.jaffna@mea.gov.in',
              color: 'border-green-700',
            },
            {
              dept: 'Commercial, culture & information',
              phone: '+94-21-2219671',
              email: 'comm.jaffna@mea.gov.in',
              color: 'border-amber-600',
            },
            {
              dept: 'Press enquiries',
              phone: '+94-21-2219085',
              email: 'dc.jaffna@mea.gov.in',
              color: 'border-purple-700',
            },
          ].map(({ dept, phone, email, color }) => (
            <div
              key={dept}
              className={`bg-white border border-gray-200 border-l-4 ${color} rounded-r-lg px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2`}
            >
              <div>
                <p className="text-sm font-medium text-gray-800">{dept}</p>
                <p className="text-xs text-gray-500 mt-0.5">{phone}</p>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-xs text-blue-700 hover:underline whitespace-nowrap"
              >
                {email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </InnerPageLayout>
  );
}