const { DataTypes } = require('sequelize');

module.exports= (sequelize) => {
    
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        role:{
            type: DataTypes.ENUM("guest", "user", "admin"),
            defaultValue: "guest",
        },
        billing_address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            validate: {
                isInt: true,
                isNumeric: true
            }
        },
    },{
        timestamps: false
    });
}