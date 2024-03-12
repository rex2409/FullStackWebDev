const Products = require('../../model/products');
const Reviews = require('../../model/reviews');

module.exports.getProducts = async (req,res,next)=>{
    try{
        let products = await Products.find({})
        res.render('shop/products',{
            products,
            isAdmin:req.user.isAdmin,
            cartCount: req.user.cart.products.length
        });
    }catch(err){
        next(err);
    }
}

module.exports.getProductDetails = async (req,res,next)=>{
    const {id} = req.query;
    try{
        let products = await Products.find({_id:id}).populate('reviews');
        res.render('shop/productdetails',{
            product: products[0],
            isAdmin:req.user.isAdmin,
            cartCount: req.user.cart.products.length
        });
    }catch(err){
        next(err);
    }
}

module.exports.postSubmitReview = async (req,res,next)=>{
    const {productId, title, description} = req.body;
    try{
        let review = await Reviews.create({title,description});
        // console.log(review);
        let product = await Products.findOne({_id: productId});
        product.reviews.unshift(review._id);
        await product.save();

        product = await Products.findOne({_id: productId}).populate('reviews');
        // console.log(product.reviews);
        res.send({
            reviews:product.reviews
        });
    }catch(err){
        next(err);
    }
}

module.exports.getAddToCart = async (req,res,next)=>{
    const {productId} = req.query;
    req.user.addToCart(productId)
        .then((result)=>{
            console.log(result);
            res.send("DONE");
        }).catch((err)=>{
            next(err);
        })
}

module.exports.getCart = async (req,res,next)=>{
    req.user.populate('cart.products.id')
        .then((user)=>{
            // console.log(user.cart.products);
            let products = user.cart.products;
            let totalPrice = 0;
            products.forEach((e)=>{
                totalPrice+=(e.id.price*e.quantity)
            });
            res.render('shop/cart',{
                products: user.cart.products,
                cartCount: req.user.cart.products.length,
                totalPrice
            })
        }).catch((err)=>{
            next(err);
        })
}

module.exports.getIncreaseQty = async  (req,res,next)=>{
    let {productId} = req.query;
    let userId = req.user._id;

    req.user.populate('cart.products.id')
        .then(async(user)=>{
            // console.log(user.cart.products);
            let products = user.cart.products;
            let totalPrice = 0;
            products.forEach((e)=>{
                totalPrice+=(e.id.price*e.quantity)
            });
            products.forEach((e)=>{
                // totalPrice+=(e.id.price*e.quantity)
                if(e.id._id == productId){
                    e.quantity += 1;
                }
            });
            try{
                await req.user.save();
            }catch(err){
                return next(err);
            }
            res.send({
                msg: 'Ok, Quantity Updated Success',
                totalPrice
            });

        }).catch((err)=>{
            next(err);
        })
}

module.exports.getDecreaseQty = async  (req,res,next)=>{
    let {productId} = req.query;
    let userId = req.user._id;

    req.user.populate('cart.products.id')
        .then(async(user)=>{
            // console.log(user.cart.products);
            let products = user.cart.products;
            let totalPrice = 0;
            products.forEach((e)=>{
                totalPrice+=(e.id.price*e.quantity)
            });
            products.forEach((e)=>{
                // totalPrice+=(e.id.price*e.quantity)
                if(e.id._id == productId){
                    e.quantity -= 1;
                }
            });
            try{
                await req.user.save();
            }catch(err){
                return next(err);
            }
            res.send({
                msg: 'Ok, Quantity Updated Success',
                totalPrice
            });

        }).catch((err)=>{
            next(err);
        })
}

module.exports.getDeleteCartItem = async (req,res,next)=>{
    let {productId} = req.query;
    let userId = req.user._id;

    req.user.populate('cart.products.id')
        .then(async(user)=>{
            // console.log(user.cart.products);
            let products = user.cart.products;
            let totalPrice = 0;
            let newProducts = products.filter((e)=>{
                if(e.id._id == productId){
                    return false;
                }
                return true;
            });
            newProducts.forEach((e)=>{
                totalPrice+=(e.id.price*e.quantity)
            });
            user.carts.products = newProducts;
            try{
                await req.user.save();
            }catch(err){
                return next(err);
            }
            res.send({
                msg: 'Ok, Cart Item Deleted Success',
                totalPrice
            });

        }).catch((err)=>{
            next(err);
        })
}