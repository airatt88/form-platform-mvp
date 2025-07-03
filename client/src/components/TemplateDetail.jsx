import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { latestTemplatesMock, popularTemplatesMock } from "../mocks/templates";

export default function TemplateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const allTemplates = [...latestTemplatesMock, ...popularTemplatesMock];
  const template = allTemplates.find((t) => String(t.id) === id);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0); // можно позже сохранить в БД

  if (!template) {
    return (
      <div className="container mt-4">
        <h2>❌ Шаблон не найден</h2>
        <button className="btn btn-secondary mt-2" onClick={() => navigate("/")}>
          ⬅ Назад
        </button>
      </div>
    );
  }

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;
    setComments([...comments, newComment.trim()]);
    setNewComment("");
  };

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ⬅ Назад
      </button>

      <div className="card shadow">
        <div className="card-body">
          <h2>{template.title}</h2>
          <p className="text-muted">{template.description}</p>

          <div className="mb-2">
            <button className="btn btn-outline-danger me-2" onClick={handleLike}>
              ❤️ Лайк ({likes})
            </button>
          </div>

          <hr />
          <h5>📌 Тема: {template.topic}</h5>
          <div className="my-2">
            {template.tags.map((tag, idx) => (
              <span key={idx} className="badge bg-primary me-2">#{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Комментарии */}
      <div className="card shadow mt-4">
        <div className="card-body">
          <h4>💬 Комментарии</h4>
          <form onSubmit={handleAddComment} className="mb-3">
            <textarea
              className="form-control mb-2"
              rows="3"
              placeholder="Напишите комментарий..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="btn btn-primary">Добавить комментарий</button>
          </form>

          {comments.length === 0 ? (
            <p className="text-muted">Нет комментариев</p>
          ) : (
            <ul className="list-group">
              {comments.map((comment, idx) => (
                <li key={idx} className="list-group-item">
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
