import TemplateGallery from "./TemplateGallery";
export default function Home() {
  return (
    <>
    <div>
      <h2>Добро пожаловать!</h2>
      <p>📌 Здесь будут популярные шаблоны, последние формы и облако тегов.</p>
    </div>
     <div>
      <TemplateGallery />
    </div>
    </>
  );
}
