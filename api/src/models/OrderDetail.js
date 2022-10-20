const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "OrderDetail",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      units: {
       type: DataTypes.INTEGER,
       allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );
};
