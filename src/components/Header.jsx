import { useState, useRef, useEffect } from 'react'
import { Search, Bell, Menu, ChevronDown, X } from 'lucide-react'

function Header({ onOpenSidebar, searchTerm, setSearchTerm }) {
  const [openProfile, setOpenProfile] = useState(false)
  const profileRef = useRef(null)
  const searchRef = useRef(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [workspaceOpen, setWorkspaceOpen] = useState(false)
  const workspaceRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setOpenProfile(false)
      }
      if (workspaceRef.current && !workspaceRef.current.contains(e.target)) {
        setWorkspaceOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [])

  // close search overlay when clicking outside
  useEffect(() => {
    function onDocClick(e) {
      if (searchOpen && searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [searchOpen])

  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-[#1E1B4B] flex items-center justify-between px-4 sm:px-5 shrink-0 z-50">
      {/* Left: Brand + mobile menu */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Toggle sidebar"
          onClick={onOpenSidebar}
          className="text-gray-300 hover:text-white md:hidden mr-1"
        >
          <Menu size={20} />
        </button>

        {/* mobile search button */}
        <button
          type="button"
          aria-label="Open search"
          onClick={(e) => { e.stopPropagation(); setSearchOpen(true) }}
          className="text-gray-300 hover:text-white sm:hidden mr-1"
        >
          <Search size={18} />
        </button>

        <div className="flex items-center gap-3" ref={workspaceRef}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={workspaceOpen}
              onClick={(e) => { e.stopPropagation(); setWorkspaceOpen((s) => !s) }}
              className="flex items-center gap-2 px-3 py-1 rounded-md focus:outline-none"
            >
              {/* small logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" fill="#2B2CFF" opacity="0.06" />
                <path d="M7 9c1-1 2.5-1.5 4-1.5s3 0.5 4 1.5c1 1 1 3 0 4s-2.5 1.5-4 1.5-3-0.5-4-1.5c-1-1-1-3 0-4z" fill="#4F46E5" />
              </svg>
              <span className="text-sm font-semibold text-white">Worcspace</span>
            </button>

            <div className="text-xs text-white bg-[#312d6b] px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
              <span className="inline sm:hidden">W1</span>
              <span className="hidden sm:inline">Worcspace 1</span>
              <ChevronDown size={12} className="text-white/90" />
            </div>
          </div>

          {workspaceOpen && (
            <div className="absolute mt-12 left-4 bg-white rounded-md shadow-lg z-50 w-48 text-sm text-gray-700 overflow-hidden">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Workspace 1 (current)</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Workspace 2</button>
              <div className="border-t" />
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Create new workspace</button>
            </div>
          )}
        </div>
      </div>

      {/* Center search bar (exact center for lg+) */}
      <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(420px,calc(100%-200px))]">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-14 py-2 bg-[#312d6b] text-white text-sm rounded-lg border border-[#4a4580] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#4F46E5]"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs border border-[#4a4580] rounded px-1.5 py-0.5">
            ⌘K
          </span>
        </div>
      </div>

      {/* Mobile/tablet search overlay (full width under header for <lg) */}
      {searchOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 px-4 lg:hidden z-50" ref={searchRef}>
          <div className="bg-transparent">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] bg-white"
              />
              <button
                type="button"
                aria-label="Close search"
                onClick={(e) => { e.stopPropagation(); setSearchOpen(false) }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Right actions */}
      <div className="flex-1 flex items-center justify-end gap-4">
        <button className="text-gray-300 hover:text-white transition-colors" aria-label="Notifications">
          <Bell size={18} />
        </button>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={openProfile}
            onClick={() => setOpenProfile((s) => !s)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full bg-[#C8B6FF] flex items-center justify-center text-[#1E1B4B] text-xs font-semibold">GK</div>
          </button>

          {openProfile && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-sm text-gray-700 z-50 overflow-hidden">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Profile</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Settings</button>
              <div className="border-t" />
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
