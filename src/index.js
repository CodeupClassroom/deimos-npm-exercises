"use strict";
import $ from 'jquery';
// import {item as eggs, thing} from './practice.js';
const cart = require('./practice.js');

(() => {
   const sayHello = () => "Hello!";

   $('body').css({
      'background-color' : 'burlywood',
      'color' : 'firebrick'
   }).html(`<h1>${sayHello()}</h1>`);

   // console.log(eggs.color);
   console.log(cart.thing.weight);
})();