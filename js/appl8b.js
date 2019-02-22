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
];

var shopList = [];
var allShops = [];

// first tables
var shopTable = document.getElementById('patscookies');
// header row******************
function headerRow() {
  var tabRow = document.createElement('tr');
  
  var tabHead = document.createElement('th');
  tabHead.textContent = 'Location';
  tabRow.appendChild(tabHead);

  for(var i = 0; i < hours.length; i++) {
    tabHead = document.createElement('th');
    tabHead.textContent = hours[i];
    tabRow.appendChild(tabHead);
    
  }
  tabHead = document.createElement('th');
  tabHead.textContent = 'Total';
  tabRow.appendChild(tabHead);
  shopTable.appendChild(tabRow);
}
// lab 8 additions************
var ShopStats=function(name, min, max, avgCookies){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;

}

function ShopStats(name, min, max, avgCookies){
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
    var tabRow = document.createElement('tr');
    var perHour = document.createElement('td');
    perHour.innerHTML = (Math.round(this.stats[i]));
    tabRow.appendChild(perHour);
    // think about appending to table instead of to dom.
  }
  var sum = this.stats.reduce(function(a, b) { return a + b; }, 0);
  this.sums.push(sum);
  var tot = document.createElement('td');
  tot.textContent = Math.round(sum);
  this.list.appendChild(tot);
  console.log('reduce for '+name+'gets '+sum);
  console.log('the total cookies per hour array for ' +name+' gets '+this.stats);

  var shopName = document.createElement('th');
  shopName.textContent = this.name;
  this.list.insertBefore(shopName)

  }
}

// footer row*****************
// function footerRow(){
//   var totRow = document.createElement('timeTot');
//   for (var k = 0; k < hours.length; k++){
//     var sixAM = [];
//     sixAM.push(ShopStats.stats[k]);
//     var sum = sixAM.reduce(function(a, b) { return a + b; }, 0);var tot = document.createElement('td');
//     tot.textContent = Math.round(sum);
//     totRow.appendChild(tot);
//   }
// }

 
  // 8 step3 look at the events
  function handleShopSubmitPlz(event){
    event.preventDefault();
  
    // step 4 give values
    var name = event.target.shopName.value;
    console.log('shop name is '+event.target.shopName.value);
    var min = event.target.minPpl.value;
    var max = event.target.maxPpl.value;
    var avgCookies = event.target.avgCookies.value;

    var newShop = new ShopStats (name, min, max, avgCookies);
  
    // step 6 ref inputs and clear out
    var name = event.target.shopName.value=null;
    var min = event.target.minPpl.value=null;
    var max = event.target.maxPpl.value=null;
    var avgCookies = event.target.avgCookies.value=null;
  
    // step 7 add to table?
  
    allShops.shift(newShop);
    renderShops();
  
  }
  
  // stick it to DOM
  function renderShops(){
    // get rid of existing text
    createShop.innerHTML='';
    // put new entry
    for (var i=0; i<allShops.length; i++){
      createShop.appendChild(allShops[i].render());
    }
  
  }
  
  //8 Step2 add event listener
  
  createShop.addEventListener('submit',handleShopSubmitPlz);
// grand total use this method to creat dyanmic list of shops

// var allTots=[];
// allTots.push(pike.sums, seaTac.sums, seaCtr.sums, capHill.sums, alki.sums);

// console.log('parseint'+allTots);
// var sums = parseInt(allTots[0])+parseInt(allTots[1])+parseInt(allTots[2])+parseInt(allTots[3])+parseInt(allTots[4]);

// console.log(sums);

// var grandTotal = document.createElement('td');
// grandTotal.textContent = sums;
// totRow.appendChild(grandTotal);

headerRow();