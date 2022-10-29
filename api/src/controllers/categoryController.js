const { Category, Product } = require('../db.js');

const getCategories = async (req, res)=>{

    try {
        const categoriesDB = await Category.findAll();
        res.json(categoriesDB);
    } catch (error) {
        res.json({error: error.message});
    }

}

const postCategory = async (req, res)=>{

    const {category} = req.params;
    try {
        const [newCategory, created] = await Category.findOrCreate({
            where: {category}
        })
        created
            ? res.json(newCategory)
            : res.json("Category already exist");

    } catch (error) {
        res.json(error.message);
    }
}

const updateCategory = async (req, res)=>{

}

const deleteCategory = async (req, res)=>{

}

module.exports={
    getCategories, 
    postCategory,
    updateCategory,
    deleteCategory 
}
