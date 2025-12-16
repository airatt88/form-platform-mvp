import express from "express";
import Form from "../models/Form.js";

const router = express.Router();
console.log("✅ formRoutes подключены");

// GET /api/forms
router.get("/", async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при получении форм", details: err.message });
  }
});

// POST /api/forms
router.post("/", async (req, res) => {
  try {
    const { title, description, fields } = req.body;
    const newForm = await Form.create({ title, description, fields });
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ error: "Ошибка при создании формы", details: err.message });
  }
});

export default router;
