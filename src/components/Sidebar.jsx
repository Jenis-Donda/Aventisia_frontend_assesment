import {
  Bot,
  Cpu,
  BookOpen,
  Send,
  Server,
  ListOrdered,
  Zap,
  Briefcase,
  Play,
  Lock,
  Database,
  KeyRound,
  Building2,
  Puzzle,
} from 'lucide-react'

const MENU_SECTIONS = [
  {
    label: 'MY PROJECTS',
    items: [
      { name: 'Agents', icon: Bot },
      { name: 'AI Models', icon: Cpu },
      { name: 'Library', icon: BookOpen },
    ],
  },
  {
    label: 'ORCHESTRATOR',
    items: [
      { name: 'Published', icon: Send },
      { name: 'Machines', icon: Server },
      { name: 'Queues', icon: ListOrdered },
      { name: 'Triggers', icon: Zap },
      { name: 'Jobs', icon: Briefcase },
      { name: 'Executions', icon: Play },
      { name: 'Vault', icon: Lock },
      { name: 'Knowledge Base', icon: Database, active: true },
      { name: 'Key Store', icon: KeyRound },
    ],
  },
  {
    label: 'ADMIN',
    items: [
      { name: 'Tenant', icon: Building2 },
      { name: 'Integrations', icon: Puzzle },
    ],
  },
]

import { X } from 'lucide-react'

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      <aside id="sidebar" className={`fixed top-14 bottom-0 left-0 z-40 w-56 bg-white border-r border-gray-200 flex flex-col h-full shrink-0 transform transition-transform duration-300 ease-in-out md:relative md:mt-0 md:translate-x-0 md:z-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      {/* removed duplicate logo; sidebar starts below fixed header on small screens */}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {MENU_SECTIONS.map((section) => (
          <div key={section.label} className="mb-4">
            <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1.5">
              {section.label}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon
                const isActive = item.active
                return (
                  <li key={item.name}>
                    <a
                      href="#"
                      className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-[#4F46E5]/10 text-[#4F46E5] font-medium border-l-[3px] border-[#4F46E5]'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon size={16} strokeWidth={1.8} />
                      <span>{item.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
    </>
  )
}

export default Sidebar
