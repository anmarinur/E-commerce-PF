const { DataTypes } = require('sequelize');

module.exports= (sequelize) => {    
    sequelize.define(
      "Fav",{
      },
      {
        timestamps: false,
      }
    );
};