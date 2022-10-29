const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
           isEmail: true,
      }
     },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
       type: DataTypes.INTEGER,
       allowNull: false
      }
    },
    {
      timestamps: true,
    }
  );
};
