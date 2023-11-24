"use strict";
    
function error(elem) {
  if(elem.textContent == 'NaN см' || elem.textContent == 'NaN см²' || elem.textContent == 'NaN, NaN' || elem.textContent == '' || elem.textContent == '-Infinity') {
    elem.textContent = 'Помилка!';
    elem.title = 'Некоректно введені дані.'
  }
}

function errorEmptyValue(elem1, elem2) {
  if(!elem1) {
    elem2.textContent = 'Відсутні дані';
    elem2.title = 'Введіть дані для обрахунку!';
  }
}