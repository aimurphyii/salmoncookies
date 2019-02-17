'use strict'
var hours = [
  '6AM',
  '7AM',
  '8AM',
  '9AM',
  '10AM',
  '11AM',
  '12PM',
  '1PM',
  '2PM',
  '3PM',
  '4PM',
  '5PM',
  '6PM',
  '7PM',
  '8PM',
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

}
console.log('the total cookies per hour array for ' +name+' is '+this.stats);
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




// playing with tables
var timeRow = document.getElementById('time');
// for (var i = 0; i < hours.length; i++){
//   shopHours.push(
//   '<th>' + hours[i] +'</th>'
//  )
// }
// console.log('hours', shopHours);

for (var j = 0; j < hours.length; j++){
  var tabDat = document.createElement('th');
  tabDat.innerHTML = hours[j];
  timeRow.appendChild(tabDat);
}

// for pike
for (var i = 0; i < hours.length; i++){
  var tables = document.createElement('td');
tables.innerHTML = (Math.round(pike.stats[i]));
pikeTr.appendChild(tables);
}

// for seatac
for (var i = 0; i < hours.length; i++){
  var tables = document.createElement('td');
  tables.innerHTML = (Math.round(seaTac.stats[i]));
  seaTacTr.appendChild(tables);
  }

// for Seattle Center
for (var i = 0; i < hours.length; i++){
  var tables2 = document.createElement('td');
  tables2.innerHTML = (Math.round(seaCtr.stats[i]));
  seaCtrTr.appendChild(tables2);
  }
// for Cap Hill

for (var i = 0; i < hours.length; i++){
  var tables = document.createElement('td');
  tables.innerHTML = (Math.round(capHill.stats[i]));
  capHillTr.appendChild(tables);
  }

// for Alki

for (var i = 0; i < hours.length; i++){
  var tables = document.createElement('td');
  tables.innerHTML = (Math.round(alki.stats[i]));
  alkiTr.appendChild(tables);
  }

// var table = document.getElementById('shell');
// var data = [];


// for (var i = 0; i < this.stats.length; i++){
//   data.push(
//   '<td>' + people[i].name + '</td>' + '<td>' + people[i].age + '</td>' + '<td>' + people[i].profession + '</td>'
//  )
// }
// console.log('my data array', data);

// for (var j = 0; j < data.length; j++){
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = data[j];
//   table.appendChild(newRow);
// }

// var pike ={
//   name: '1st and Pike',
//   min: 23,
//   max: 65,
//   avgCookies: 6.3,
//   customer: '',
//   cookiesSold: '',
//   render: function(){
//     for (var i = 0; i < hours.length; i++){
//       var min = this.min;
//       var max = this.max;
//       console.log('min = ' + min);
//       console.log('max = '+ max);
//       var random = Math.floor(Math.random() * (max - min + 1) ) + min;
//       console.log ('random is '+random);
//       this.customer = random;
//       console.log ('this is customer '+this.customer);
//       var avgCookies = this.avgCookies;
//       console.log('avgCookies = ' + avgCookies);
//       var cookiesPerHour = this.customer*avgCookies;
//       console.log('this is a cookies per hour sale '+cookiesPerHour);
//       this.cookiesSold = cookiesPerHour;
//       console.log('this is cookies sold per hour '+ this.cookiesSold);
      
//       var liEl = document.createElement('li');
//       liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
//       pikeUl.appendChild(liEl);
//   }
