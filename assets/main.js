
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// varible căn giữa btn category
const btnCategory = $$('.btn-category');

// variable icon heart
const productsHeart = $$('.feature-product .feature-icon');
const productHeartFill = $$('.feature-product .feature-icon--active');

// variable menu

const menuOpen = $('.menu-icon');
const menuClose = $('.close-icon');
const overlay = $('.overlay');


// căn giữa btn category
// btnCategory.forEach(function(ele)
// {
//     ele.style.left = `calc(50% - ${ele.clientWidth/2}px)`;
// })

// icon heart
productsHeart.forEach(function(ele, index)
{
    ele.onclick = function(event)
    {
        event.target.classList.add('disable');
        productHeartFill[index].classList.add('active');
    }
   
})

productHeartFill.forEach(function(ele, index)
{
    ele.onclick = function(event)
    {
        event.target.classList.remove('active');
        productsHeart[index].classList.remove('disable');
    }
   
})

// heart-on-detail

function heart(){
    const detailHeart = $('.option-like__icon');
    const detailHeartFill = $('.option-like__icon-fill');
    
    if((detailHeart || detailHeartFill) === null) return;
    
    detailHeart.onclick = function(event)
    {
        detailHeart.classList.remove('active');
        detailHeartFill.classList.add('active');
    }
    detailHeartFill.onclick = function(event)
    {
        detailHeartFill.classList.remove('active');
        detailHeart.classList.add('active');
    } 

}

heart();

// // close-open menu mobile 
// menuOpen.addEventListener('click', function(){
//     document.querySelector('.header-list').classList.toggle('menu-active')
// })

// // click icon arrow open menu

// const iconArrow = document.querySelector('.header-link--wrap svg')
// const subMenu = document.querySelector('.product-option')

// iconArrow.addEventListener('click', () => {
//     subMenu.classList.toggle('h10vh')
// })

// close-open menu mobile 
menuOpen.addEventListener('click', function(){
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
  document.querySelector('.header-list').classList.add('menu-active1')
  overlay.style.display = 'block';
})

menuClose.addEventListener('click', function(){
  document.querySelector('.header-list').classList.remove('menu-active1')
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
  overlay.style.display = 'none'

})

// click icon arrow open menu

const iconArrow = document.querySelector('.header-link--wrap svg')
const subMenu = document.querySelector('.product-option')

iconArrow.addEventListener('click', () => {
  subMenu.classList.toggle('hidden')
})





  
