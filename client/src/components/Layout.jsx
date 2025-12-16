import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.body.className = theme === "light" ? "bg-dark text-white" : "bg-light text-dark";
  };

  const toggleLang = () => {
    const newLang = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="container mt-3">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          📝 MyForms
        </h1>
        <div>
          <button className="btn btn-outline-secondary mx-1" onClick={toggleTheme}>
            🌗 {t("theme")}
          </button>
          <button className="btn btn-outline-secondary mx-1" onClick={toggleLang}>
            🌐 {i18n.language.toUpperCase()}
          </button>
          <Link to="/register" className="btn btn-outline-primary mx-1">
            🔐 {t("register")}
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
