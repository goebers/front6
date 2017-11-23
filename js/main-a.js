"use strict";

const add = document.querySelector('#add'); // "add" button

const change = document.querySelector('#change'); // "change" button

const toggle = document.querySelector('#toggle'); // "toggle" button

const firstP = document.querySelectorAll('p') [0]; // first <p>

const secondP = document.querySelectorAll('p') [1]; // second <p>

const thirdP = document.querySelectorAll('p') [2]; // third <p>


add.addEventListener('click',function(){ // event listener for button "add"
  firstP.classList.add('red');
});

change.addEventListener('click',function(){ // event listener for button "change"
  if (secondP.classList.contains('red')) {

    secondP.classList.remove('red'); // remove old class
    secondP.classList.add('blue'); // insert new class

  } else if (secondP.classList.contains('blue')){ // vice versa to above

    secondP.classList.remove('blue');
    secondP.classList.add('red');

  }
});

toggle.addEventListener('click', function () {
  thirdP.classList.toggle('green');
});
