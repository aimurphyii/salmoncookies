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
  'TOTAL',
];

var pikeUl = document.getElementById('pike');

var seatacUl = document.getElementById('seatac');

var seaCtrUL = document.getElementById('seaCtr');

var capHillUl = document.getElementById('capHill');

var alkiUl = document.getElementById('alki');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
function multiply (a, b){
  return a*b;
};

var pike ={
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  customer: 0,
  cookiesSold: 0,
}

pike.customer = getRndInteger(pike.min, pike.max);

pike.cookiesSold = multiply(pike.avgCookies,pike.customer);
console.log(pike);


  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`;

    pikeUl.appendChild(liEl);
  };

var seatac ={
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  avgCookies: 1.2,

  cookiesSold: 
  function getRandomInt(min,max){
    min = Math.ceil(3);
    max = Math.floor(24);
    return Math.floor(Math.random()*(max-min))+min;
  }
  ,
  render:function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`;

      seatacUl.appendChild(liEl);
    }

  }
}

var seaCtr ={
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  avgCookies: 3.7,

  cookiesSold: 
  function getRandomInt(min,max){
    min = Math.ceil(11);
    max = Math.floor(38);
    return Math.floor(Math.random()*(max-min))+min;
  }
  ,
  render:function(){
    for (var i = 0; i < hours.length; i++){
      var liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}: ${this.cookiesSold[i]} cookies`;

      seaCtrUL.appendChild(liEl);
    }

  }
}

render();
seatac.render();
seaCtr.render();