import { useEffect, useState } from "react";
import axios from "axios";

export default function FormList() {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/forms")
      .then(res => setForms(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Список форм</h2>
      <ul>
        {forms.map(form => (
          <li key={form.id}>
            <strong>{form.title}</strong> — {form.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
