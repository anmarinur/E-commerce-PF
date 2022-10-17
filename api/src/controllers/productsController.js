const { Product } = require('../db.js');
const { Op } = require("sequelize");

const getProducts = async (req, res) => {
    const pageNumber = Number.parseInt(req.query.page);
    const sizeNumber = Number.parseInt(req.query.size);
    const cat        = req.query.cat //recibo la categoria x query en la variable cat
    const orderPrice = req.query.ordprice
    console.log(orderPrice)
    
    let page = 0;
    let size = 12;

    if(!Number.isNaN(pageNumber) && pageNumber > 0) page = pageNumber;
    if(!Number.isNaN(sizeNumber) && sizeNumber > 0 && sizeNumber < 12) size = sizeNumber;

   
    try {
        if (cat) { //si hay categoria se asume deseo de filtro
            if (orderPrice) { //si hay criterio de ordenacion tomalo en cuenta
                const products = await Product.findAndCountAll({
                    where : { category: {[Op.eq]: cat} }, 
                    order: [ ['price', orderPrice] ],  
                    limit: size, offset: page * size, 
                });      
                res.status(200).json({ totalPages: Math.ceil(products.count / size),products: products.rows }); 
            } else  {
                const products = await Product.findAndCountAll({
                    where : { category: {[Op.eq]: cat} }, 
                    limit: size, offset: page * size, 
                });      
                res.status(200).json({ totalPages: Math.ceil(products.count / size),products: products.rows }); 
            }
        } else 
            { //Cat en blanco se asume no desea filtro
                if (orderPrice) { //si hay criterio de ordenacion tomalo en cuenta
                    const products = await Product.findAndCountAll({  //Busco todo y cuenta registros
                    order: [ ['price', orderPrice] ],  

                    limit: size,
                    offset: page * size,
                });
                res.status(200).json({ totalPages: Math.ceil(products.count / size),
                products: products.rows});
                } else 
                {
                    const products = await Product.findAndCountAll({  //Busco todo y cuenta registros
                        limit: size,
                        offset: page * size,
                    });
                    res.status(200).json({ totalPages: Math.ceil(products.count / size),
                    products: products.rows});
                }
            } //del else de Cat en blanco

    } catch (error) {
       res.status(404).json({error: error.message}); 
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    console.log(id)
    const product = await Product.findByPk(id);
    if(product) return res.status(200).json(product);
    res.status(404).json({ error: "product ID not found or invalid" });
}

const postProduct = async ( req, res ) => {
 try {
  const { name, image, description, price, category, stock, brand } = req.body; 

  if( !name || !image || !description || !price || !category || !stock || !brand) throw(Error('Invalid inputs'));

  let productData = await Product.findAll({
   where:{
    name: name,
    brand: brand,
    stock: stock
   }
  });

  if(productData.length > 0) throw(Error('Product already in database'));

  let product = await Product.create({ name, image, description, price, category, stock, brand });

  res.status(200).json('Product created successfully');

 } catch (error) {
  res.status(404).json({error: error.message});
 }
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.destroy({
        where: {
            id
        }
    })
    .then( (data) => res.status(200).json("Product deleted successfully") )
    .catch( (error) => res.status(400).json(error.message) )
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    Product.update({...updateData},{
        where: {
            id
        }
    })
    .then( (data) => res.status(200).json("Product update successfully") )
    .catch( (error) => res.status(400).json({error: error.message}) )
}


module.exports = {
    getProducts,
    getProductById,
    postProduct,
    deleteProduct,
    updateProduct
}