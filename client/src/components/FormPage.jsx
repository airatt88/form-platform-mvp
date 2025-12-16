import FormCreate from "./FormCreate";
import FormList from "./FormList";

export default function FormPage() {
  return (
    <div className="mt-4">
      <h1 className="mb-4">📋 Управление формами</h1>
      <FormCreate />
      <hr className="my-4" />
      <FormList />
    </div>
  );
}
