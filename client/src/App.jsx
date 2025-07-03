import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import FormDashboard from "./components/FormDashboard";
import FormCreate from "./components/FormCreate";
import Home from "./components/Home";
import Layout from "./components/Layout";
import TemplateDetail from "./components/TemplateDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forms" element={<FormDashboard />} />
          <Route path="/create" element={<FormCreate />} />
          <Route path="/template/:id" element={<TemplateDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
