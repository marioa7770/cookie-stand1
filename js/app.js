'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

const tableHeadData = document.getElementById('theadData');
function createHead() {
  let hoursOfOperation = document.createElement('th');
  hoursOfOperation.textContent = 'Stores & Hours Of Operation';
  tableHeadData.appendChild(hoursOfOperation);

  for (let i = 0; i < hours.length; i++) {
    let times = document.createElement('th');
    times.textContent = `${hours[i]}`;
    tableHeadData.appendChild(times);
  }
  let tbTotal = document.createElement('th');
  tbTotal.textContent = 'Daily Location Totals';
  tableHeadData.appendChild(tbTotal);
}
createHead();

const storeSales = document.getElementById('sales');
const tbody = document.querySelector('tbody');

let storeArray = [];
let cookiesTotalArray = [];

function Store(name, min, max, avg) {
  this.name = name,
  this.min = min,
  this.max = max,
  this.avg = avg,
  this.dailyTotal = 0,
  this.CookiesSoldEachHourArray = [];

  this.randomCustomers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.calcCookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCustomersThisHour = this.randomCustomers();
      let cookiesSoldThisHour = Math.ceil(numberOfCustomersThisHour * this.avg);
      this.CookiesSoldEachHourArray.push(cookiesSoldThisHour);
      this.dailyTotal = this.dailyTotal + cookiesSoldThisHour;
    }
    cookiesTotalArray.push(this.dailyTotal);
  };
  this.render = function () {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    let tdName = document.createElement('td');
    tdName.textContent = this.name;
    tr.appendChild(tdName);
    this.calcCookiesPerHour();
    for (let i = 0; i < hours.length; i++) {
      let td = document.createElement('td');
      td.textContent = `${this.CookiesSoldEachHourArray[i]} cookies`;
      tr.appendChild(td);
    }
    let tdTotal = document.createElement('td');
    tdTotal.textContent = `total: ${this.dailyTotal} cookies`;
    tr.appendChild(tdTotal);
  };
  storeArray.push(this);
}


const cookieForm = document.getElementById('form');

function submitStore(event){
  event.preventDefault();
  let storeName = event.target.store.value;
  let minimum = +event.target.minimum.value;
  let maximum = +event.target.maximum.value;
  let average = +event.target.average.value;
  let newStore = new Store(
    storeName,
    minimum,
    maximum,
    average
  );
  newStore.render();
  let oldTFoot = document.querySelector('tfoot');
  oldTFoot.remove();
  createTFoot();
}



cookieForm.addEventListener('submit',submitStore);

let seattleStore = new Store('Seattle', '23', '65', '6.3');
seattleStore.render();

let tokyoStore = new Store('Tokyo', '3', '24', '1.2');
tokyoStore.render();

let dubaiStore = new Store('Dubai', '11', '38', '3.7');
dubaiStore.render();

let parisStore = new Store('Paris', '20', '38', '2.3');
parisStore.render();

let limaStore = new Store('Lima', '2', '16', '4.6');
limaStore.render();

function createTFoot() {
  let tfoot = document.createElement('tfoot');
  storeSales.appendChild(tfoot);
  let tr = document.createElement('tr');
  tfoot.appendChild(tr);
  let sum = document.createElement('td');
  sum.textContent = 'TOTAL';
  tr.appendChild(sum);
  let sumArray = [];
  for (let i = 0; i < 14; i++) {
    let sum = 0;
    for (let j = 0; j < storeArray.length; j++) {
      sum += storeArray[j].CookiesSoldEachHourArray[i];
    }
    sumArray.push(sum);
    let sumTotal = document.createElement('td');
    sumTotal.textContent = `${sumArray[i]}`;
    tr.appendChild(sumTotal);

  }
  let finalSum = 0;
  for (let i = 0; i < cookiesTotalArray.length; i++) {
    finalSum += cookiesTotalArray[i];
  }
  let grandTotal = document.createElement('td');
  grandTotal.textContent = `${finalSum}`;
  tr.appendChild(grandTotal);
}
createTFoot();