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
//LECTURES
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
