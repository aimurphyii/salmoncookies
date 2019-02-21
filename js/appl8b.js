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

// first tables
var shopTable = document.getElementById('patscookies');

function makeHeaderRow() {
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
