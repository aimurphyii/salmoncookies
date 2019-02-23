'use strict'
var hours = [
  '6:00AM',
  '7:00AM',
  '8:00AM',
  '9:00AM',
  '10:00AM',
  '11:00AM',
  '12:00PM',
  '1:00PM',
  '2:00PM',
  '3:00PM',
  '4:00PM',
  '5:00PM',
  '6:00PM',
  '7:00PM',
  '8:00PM',
  'Total'
];

/** This is the collection of data for the shops */
var data = [];

// SHOPS
var pikeTr = document.getElementById('pike');
var seaTacTr = document.getElementById('seatac');
var seaCtrTr = document.getElementById('seaCtr');
var capHillTr = document.getElementById('capHill');
var alkiTr = document.getElementById('alki');
var domTable = document.getElementById('shops');

// try this a different way

function ShopStats(name, min, max, avgCookies, list) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.list = list;
  this.stats = [];
  this.sums = [];

  // Create a data object
  var currentData = {};

  // Set the name on the data object
  currentData.location = name;

  // Create a sales object to contain the sales data. We'll fill it in below
  currentData.sales = {};

  this.render = function () {
    for (var i = 0; i < hours.length - 1; i++) {
      var min = this.min;
      var max = this.max;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;

      this.customer = random;
      var avgCookies = this.avgCookies;
      var cookiesPerHour = this.customer * avgCookies;
      this.stats.push(Math.round(cookiesPerHour));
      this.cookiesSold = cookiesPerHour;

      // For each hour, save the cookies per hour where the property is the hour and the value is the cookies per hour
      currentData.sales[hours[i]] = cookiesPerHour;

      var tables = document.createElement('td');
      tables.innerHTML = (Math.round(this.stats[i]));
      this.list.appendChild(tables);
      // think about appending to table instead of to dom.
    }
    var sum = this.stats.reduce(function (a, b) { return a + b; }, 0);
    this.sums.push(sum);
    var tot = document.createElement('td');
    tot.textContent = Math.round(sum);
    this.list.appendChild(tot);
    domTable.appendChild(this.list);

    // Add the current data to the global data object
    data.push(currentData);
  }
}

// time header

// make this whole thing one function
var timeRow = document.getElementById('time');
// put the td from above locations into this 
for (var j = 0; j < hours.length; j++) {

  var tabDat = document.createElement('th');
  tabDat.innerHTML = hours[j];
  timeRow.appendChild(tabDat);
};


var pike = new ShopStats('1st and Pike', 23, 65, 6.3, pikeTr);
var seaTac = new ShopStats('SeaTac Airport', 3, 24, 1.2, seaTacTr);
var seaCtr = new ShopStats('Seattle Center', 11, 38, 3.7, seaCtrTr);
var capHill = new ShopStats('Capitol Hill', 20, 38, 2.3, capHillTr);
var alki = new ShopStats('Alki Beach', 2, 16, 4.6, alkiTr);

pike.render();
seaTac.render();
seaCtr.render();
capHill.render();
alki.render();





// need to fix totals

// hourly totals
function callTotal() {
  var totRow = document.getElementById('timeTot');

  // Make sure our row is empty
  while (totRow.lastChild) {
    totRow.removeChild(totRow.lastChild);
  }

  var totLabel = document.createElement('th');
  totLabel.textContent = 'Hourly Totals';
  totRow.appendChild(totLabel);

  var grandTotal = 0;

  for (var k = 0; k < hours.length - 1; k++) {

    var currentHour = hours[k]; // e.g. "8:00AM";
    var currentHourSales = [];

    for (var l = 0; l < data.length; l++) {
      var currentStore = data[l];
      currentHourSales.push(currentStore.sales[currentHour]);
    }

    // currentHourSales.push(pike.stats[k], seaTac.stats[k], seaCtr.stats[k], capHill.stats[k], alki.stats[k]);

    var sum = currentHourSales.reduce(function (a, b) { return a + b; }, 0);
    grandTotal += sum;

    var tot = document.createElement('td');
    tot.textContent = Math.round(sum);
    totRow.appendChild(tot);
    domTable.appendChild(totRow);
  }
  //var allTots = [];
  //allTots.push(pike.sums, seaTac.sums, seaCtr.sums, capHill.sums, alki.sums);

  //console.log('parseint' + allTots);
  //var sums = parseInt(allTots[0]) + parseInt(allTots[1]) + parseInt(allTots[2]) + parseInt(allTots[3]) + parseInt(allTots[4]);

  //console.log(sums);

  var grandTotalElement = document.createElement('td');
  grandTotalElement.textContent = Math.round(grandTotal);
  totRow.appendChild(grandTotalElement);
}


