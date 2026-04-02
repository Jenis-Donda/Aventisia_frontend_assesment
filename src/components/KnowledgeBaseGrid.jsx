import KnowledgeBaseCard from './KnowledgeBaseCard'

function KnowledgeBaseGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <KnowledgeBaseCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default KnowledgeBaseGrid
