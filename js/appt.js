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
  this.sums = [];
  this.render = function(){
  for (var i = 0; i < hours.length-1; i++){
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
this.sums.push(sum);
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

// time header
var timeRow = document.getElementById('time');

for (var j = 0; j < hours.length; j++){
  var tabDat = document.createElement('th');
  tabDat.innerHTML = hours[j];
  timeRow.appendChild(tabDat);
};

// hourly totals
var totRow = document.getElementById('timeTot');

for (var k = 0; k < hours.length-1; k++){
  var sixAM = [];
  sixAM.push(pike.stats[k], seaTac.stats[k], seaCtr.stats[k], capHill.stats[k],alki.stats[k]);
  var sum = sixAM.reduce(function(a, b) { return a + b; }, 0);var tot = document.createElement('td');
  tot.textContent = Math.round(sum);
  totRow.appendChild(tot);
};
console.log(pike.sums);
console.log('6am gets ' +sixAM+' and the sum is '+sum);

// grand total

var allTots=[];
allTots.push(pike.sums, seaTac.sums, seaCtr.sums, capHill.sums, alki.sums);

console.log('parseint'+allTots);
var sums = parseInt(allTots[0])+parseInt(allTots[1])+parseInt(allTots[2])+parseInt(allTots[3])+parseInt(allTots[4]);

console.log(sums);

var grandTotal = document.createElement('td');
grandTotal.textContent = sums;
totRow.appendChild(grandTotal);
