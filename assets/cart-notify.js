const cartBtn = document.querySelector('.option-add-cart');
const cartBlock = document.querySelector('cart-notification');
const cartBack = document.querySelector('.cart-notify__links > button');
const viewCart = document.querySelector('.cart-notify__links div')



cartBtn.addEventListener('click', (e) => {
  cartBlock.style.display = 'block';

})

cartBack.addEventListener('click', () => {
  cartBlock.style.display = 'none';
})

viewCart.addEventListener('click', () => {
  cartBtn.setAttribute('type', "submit");
  cartBtn.click()
})

cartBtn.setAttribute('type', "button");
