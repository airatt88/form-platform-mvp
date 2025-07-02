import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js"; // теперь безопасно

const Form = sequelize.define("Form", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  fields: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
}, {
  tableName: "forms",
  timestamps: true,
});

export default Form;
