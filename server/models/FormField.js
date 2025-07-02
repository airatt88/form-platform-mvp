import { DataTypes } from "sequelize";
import sequelize from "./sequelize.js";
import Form from "./Form.js";

const FormField = sequelize.define("FormField", {
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("text", "textarea", "checkbox", "radio", "select"),
    allowNull: false,
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  required: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  tableName: "form_fields",
  timestamps: true,
});

FormField.belongsTo(Form, { foreignKey: "formId" });
Form.hasMany(FormField, { foreignKey: "formId" });

export default FormField;
