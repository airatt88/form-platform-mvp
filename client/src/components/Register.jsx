import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", formData);
      setMessage("✅ Успешно зарегистрирован!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Ошибка регистрации");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" type="text" name="username" placeholder="Имя пользователя" onChange={handleChange} required />
        <input className="form-control my-2" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control my-2" type="password" name="password" placeholder="Пароль" onChange={handleChange} required />
        <button className="btn btn-primary">Зарегистрироваться</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}

export default Register;
