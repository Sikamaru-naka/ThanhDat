const cartBtn = document.querySelector('.option-add-cart');
const cartBlock = document.querySelector('cart-notification');
const CartBack = document.querySelector('.cart-notify__links > button');
const viewCart = document.querySelector('.cart-notify__links a')

cartBtn.addEventListener('click', () => {
  cartBlock.style.display = 'block';
})

CartBack.addEventListener('click', () => {
  cartBlock.style.display = 'none';
})

viewCart.addEventListener('click', () => {
  cartBtn.style.type = 'submit';
  cartBtn.onclick()
})