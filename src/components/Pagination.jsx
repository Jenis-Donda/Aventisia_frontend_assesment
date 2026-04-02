import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

function Pagination({ totalRows }) {
  return (
    <div className="px-8 py-4 bg-white flex items-center justify-between text-sm text-gray-500">
      <span>{totalRows} rows</span>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span>Rows per page</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white focus:outline-none">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>

        <span className="text-gray-700">page 1 of 1</span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronsLeft size={14} />
          </button>

          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronLeft size={14} />
          </button>

          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronRight size={14} />
          </button>

          <button
            type="button"
            className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
            disabled
          >
            <ChevronsRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pagination
