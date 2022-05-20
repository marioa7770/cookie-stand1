'use strict';


let seattle = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,


  customersPerHour: function () {
    console.log(this.minCustomer);
   

  }
  
  },

  function randomCustomer (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
  }





// let tokyo = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,

//   randomCustomerNumber: function () {

//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },

//   numberOfCookies: function () {
//     return (this.avgCookieSale * this.randomCustomerNumber());
//   },

// };

// hoursArray: [6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// for (let i = 0; i < hours.array.length; i++){

// }
// console.log(tokyo.numberOfCookies());

// let dubai = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,

//   randomCustomerNumber: function () {

//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },

//   numberOfCookies: function () {
//     return (this.avgCookieSale * this.randomCustomerNumber());
//   },
// };

// hoursArray: [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// for (let i = 0; i < hours.array.length; i++){
// };
 
// console.log(dubai.numberOfCookies());

// let paris = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,

//   randomCustomerNumber: function () {
   
//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },

//   numberOfCookies: function () {
//     return (this.avgCookieSale * this.randomCustomerNumber());
//   }, 
  
// };

// hoursArray: [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//   for (let i = 0; i < hours.array.length; i++){

// console.log(dubai.numberOfCookies());

// let lima = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,

//   randomCustomerNumber: function () {

//     return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },

//   numberOfCookies: function () {
//     return (this.avgCookieSale * this.randomCustomerNumber());
//   },
  
// };

// hoursArray: [6,7,8,9,10,11,12,13,14,15,16,17,18,19];
//   for (let i = 0; i < hours.array.length; i++){

// console.log(paris.numberOfCookies());
//   }
// }

}
