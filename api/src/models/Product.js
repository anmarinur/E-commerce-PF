const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        min: 0.01,
      }
    },
    category: {
      type: DataTypes.ENUM("notebook","smartphone"),
      allowNull: false,
    }
  },
  {
    timestamps: false
  });

}