//NEW STORES!


// cache chat from DOM
var nextshopList = document.getElementById('nextshop');
var shopForm = document.getElementById('sweetness');


// step 5 takes params and creates an obj.. comment obj
var CookieStand = function (name, min, max, avgCookies) {
  this.name = name;
  this.min = parseInt(min);
  this.max = parseInt(max);
  this.avgCookies = parseInt(avgCookies);
};


CookieStand.prototype.render = function () {

  // Add data to the global data variable
  // Create a data object
  var currentData = {};

  // Set the name on the data object
  currentData.location = this.name;

  // Create a sales object to contain the sales data. We'll fill it in below
  currentData.sales = {};


  var newRow = document.createElement('tr');
  newRow.innerHTML = '<tr id="' + this.name + '"></tr>';
  domTable.appendChild(newRow);
  var shopName = document.createElement('th');
  shopName.innerHTML = this.name;
  newRow.appendChild(shopName);
  // var list = document.getElementById(this.name);
  console.log(this.name);
  // this.list = list;
  console.log('newRow gets ' + newRow);
  // console.log('list gets'+list);
  var stats = [];
  this.stats = stats;
  var sums = [];
  this.sums = sums;
  for (var i = 0; i < hours.length - 1; i++) {
    var min = this.min;
    var max = this.max;
    console.log('min = ' + min);
    console.log('max = ' + max);
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('random is ' + random);
    this.customer = random;
    console.log('this is customer ' + this.customer);
    var avgCookies = this.avgCookies;
    console.log('avgCookies = ' + avgCookies);
    var cookiesPerHour = this.customer * avgCookies;
    console.log('this is a cookies per hour sale ' + cookiesPerHour);
    this.stats.push(Math.round(cookiesPerHour));

    // For each hour, save the cookies per hour where the property is the hour and the value is the cookies per hour
    currentData.sales[hours[i]] = cookiesPerHour;


    this.cookiesSold = cookiesPerHour;
    console.log('this is cookies sold per hour ' + this.cookiesSold);
    var tables = document.createElement('td');
    tables.innerHTML = (Math.round(this.stats[i]));
    newRow.appendChild(tables);
    domTable.appendChild(newRow);
    // appended to table, .
  }
  var sum = this.stats.reduce(function (a, b) { return a + b; }, 0);
  this.sums.push(sum);
  var tot = document.createElement('td');
  tot.textContent = Math.round(sum);
  newRow.appendChild(tot);
  console.log('reduce for ' + this.name + 'gets ' + sum);
  console.log('the total cookies per hour array for ' + this.name + ' gets ' + this.stats);

  // Add the current data to the global data object
  data.push(currentData);

  console.log(data);

  // To get the data for the first shop in the array
  var shop = data[0];

  // To get the name of the location
  var shopName = shop.location; // data[0].location

  // To get the sales object
  var sales = shop.sales; // data[0].sales

  // To the get sales for 8 AM
  var eightAmSales = shop.sales["8:00AM"]; // data[0].sales["8:00AM"];
}
var allShops = [];


// step 3 looks at event
// This guy should understand how to create a new shop, render it on the page, and update the totals
function newShopHandler(event) {
  event.preventDefault();
  // console.log(event);
  // console.log(event.target.who);
  console.log(event.target.where.value);
  console.log(event.target.min.value);

  // step 4 looks at and gives values
  var name = event.target.where.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avgCookies = event.target.avg.value;

  // Create a new shop
  var newShop = new CookieStand(name, min, max, avgCookies);

  // step 6 ref inputs and clear out 
  event.target.where.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;

  // Render the new shop on the page
  newShop.render();

  // Re-render the totals
  callTotal();

  // 7 now run values into prototype!.. stored new value to array, need to call the array value through 
  //allShops.push(newShop);

  // Last step...now call it here
  //renderNewShops();
}

// stick it to the DOM
function renderNewShops() {
  // get rid of existing comments first
  // nextshopList.textContent = '';
  // now put the new list itmes from the array into it.
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
    //domTable.appendChild(allShops[i].render());
  }

}

// step 2 add event listener then call handle

shopForm.addEventListener('submit', newShopHandler);

// Render the totals for the first time
callTotal();

console.log(data);
