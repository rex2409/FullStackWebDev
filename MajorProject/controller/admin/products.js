const Products = require('../../model/products')
const Reviews = require('../../model/reviews')

module.exports.getAddProduct = (req,res,next)=>{
    res.render('admin/addproduct',{
        isAdmin:true,
        cartCount: req.user.cart.products.length

    });
}

module.exports.postAddProduct = async (req,res,next)=>{
    const {name,price,imageUrl,description} = req.body;
    console.log(req.user);
    try{
        await Products.create({
            name,
            price,
            imageUrl,
            description,
            user_id: req.user._id
        })
        res.redirect('/admin/products');
    }catch(err){
        next(err);
    }
}

module.exports.getProducts = async (req,res,next)=>{
    try{
        let products = await Products.find({
            user_id: req.user._id
        })
        res.render('admin/products',{
            products,
            isAdmin: true,
            cartCount: req.user.cart.products.length

        });
    }catch(err){
        next(err);
    }
}

module.exports.getEditProduct = async (req,res,next)=>{
    const {id} = req.query;
    try{
        let products = await Products.find({
            _id: id
        })
        console.log(products);
        res.render('admin/editproduct',{
            product: products[0],
            isAdmin: true,
            cartCount: req.user.cart.products.length

        });
    }catch(err){
        next(err);
    }
}

module.exports.postEditProduct = async (req,res,next)=>{
    const {id,name,price,imageUrl,description} = req.body;
    try{
        let products = await Products.find({
            _id: id
        })
        products = products[0];
        products.name = name;
        products.price = price;
        products.imageUrl = imageUrl;
        products.description = description;

        await products.save();
        res.redirect('/admin/products')
    }catch(err){
        next(err);
    }
}

module.exports.getDeleteProduct = async (req,res,next)=>{
    const {id} = req.query;
    try{
        await Products.deleteOne({
            _id: id
        })
        res.redirect('/admin/products')
    }catch(err){
        next(err);
    }
}

module.exports.getDeleteReview = async (req,res,next)=>{
    const {id, productId} = req.query;
    try{
        await Reviews.deleteOne({id: id});

        let product = await Products.findOne({
            _id: productId
        }).populate('reviews');

        product.reviews.pull({_id: id});
        await product.save();
        res.render('shop/productdetails',{
            product,
            isAdmin:req.user.isAdmin,
            cartCount: req.user.cart.products.length

        });
    }catch(err){
        next(err);
    }
}