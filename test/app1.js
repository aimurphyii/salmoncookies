'use strict'
console.log('script loaded');
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

var pikeUl = document.getElementById('pike');

var seaTacUl = document.getElementById('seatac');

var seaCtrUl = document.getElementById('seaCtr');

var capHillUl = document.getElementById('capHill');

var alkiUl = document.getElementById('alki');


var pike ={
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  customer: '',
  cookiesSold: '',
  stats:[],
  render: function(){
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
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      pikeUl.appendChild(liEl);
  }
  var sum = this.stats.reduce(function(a, b) { return a + b; }, 0);
  console.log('reduce gets '+sum);
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(sum)} cookies`;
  pikeUl.appendChild(tot);

  console.log('the total cookies per hour array for ' +name+' is '+this.stats);
},
}
// console.log('this is pike.customer '+pike.customer);
// console.log('this is pike.cookiesSold'+pike.cookiesSold);

var seaTac ={
  name:'SeaTac Airport',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  customer: '',
  cookiesSold: '',
  stats:[],
  render: function(){
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
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      seaTacUl.appendChild(liEl);
  }
  var sum = this.stats.reduce(function(a, b) { return a + b; }, 0);
  console.log('seatac reduce gets '+sum);
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(sum)} cookies`;
  seaTacUl.appendChild(tot);

  console.log('the total cookies per hour array for ' +name+' is '+this.stats);
},
}

var seaCtr ={
  name: 'Seattle Center',
  min: 1,
  max: 38,
  avgCookies: 3.7,
  customer: '',
  cookiesSold: '',
  stats:[],
  render: function(){
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
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      seaCtrUl.appendChild(liEl);
  }
  var sum = this.stats.reduce(function(a, b) { return a + b; }, 0);
  console.log('sea ctr reduce gets '+sum);
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(sum)} cookies`; seaCtrUl.appendChild(tot);
},
}


var capHill ={
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  customer: '',
  cookiesSold: '',
  stats:[],
  render: function(){
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
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      capHillUl.appendChild(liEl);
  }
  var sum = this.stats.reduce(function(a, b) { return a + b; }, 0);
  console.log('cap hill reduce gets '+sum);
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(sum)} cookies`;
  capHillUl.appendChild(tot);
},
}

var alki ={
  name: 'Alki Beach',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  customer: '',
  cookiesSold: '',
  stats:[],
  render: function(){
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
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      alkiUl.appendChild(liEl);
  }
  var sum =this.stats.reduce(function(a,b){return a+b;},0);
  console.log('alki reduce gets '+ sum)
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(sum)} cookies`;
  alkiUl.appendChild(tot);
},
}
pike.render();
seaTac.render();
seaCtr.render();
capHill.render();
alki.render();
