module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define("Like", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Like;
};
