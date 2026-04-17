import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';

export default function InnerPageLayout({ title, breadcrumbItems, sidebarSection, sidebarLinks, children }) {
  return (
    <div className="flex flex-col flex-grow">
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          <main id="main-content" className={`${sidebarLinks && sidebarLinks.length > 0 ? 'w-full md:w-3/4' : 'w-full'} bg-white p-6 rounded border border-gray-200 shadow-sm focus:outline-none`} tabIndex="-1">
            <h1 className="hidden">{title}</h1>
            {title && <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 border-b pb-2">{title}</h1>}
            <div className="prose max-w-none text-gray-800 space-y-4">
              {children}
            </div>
          </main>
          {sidebarLinks && sidebarLinks.length > 0 && (
            <div className="w-full md:w-1/4">
              <Sidebar section={sidebarSection} links={sidebarLinks} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
