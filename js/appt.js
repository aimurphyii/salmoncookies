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
// SHOPS

var pikeTr = document.getElementById('pike');
var seaTacTr = document.getElementById('seatac');
var seaCtrTr = document.getElementById('seaCtr');
var capHillTr = document.getElementById('capHill');
var alkiTr = document.getElementById('alki');


// try this a different way

function ShopStats(name, min, max, avgCookies,list){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.list = list;
  this.stats = [];
  this.tables = '';
  this.render = function(){
  for (var i = 0; i < hours.length; i++){
    var min = this.min;
    var max = this.max;
    console.log('min = ' + min);
    console.log('max = '+ max);
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log ('random is '+random);
    this.customer = random;
    console.log ('this is customer '+this.customer);
    var avgCookies = this.avgCookies;
    console.log('avgCookies = ' + avgCookies);
    var cookiesPerHour = this.customer*avgCookies;
    console.log('this is a cookies per hour sale '+cookiesPerHour);
    this.stats.push(Math.round(cookiesPerHour));
    this.cookiesSold = cookiesPerHour;
    console.log('this is cookies sold per hour '+ this.cookiesSold);
    var tables = document.createElement('td');
    tables.innerHTML = (Math.round(this.stats[i]));
    this.list.appendChild(tables);

}
var sum = this.stats.reduce(function(a, b) { return a + b; }, 0);
var tot = document.createElement('td');
tot.textContent = Math.round(sum);
this.list.appendChild(tot);
console.log('reduce for '+name+'gets '+sum);
console.log('the total cookies per hour array for ' +name+' gets '+this.stats);
}
}

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

// make  a new arrray with all hourly totals

// totals
// var hourTots = [];
// for (var i = 0; i < people.length; i++){
//   hourTots.push()
// }

// playing with tables
var timeRow = document.getElementById('time');

for (var j = 0; j < hours.length; j++){
  var tabDat = document.createElement('th');
  tabDat.innerHTML = hours[j];
  timeRow.appendChild(tabDat);
}
// playing with tables
var totRow = document.getElementById('timeTot');

for (var j = 0; j < hourTots.length; j++){
  var tabDat = document.createElement('th');
  tabDat.innerHTML = hourTots[j];
  totRow.appendChild(tabDat);
}