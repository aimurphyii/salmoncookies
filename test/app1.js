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
      this.cookiesSold = cookiesPerHour;
      console.log('this is cookies sold per hour '+ this.cookiesSold);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      pikeUl.appendChild(liEl);
  }
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
      this.cookiesSold = cookiesPerHour;
      console.log('this is cookies sold per hour '+ this.cookiesSold);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      seaTacUl.appendChild(liEl);
  }
},
}


var seaCtr ={
  name: 'Seattle Center',
  min: 1,
  max: 38,
  avgCookies: 3.7,
  customer: '',
  cookiesSold: '',
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
      this.cookiesSold = cookiesPerHour;
      console.log('this is cookies sold per hour '+ this.cookiesSold);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      seaCtrUl.appendChild(liEl);
  }
},
}


var capHill ={
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  customer: '',
  cookiesSold: '',
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
      this.cookiesSold = cookiesPerHour;
      console.log('this is cookies sold per hour '+ this.cookiesSold);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      capHillUl.appendChild(liEl);
  }
},
}

var alki ={
  name: 'Alki Beach',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  customer: '',
  cookiesSold: '',
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
      this.cookiesSold = cookiesPerHour;
      console.log('this is cookies sold per hour '+ this.cookiesSold);
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${Math.round(this.cookiesSold)} cookies`;
      alkiUl.appendChild(liEl);
  }
},
}
pike.render();
seaTac.render();
seaCtr.render();
capHill.render();
alki.render();