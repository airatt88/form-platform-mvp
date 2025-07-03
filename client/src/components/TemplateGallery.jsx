import { useEffect, useState } from "react";
import {
  latestTemplatesMock,
  popularTemplatesMock
} from "../mocks/templates";
import TagCloud from "./TagCloud";
import { useNavigate } from "react-router-dom"; // 👈 импортируем

export default function TemplateGallery() {
  const [latestTemplates, setLatestTemplates] = useState([]);
  const [popularTemplates, setPopularTemplates] = useState([]);
  const [activeTag, setActiveTag] = useState("");
  const navigate = useNavigate(); // 👈

  useEffect(() => {
    setTimeout(() => {
      setLatestTemplates(latestTemplatesMock);
      setPopularTemplates(popularTemplatesMock);
    }, 500);
  }, []);

  const allTags = [...latestTemplates, ...popularTemplates].flatMap(t => t.tags);

  const filterByTag = (templates) =>
    activeTag
      ? templates.filter((t) => t.tags.includes(activeTag))
      : templates;

  const renderTemplates = (templates) =>
    templates.map((template) => (
      <div
        className="col-md-4 mb-3"
        key={template.id}
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/template/${template.id}`)} // 👈 переход
      >
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">{template.title}</h5>
            <p className="card-text">{template.description}</p>
            <div>
              {template.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-secondary me-1">#{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <>
      <TagCloud tags={allTags} activeTag={activeTag} onTagClick={setActiveTag} />

      <h3>🔥 Популярные шаблоны</h3>
      <div className="row">{renderTemplates(filterByTag(popularTemplates))}</div>

      <h3 className="mt-4">🆕 Последние добавленные</h3>
      <div className="row">{renderTemplates(filterByTag(latestTemplates))}</div>
    </>
  );
}
