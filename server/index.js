import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB, { sequelize } from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
import formRoutes from "./routes/formRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ API is running");
});

// Подключаем роуты
app.use("/api/auth", authRoutes);
app.use("/api/forms", formRoutes);

// Подключаемся к БД и синхронизируем модели
connectDB().then(() => {
  sequelize.sync({ alter: true }) // ← НЕ force, иначе данные сотрутся
    .then(() => {
      console.log("📦 Tables synced with DB");
      app.listen(PORT, () => {
        console.log(`🚀 Server started on http://localhost:${PORT}`);
      });
    })
    .catch(err => console.error("❌ Sync error:", err));
});
