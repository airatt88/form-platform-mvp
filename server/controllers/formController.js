import Form from "../models/Form.js";

export const createForm = async (req, res) => {
  const { title, description, userId } = req.body;

  try {
    const form = await Form.create({ title, description, userId });
    res.status(201).json({ message: "Form created!", form });
  } catch (err) {
    res.status(500).json({ error: "Form creation failed", details: err.message });
  }
};

export const getFormsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const forms = await Form.findAll({ where: { userId } });
    res.json(forms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch forms", details: err.message });
  }
};
