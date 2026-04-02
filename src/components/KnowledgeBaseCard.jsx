import { MoreVertical } from 'lucide-react'

function KnowledgeBaseCard({ item }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col justify-between min-h-[190px]">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
        <button className="text-gray-400 hover:text-gray-600 -mt-1">
          <MoreVertical size={16} />
        </button>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
        {item.description}
      </p>

      <div className="pt-3 border-t border-gray-100 mt-4">
        <span className="text-xs text-gray-400">Created On: {item.createdOn}</span>
      </div>
    </div>
  )
}

export default KnowledgeBaseCard
