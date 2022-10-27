const { Product, User } = require('../db.js');

const getFavorits = async (req, res) => {
    const pageNumber = Number.parseInt(req.query.page);
    const sizeNumber = Number.parseInt(req.query.size);
    const { user } = req.query;
        
    let page  = 0;
    let size  = 12;
        
    if(!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber;
    if(!Number.isNaN(sizeNumber) && sizeNumber > 0 && sizeNumber < 12) size = sizeNumber;
    
    if (user) { 
        try {
            const userDB = await User.findOne(  { 
                where : { id:user }, 
                attributes: {exclude: ['id','name','image','email','block','shipping_address','country','phone']},
                include: { model:Product, through: {
                    attributes: []
                  }},
                //limit: size,
                //offset: page * size
            });
            return res.status(200).json(userDB);
        } catch (error) {
            return res.json(error.message);
        }
    } else return res.status(200).json('User Empty')
}
//-*-*-*-*-*-*-*-*-*-*-*
const postFavorits = async(req,res)=> {
    const { user, favorits} = req.body;   

    try {
        const userDB = await User.findByPk(user)        
        if (userDB) {
            favorits?.map( async(f)=> {
                console.log(f)
                let productDB = await Product.findByPk(f);
                
                await userDB.addProduct(productDB);  
            })
            return res.status(200).json(userDB);
        }
        return res.status(200).json('User not found');
    } catch (error) {
        return res.json(error.message);
    }
}
 //-*-*-*-*-*


module.exports = {
    getFavorits,
    postFavorits,
}