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
        password: {
            type: DataType.STRING,
            allowNull: false,
        },
        role:{
            type: DataTypes.ENUM("guest", "user", "admin"),
            defaultValue: "guest",
        },
        billing_address: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true
            }
        },
        country: {
            type: DataType.STRING,
            allowNull: false,
        },
        phone: {
            type: DataType.STRING,
            validate: {
                isInt: true,
                isNumeric: true
            }
        },
    },{
        timestamps: false
    });
}