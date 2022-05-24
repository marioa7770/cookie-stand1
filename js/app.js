'use strict';
console.log('Anyone else think "salmon cookies" sound gross?');

let storeHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];

let storeArray = [];

const storeTable = document.querySelector('table tbody');

function Store(name,min, max, avg) {
  this.storeName = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
  this.totalCookiesPerHour = [];
  this.cookieTotal = 0;
  this.randomCustPerHour = function() {
    for (let i = 0; i < storeHours.length; i++) {
      let hourlyCustomer = (Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      //console.log(hourlyCustomer);//To check the method is working
      let hourlyCookieTotal = Math.ceil(hourlyCustomer * this.avgCookiePerCust);
      this.totalCookiesPerHour.push(hourlyCookieTotal);
      this.cookieTotal += hourlyCookieTotal;
    }
  };
  this.renderTable = function() {
    this.randomCustPerHour();
    let tr = document.createElement('tr');
    storeTable.appendChild(tr);
    let th = document.createElement('th');
    th.textContent = this.storeName;
    tr.appendChild(th);
    for (let i = 0; i < this.totalCookiesPerHour.length; i++) {
      let td = document.createElement('td');
      td.textContent = this.totalCookiesPerHour[i];
      tr.appendChild(td);
    }
    let td = document.createElement('td');
    td.textContent = this.cookieTotal;
    tr.appendChild(td);
  };
  storeArray.push(this);
}
let seattleStore = new Store('Seattle',23,65,6.3);
let tokyoStore = new Store('Tokyo',3,24,1.2);
let dubaiStore = new Store('Dubai',11,38,3.7);
let parisStore = new Store('Paris',20,38,2.3);
let limaStore = new Store('Lima',2,16,4.6);

let tableHeader = function() {
  const tableHead = document.querySelector('table thead');
  let tr = document.createElement('tr');
  tableHead.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < storeHours.length; i++) {
    let th = document.createElement('th');
    th.textContent = storeHours[i];
    tr.appendChild(th);
  }
  let thTotal = document.createElement('th');
  thTotal.textContent = 'Daily Location Total';
  tr.appendChild(thTotal);
};

let tableFooter = function() {
  const tableFoot = document.querySelector('table tfoot');
  let tr = document.createElement('tr');
  tableFoot.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Totals';
  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
  }
};
tableHeader();
for (let i = 0; i < storeArray.length; i++) {
  storeArray[i].renderTable();
}
tableFooter();


