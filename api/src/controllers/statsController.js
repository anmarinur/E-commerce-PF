const { User, Category, Product, Order, OrderDetail, db } = require('../db.js');
const { Op, Sequelize } = require('sequelize');

const getStatsCategories = async( req, res )=>{
    try {
        const result = await Product.findAll({
            attributes:[ 
                "CategoryId",
                [db.fn("COUNT", "CategoryId"), "total" ]
            ],
            order: [ ["CategoryId", "ASC"] ],
            group: ["CategoryId"]   
        });
        const name = await Category.findAll()
        result.map(r=>{
            return r.dataValues.category = name.find(n=>n.id===r.CategoryId)?.category;
        });
        res.json(result);
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    getStatsCategories,
}