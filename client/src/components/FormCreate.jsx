import { useState } from "react";
import axios from "axios";

export default function FormCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState([
    { label: "", type: "text", required: false }
  ]);

  const handleFieldChange = (index, fieldName, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = fieldName === "required" ? value === "true" : value;
    setFields(updatedFields);
  };

  const addField = () => {
    setFields([...fields, { label: "", type: "text", required: false }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/forms", {
        title,
        description,
        fields
      });
      alert("✅ Форма успешно отправлена!");
      setTitle("");
      setDescription("");
      setFields([{ label: "", type: "text", required: false }]);
    } catch (err) {
      console.error("❌ Ошибка отправки формы:", err);
      alert("Ошибка отправки формы");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Создать новую форму</h2>

      <input
        type="text"
        placeholder="Заголовок формы"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <br />

      <h3>Поля формы:</h3>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Метка"
            value={field.label}
            onChange={(e) => handleFieldChange(index, "label", e.target.value)}
            required
          />
          <select
            value={field.type}
            onChange={(e) => handleFieldChange(index, "type", e.target.value)}
          >
            <option value="text">Текст</option>
            <option value="number">Число</option>
            <option value="email">Email</option>
          </select>
          <select
            value={String(field.required)}
            onChange={(e) => handleFieldChange(index, "required", e.target.value)}
          >
            <option value="true">Обязательное</option>
            <option value="false">Необязательное</option>
          </select>
        </div>
      ))}

      <button type="button" onClick={addField}>
        ➕ Добавить поле
      </button>
      <br /><br />
      <button type="submit">📤 Отправить форму</button>
    </form>
  );
}
