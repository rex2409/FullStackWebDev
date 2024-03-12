let addtocartBtn = document.querySelector('.addtocartBtn');

addtocartBtn.addEventListener('click',(ev)=>{
    console.log("Clicked add to cart");
    let productId = addtocartBtn.getAttribute('productId');
    axios.get(`/shop/addtocart?productId=${productId}`)
        .then((res)=>{
            console.log("Item added to cart");
            let cartCount = document.querySelector('.cartCount');
            let x = Number(cartCount.innerText);
            x++;
            cartCount.innerText = x;
        }).catch(err=>{
            console.log(err);
            
        })
})

