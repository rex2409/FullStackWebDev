const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    username: String, // String is shorthand for {type: String}
    password: String,
    fbId: String,
    fbAccessToken: String,
    googleId: String,
    googleAccessToken: String,
    isAdmin: Boolean,
    cart: {
        products: [
            {
                id: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: 'Products'
                },
                quantity: Number
            }
        ]
    }
});

userSchema.method('addToCart',function (productId){
    console.log(this._id);
    let cartProducts = this.cart.products;
    console.log("Cart Products: ",cartProducts);

    let indx = -1;
    cartProducts.forEach((e,i)=>{
        if(e.id == productId){
            indx = i;
        }
    })

    if(indx == -1){
        cartProducts.unshift({
            id: productId,
            quantity: 1
        })
    }
    else{
        cartProducts[indx].quantity += 1;
    }

    return this.save();
})

module.exports = mongoose.model('User',userSchema);
  