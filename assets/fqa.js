

const listQuestion = $$('.list-questions__item');
const questionMore = $$('.list-questions__title span');
const solve = $$('.solve');

<<<<<<< HEAD
=======
listQuestion[0].querySelector('span').innerHTML = "-"

>>>>>>> 3c30ee80f2b1c15bd0d2bdff5bc6336a3c397f5e
// active menu 

const menuItem = $$('.fqa-menu__item');
const menuLink = $$('.fqa-menu__link');
<<<<<<< HEAD
=======
const question = $$('.question')
question[0].classList.add('active')

>>>>>>> 3c30ee80f2b1c15bd0d2bdff5bc6336a3c397f5e


const heightSolveEle = solve[2].clientHeight;
console.log(heightSolveEle)


listQuestion.forEach(function(ele, index)
{   solve[index].style.height = '0';
    document.querySelector('.solve.active').style.height = `${heightSolveEle}px`;

    ele.addEventListener('click', function(e){
        if(questionMore[index].innerText === '+'){
            questionMore[index].innerHTML = '-';
            solve[index].style.height = `${heightSolveEle}px`;

        }
        else {
            questionMore[index].innerHTML = '+';
            solve[index].style.height = '0';

        }
        solve[index].style.transition = 'all 0.5s ease';
    })
})


// menu

<<<<<<< HEAD
const question = $$('.question')

=======
menuItem[0].classList.add('active')
menuLink[0].classList.add('fqa-menu__link--active')
>>>>>>> 3c30ee80f2b1c15bd0d2bdff5bc6336a3c397f5e
menuItem.forEach(function(ele, index){
    ele.addEventListener('click', function(e){
        document.querySelector('.active.fqa-menu__item').classList.remove('active');
        document.querySelector('.fqa-menu__link--active.fqa-menu__link').classList.remove('fqa-menu__link--active');

        ele.classList.add('active');
        menuLink[index].classList.add('fqa-menu__link--active');

        document.querySelector('.question.active').classList.remove('active');
        question[index].classList.add('active');
    })
})