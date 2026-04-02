import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import KnowledgeBaseGrid from './components/KnowledgeBaseGrid'
import Pagination from './components/Pagination'
import CreateModal from './components/CreateModal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const knowledgeBaseItems = [
    {
      id: 1,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      createdOn: '14/07/2025',
    },
    {
      id: 2,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      createdOn: '14/07/2025',
    },
    {
      id: 3,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      createdOn: '14/07/2025',
    },
    {
      id: 4,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      createdOn: '14/07/2025',
    },
    {
      id: 5,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      createdOn: '14/07/2025',
    },
    {
      id: 6,
      title: 'Test',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
      createdOn: '14/07/2025',
    },
  ]

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <div className="flex h-screen bg-gray-50 font-sans relative overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden min-w-0 w-full pt-14">
        <Header
          onOpenSidebar={() => setSidebarOpen((s) => !s)}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="px-8 py-6">
            {/* Page title row - responsive: stack on xs, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
              <h1 className="text-xl font-semibold text-gray-900">Knowledge Base</h1>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-52 pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                  />
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <div className="flex-shrink-0">
                  <button
                    type="button"
                    aria-label="Create new knowledge base"
                    onClick={handleOpenModal}
                    className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#4F46E5] text-white text-sm font-medium rounded-lg hover:bg-[#4338CA] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
                  >
                    <span className="text-lg leading-none">+</span>
                    <span className="hidden sm:inline">Create New</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Cards grid wrapped in a panel */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <KnowledgeBaseGrid items={
              knowledgeBaseItems.filter((it) => {
                if (!searchTerm) return true
                const s = searchTerm.toLowerCase()
                return (
                  (it.title && it.title.toLowerCase().includes(s)) ||
                  (it.description && it.description.toLowerCase().includes(s))
                )
              })
              } />
            </div>
          </div>

        </main>

        {/* Pagination (page footer) */}
        <div className="px-8 py-4">
          <Pagination totalRows={knowledgeBaseItems.length} />
        </div>
      
      </div>

      {/* Create New Modal */}
      {showModal && <CreateModal onClose={handleCloseModal} />}
    </div>
  )
}

export default App
