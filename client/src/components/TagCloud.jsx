export default function TagCloud({ tags = [], onTagClick, activeTag }) {
  const uniqueTags = Array.from(new Set(tags.flat()));

  return (
    <div className="my-3">
      <h5>🔖 Облако тегов</h5>
      <div className="d-flex flex-wrap gap-2">
        {uniqueTags.map((tag) => (
          <span
            key={tag}
            onClick={() => onTagClick(tag)}
            className={`badge rounded-pill px-3 py-2 ${
              tag === activeTag ? "bg-primary text-white" : "bg-light text-dark border"
            }`}
            style={{ cursor: "pointer" }}
          >
            #{tag}
          </span>
        ))}
        {activeTag && (
          <span
            className="badge bg-danger text-white px-3 py-2"
            style={{ cursor: "pointer" }}
            onClick={() => onTagClick("")}
          >
            ✖ Сброс
          </span>
        )}
      </div>
    </div>
  );
}
