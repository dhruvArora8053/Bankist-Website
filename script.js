'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//LECTURES-
//Selecting, Creating, Inserting and Deleting elements:-
//selecting elements:
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); //it will return the first element that matches the header selector
const allSections = document.querySelectorAll('.section'); //it will return a node list which that matches with the section class
console.log(allSections);

document.getElementById('section--1'); //it will select the id section

const allButtons = document.getElementsByTagName('button'); //it will select all the elements with name of button
console.log(allButtons);
//this method actually returns an HTML collection so that's different from a node list because an HTML collection is actually so called live collection and that means if the dom changes then this collection is also immediately updated automatically For ex:- if you have a collection of 9 button elements and you remove one button element from the dom then one button element also will be removed from HTML collection. And remember this does not happen with a node list.

console.log(document.getElementsByClassName('btn')); //it also returns the HTML live collection

//Creating and inserting elements:
//.insertAdjacentHTML

const message = document.createElement('div'); //it created div element
message.classList.add('cookie-message'); //it gave cookie-message class to that dive element
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>';
//worte inner html inside that element

//header.prepend(message); //added at top of header in DOM
header.append(message); //added at bottom of header in DOM

//what if we want to insert multiple copies of the same element:
//header.append(message.cloneNode(true)); //cloneNode means all the child elements will also be copied

header.before(message); //this insert before the header
header.after(message); //this will insert after the header

//Delete elements:
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    //new
    message.remove(); //we already have message element stored in a variable so there's no need to run a document.querySelector ofcourse we could do it and it would work as well

    //traditional
    //message.parentElement.removeChild(message);
  });

//Styles, Attributes and Classes:-
//Styles:
message.style.backgroundColor = '#37383d'; //inline style
message.style.width = '120%'; //inline style

console.log(message.style.height); //output nothing, it is because this thing only works for inline styles that we set ourselves using the style property.

console.log(message.style.backgroundColor); //output rgb(55, 56, 61)

//to get all the styles:
console.log(getComputedStyle(message).color); //rgb(187, 187, 187)
console.log(getComputedStyle(message).height); //47.5px

//increasing height by 40px
message.style.height =
  Number.parseFloat(getComputedStyle(message).height + 10) + 30 + 'px';

console.log(getComputedStyle(message).height); //77.5px

//CSS variables:
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes:
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //http://127.0.0.1:5500/img/logo.png - absolute link
console.log(logo.className);

//setting up:
logo.alt = 'Beautiful Minimalist Logo';
console.log(logo.alt);

//Non-Standard
console.log(logo.designer); //undefined,
//other way to get it:
console.log(logo.getAttribute('designer')); //jonas
logo.setAttribute('company', 'Bankist'); //new attribute created
console.log(logo.getAttribute('src')); //img/logo.png - relative link

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //http://127.0.0.1:5500/index.html#
console.log(link.getAttribute('href')); //#

//Data Attributes:
console.log(logo.dataset.versionNumber); //3.0, addded a property of data and then log it here

//Classes:
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c', 'j'); //not includes

//Don't use this
logo.className='jonas' //don't use this because this will override all the existing classes and also it allows us to put only one class on any element.
