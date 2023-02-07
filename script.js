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
//LECTURES-
//////////////////////////////////////////////////
/*
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
*/
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/*
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
*/
//////////////////////////////////////////////////
//implementing smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect(); //it gets the position of element
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //distance between viewport and butoon

  console.log('Current scroll (x/y)', window.pageXOffset, pageYOffset); //Current scroll (x/y) 0 250, y coordinate is here the  distance between the current position of the viewport and at the top of page

  console.log(
    'Current height/width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // ); //s1coords.top and s1coords.left are relative to viewport, so viewport dist from top+ current scroll= total distance

  //traditional way:
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //modern way:
  section1.scrollIntoView({ behavior: 'smooth' });
});
//////////////////////////////////////////////////
//LECTURE
/*
//Types of events and event handlers:-
const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
});

//another way of adding event (traditional):
h1.onmouseenter = function (e) {
  alert('onmouseenter: Great! You are reading the heading :D');
};

//why addEventListener is better:
//1. it allows us to add multiple event listeners to the same event all we just need to change is function
//tradional way will override the initial events

//2. we can actually remove an event handler incase we don't need it anymore:
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1);
  //if you now hover again then nothing will happen
};

h1.addEventListener('mouseenter', alertH1);

//one more way of handling events and it should be avoided:
//<h1 onclick="alert('HTML alert')"> 
//it is done on html document itself
*/
//////////////////////////////////////////////////
//Event Propagation in Practice(bubbling and capturing):-
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1 + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target);
  //e.target is where the event originated that is where the event first happend
  console.log(e.currentTarget);
  //e.currentTarget is ideed the element on which the current handler is attached.

  //STOP Propagation:
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target);
  console.log(e.currentTarget);
  //Note:-
  console.log(e.currentTarget === this); //true
});
//nav__links element also got it's own random background color so based on what we learned the event actually happens at the document root and from there it then travels down to the target element and so in this case that is 'Features' link and then from there it bubbles up and bubbling up means that basically it's as if the event had also happend in all of the parent elements and so again, it is as if the click event here on the 'Features' link had also happened right here in the nav__links element.

//Now, when we click only outside to the parent element the child element does not change it's color it is because of bubbling which it only bubbles up from child to parent.

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target);
    console.log(e.currentTarget);
  },
  true
);
//same process as above happening here just third element got added.

//when we console.log(e.target) all the three event handlers have same class that is 'nav__link' because we clicked to the 'Features' element and then it bubbles up to it's parents

//when we console.log(e.currentTarget) the all the elements have there on classes that is because of e.currentTarget

//Note:-Event listeners here is only listening for events in bubbling phase(they are not listening from root to the target element) but not in the capturing phase so that is because of the default behavior of addEventListener method and the reason for that is that the capturing phase is usually irrelevant for us, it's just not that useful.
//However if want to observe the capturing phase then we have to add the third parameter in the addEventListener funtion which is 'true' so bubbling phase will stop and you will capture the capturing event
