'use strict';


let storeHours = ['6:00am','7:00am','8.00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

const seattleStoreContainer = document.getElementById('seattleStore');
let ulSeattle = document.createElement('ul');
ulSeattle.tectContent = 'Seattle Store';

let seattleStore = {
  customersPerHourArray: [],
  cookieTotal: 0,
  minCust: 23,
  maxCust: 65,
  avgCookiePerCust: 6.3,
  seattleStorePerHour: function(){
for (let i = 0; i < storeHours.length; i++){
  let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));

  console.log(hourlyCustomer)
}
  }
  
}
