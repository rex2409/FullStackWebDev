const { default: axios } = require("axios");

// updating the cart quantity
let cartitems = document.querySelector('.cartItems');
cartitems.addEventListener('click',(ev)=>{
    let item = ev.target;
    let sign = item.innerText;
    let productId = item.getAttribute('productId');
    let priceValue = document.querySelector('.priceValue');
    if(sign === '+'){
    let quantityNumber = ev.target.parentElement.previousElementSibling;

        axios.get(`/shop/increaseQty?productId=${productId}`)
            .then((res)=>{
                quantityNumber.innerText = Number(quantityNumber.innerText)+1;
                priceValue.innerText = `$ ${res.data.totalPrice}`;
            }).catch(err=>{
                console.log(err);
            })
    }
    else if(sign == '-'){
    let quantityNumber = ev.target.parentElement.previousElementSibling.previousElementSibling;

        axios.get(`/shop/decreaseQty?productId=${productId}`)
            .then((res)=>{
                quantityNumber.innerText = Number(quantityNumber.innerText)-1;
                priceValue.innerText = `$ ${res.data.totalPrice}`;
            }).catch(err=>{
                console.log(err);
            })
    }
    else if(ev.target.classList.contains('deleteBtn')){
        axios.get(`/shop/deletecartitem?productId=${productId}`)
            .then((res)=>{
                ev.target.parentElement.parentElement.innerText='';
                let cartCount = document.querySelector('.cartCount');
                cartCount.innerText = Number(cartCount.innerText)-1;
                priceValue.innerText = `$ ${res.data.totalPrice}`;

            }).catch(err=>{
                console.log(err);
            })
    }
})

