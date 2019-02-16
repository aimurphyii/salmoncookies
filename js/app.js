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

var pikeUl = document.getElementById('pike');

var seatacUl = document.getElementById('seatac');

var centerUl = document.getElementById('seaCtr');

var capHillUl = document.getElementById('capHill');

var alkiUl = document.getElementById('alki');


function numPpl (min,max){
  return Math.floor(Math.random() * (max - min + 1) ) + min};


// THIS IS JUST PIKE

function pikepplAllDay(){
  var customers=[]
    for (var i = 0; i < hours.length; i++) {
    customers.push(numPpl(23,65));
  }return customers;
};
function pikecookiesAllDay(){
  var customers=pikepplAllDay();
  var cookies=[]
    for (var i=0; i<hours.length; i++) {
    cookies.push(customers[i]*=6.3);
    }
  return cookies;
  };

var pike ={
  name: '1st and Pike',
  min: 23,
  max: 65,
  avgCookies: 6.3,
  customers: pikepplAllDay(),
  cookies: pikecookiesAllDay(),
};

function renderPike(){
  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${Math.round(pike.cookies[i])} cookies`;
    pikeUl.appendChild(liEl);}
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(arrSum(pike.cookies))} cookies`;
  pikeUl.appendChild(tot);
  }

console.log(pike.customers);
console.log(pike.cookies);




// now JUST SeaTac
function seatacpplAllDay(){
  var customers=[]
    for (var i = 0; i < hours.length; i++) {
    customers.push(numPpl(3,24));
  }return customers;
};
function seataccookiesAllDay(){
  var customers=seatacpplAllDay();
  var cookies=[]
    for (var i=0; i<hours.length; i++) {
    cookies.push(customers[i]*=1.2);
    }
  return cookies;
};

var seatac ={
  name: 'SeaTac',
  min: 3,
  max: 24,
  avgCookies: 1.2,
  customers: seatacpplAllDay(),
  cookies: seataccookiesAllDay(),
};

function renderSeatac(){
  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${Math.round(seatac.cookies[i])} cookies`;
    seatacUl.appendChild(liEl);}

  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(arrSum(seatac.cookies))} cookies`;
  seatacUl.appendChild(tot);
};

console.log(seatac.customers);
console.log(seatac.cookies);



// SEATTLE CENTER... YOUR TURN :(

function seactrpplAllDay(){
  var customers=[]
    for (var i = 0; i < hours.length; i++) {
    customers.push(numPpl(11,38));
  }return customers;
};
function seactrcookiesAllDay(){
  var customers=seactrpplAllDay();
  var cookies=[]
    for (var i=0; i<hours.length; i++) {
    cookies.push(customers[i]*=3.7);
    }
  return cookies;
};

var seaCtr ={
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookies: 3.7,
  customers: seactrpplAllDay(),
  cookies: seactrcookiesAllDay(),
};

function renderSeaCtr(){
  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${Math.round(seaCtr.cookies[i])} cookies`;
    centerUl.appendChild(liEl);}

  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(arrSum(seaCtr.cookies))} cookies`;
  centerUl.appendChild(tot);
};

console.log(seaCtr.customers);
console.log(seaCtr.cookies);


// Cap Hill


function capHillpplAllDay(){
  var customers=[]
    for (var i = 0; i < hours.length; i++) {
    customers.push(numPpl(11,38));
  }return customers;
};
function capHillcookiesAllDay(){
  var customers=capHillpplAllDay();
  var cookies=[]
    for (var i=0; i<hours.length; i++) {
    cookies.push(customers[i]*=3.7);
    }
  return cookies;
};

var capHill ={
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookies: 2.3,
  customers: capHillpplAllDay(),
  cookies: capHillcookiesAllDay(),
};

function renderCapHill(){
  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${Math.round(capHill.cookies[i])} cookies`;
    capHillUl.appendChild(liEl);}

  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(arrSum(capHill.cookies))} cookies`;
  capHillUl.appendChild(tot);
};

console.log(capHill.customers);
console.log(capHill.cookies);

// Alki


function alkipplAllDay(){
  var customers=[]
    for (var i = 0; i < hours.length; i++) {
    customers.push(numPpl(11,38));
  }return customers;
};
function alkicookiesAllDay(){
  var customers=alkipplAllDay();
  var cookies=[]
    for (var i=0; i<hours.length; i++) {
    cookies.push(customers[i]*=3.7);
    }
  return cookies;
};

var alki ={
  name: 'Alki Beach',
  min: 2,
  max: 16,
  avgCookies: 4.6,
  customers: alkipplAllDay(),
  cookies: alkicookiesAllDay(),
};

function renderAlki(){
  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = `${hours[i]}: ${Math.round(alki.cookies[i])} cookies`;
    alkiUl.appendChild(liEl);}

  const arrSum = arr => arr.reduce((a,b) => a + b, 0)
  var tot = document.createElement('li');
  tot.textContent = `Total: ${Math.round(arrSum(alki.cookies))} cookies`;
  alkiUl.appendChild(tot);
};

console.log(alki.customers);
console.log(alki.cookies);

// showup in html
renderPike();
renderSeatac();
renderSeaCtr();
renderCapHill();
renderAlki();