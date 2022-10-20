const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define(
    "Order",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      total_payment: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 0.01,
        },
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("received", "in process", "sent", "delivered"),
        allowNull: false,
      },
      date: {
       type: DataTypes.DATE,
       allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );  
 }