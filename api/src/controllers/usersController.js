const { Op } = require('sequelize');
const { User } = require('../db.js');

const getUsers = async (req, res) => {

    const { page, size, search } = req.query;
    const offset = page || 0;
    const limit  = size || 12;
    let where    = {};

    if(search) where.email = {[Op.iLike]: `%${search}%`};

    try {

        const users = await User.findAndCountAll({
            where,
            limit,
            offset
        })

        return res.json({
            totalPages: Math.ceil(users.count / limit), 
            products: users.rows
        });
            
    } catch (error) {
        res.status(400).json("Not Found Users");
        
    }
}

const postUser = async (req, res)=>{
    try {
        const user = req.body;
        await User.create(user);
        res.json("New User created");
    } catch (error) {
        res.json(error.message);
    }
}

const getUserCheck = async (req, res)=>{
    try {
        const {email} = req.params;

        const user = await User.findOne({
            where:{
                email
            }
        });

        if(!user) return res.json({block: null});
        return res.json({block: user.block})
        
    } catch (error) {
        res.json(error.message);
    }
}

const blockUser = async (req, res)=>{
    const { email, block } = req.params

    try {
        const user = await User.update({block},{
            where: {
                email
            }
        })
        if(user[0]) return res.json( block==="true" ? "block" : "unblock" );
        return res.json("Not match user");
    } catch (error) {
        res.json(error.message)
    }
}

const updateUser = (req, res)=>{

    const { email } = req.params;
    const updateData = req.body;
    User.update(updateData,{
        where: {
            email
        }
    })
    .then( (data) => res.status(200).json("Product updated successfully") )
    .catch( (error) => res.status(400).json({error: error.message}) )

}

const getUserByEmail = async ()=>{

    try {
        const user = await User.findOne({
            where:{
                email
            }
        })
        return res.json(user)
    } catch (error) {
        res.json(error.message);
    }

}

module.exports = {
    getUsers,
    postUser,
    getUserCheck,
    blockUser,
    updateUser,
    getUserByEmail
}