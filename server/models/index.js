import sequelize from "./sequelize.js";
import "./Form.js";
import "./FormField.js";
import "./User.js";

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connected!");
  } catch (error) {
    console.error("❌ Unable to connect:", error);
  }
};

export { sequelize };
export default connectDB;
