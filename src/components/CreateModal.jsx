import { useState } from 'react'
import { X, ChevronDown } from 'lucide-react'

function CreateModal({ onClose }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [vectorStore, setVectorStore] = useState('Qdrant')
  const [embeddingModel, setEmbeddingModel] = useState('text-embedding-ada-002')

  const handleCreate = () => {
    // placeholder for create logic
    console.log({ name, description, vectorStore, embeddingModel })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="relative w-full max-w-md bg-white shadow-xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-base font-semibold text-gray-900">Create New Knowledge Base</h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors mt-0.5"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Name (Cannot be edited later)*
            </label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent placeholder-gray-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Description
            </label>
            <textarea
              placeholder="Description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent placeholder-gray-400 resize-none"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Vector Store*
            </label>
            <div className="relative">
              <select
                value={vectorStore}
                onChange={(e) => setVectorStore(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent appearance-none bg-white"
              >
                <option value="Qdrant">Qdrant</option>
                <option value="Pinecone">Pinecone</option>
                <option value="Weaviate">Weaviate</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              LLM Embedding Model*
            </label>
            <div className="relative">
              <select
                value={embeddingModel}
                onChange={(e) => setEmbeddingModel(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent appearance-none bg-white"
              >
                <option value="text-embedding-ada-002">text-embedding-ada-002</option>
                <option value="text-embedding-3-small">text-embedding-3-small</option>
                <option value="text-embedding-3-large">text-embedding-3-large</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex justify-end">
          <button
            onClick={handleCreate}
            className="px-6 py-2 bg-[#4F46E5] text-white text-sm font-medium rounded-lg hover:bg-[#4338CA] transition-colors cursor-pointer"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateModal
