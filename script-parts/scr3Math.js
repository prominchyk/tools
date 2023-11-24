//quadrEquation
let inputCoef1 = document.querySelector('#coef1');
let inputCoef2 = document.querySelector('#coef2');
let inputCoef3 = document.querySelector('#coef3');
let resQuadrEquation = document.querySelector('#resQuadrEquation');
let buttonQuadrEquation = document.querySelector('#buttonQuadrEquation');

buttonQuadrEquation.addEventListener('click', function() {
  let coef1 = Number(inputCoef1.value);
  let coef2 = Number(inputCoef2.value);
  let coef3 = Number(inputCoef3.value);
  let d = coef2 ** 2 - 4 * coef1 * coef3;
  let qrt1 = (-coef2 + Math.sqrt(d)) / (2 * coef1);
  let qrt2 = (-coef2 - Math.sqrt(d)) / (2 * coef1);
  if(d < 0) {
    resQuadrEquation.textContent = `Дійсних коренів немає`;
  } else {
  resQuadrEquation.textContent = qrt1 + ', ' + qrt2;
  }
  resQuadrEquation.title = '';
  error(resQuadrEquation);
  errorEmptyValue(coef1, resQuadrEquation);
  errorEmptyValue(coef2, resQuadrEquation);
  errorEmptyValue(coef3, resQuadrEquation)
})

//numberDivisors

let inputNumber = document.querySelector('#numberDiv');
let buttonNumberDivisors = document.querySelector('#buttonNumberDivisors');
let resNumberDivisors = document.querySelector('#resNumberDivisors');

buttonNumberDivisors.addEventListener('click', function() {
  let num = inputNumber.value;
  let arr = [];
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
      arr.push(i);
    }
  }
  let resString = arr.join(', ');
  resNumberDivisors.textContent = resString;
  resNumberDivisors.title = '';
  error(resNumberDivisors);
  errorEmptyValue(num, resNumberDivisors);
})

//sharedDivisorsOfTwoNumbers

let inputNumber1 = document.querySelector('#number1');
let inputNumber2 = document.querySelector('#number2');
let buttonSharedDivisorsOfTwoNumbers = document.querySelector('#buttonSharedDivisorsOfTwoNumbers');
let resSharedDivisorsOfTwoNumbers = document.querySelector('#resSharedDivisorsOfTwoNumbers');
let buttonMaxSharedDivisor = document.querySelector('#buttonMaxSharedDivisor');
let resMaxSharedDivisor = document.querySelector('#resMaxSharedDivisor');

function getDivisors() {
  let num1 = Number(inputNumber1.value);
  let num2 = Number(inputNumber2.value);
  let arr1 = [];
  let arr2 = [];
  let arrRes = [];
  for(let i = 1; i <= num1; i++) {
    if(num1 % i === 0) {
      arr1.push(i);
    }
  }
  for(let i = 1; i <= num2; i++) {
    if(num2 % i === 0) {
      arr2.push(i);
    }
  }
  for(let elem1 of arr1) {
    for (let elem2 of arr2) {
      if(elem2 === elem1) {
        arrRes.push(elem2);
      }
    }
  }
  return arrRes;
};



function getMaxSharedDivisors() {
  let arr = getDivisors();
  resMaxSharedDivisor.textContent = Math.max(...arr);
  resMaxSharedDivisor.title = '';
  error(resMaxSharedDivisor);
  errorEmptyValue(inputNumber1.value, resMaxSharedDivisor);
  errorEmptyValue(inputNumber2.value, resMaxSharedDivisor);
}

function getSharedDivisors() {
  let arr = getDivisors();
  let resString = arr.join(', ');
  console.log(resString);
  resSharedDivisorsOfTwoNumbers.textContent = resString;
  resSharedDivisorsOfTwoNumbers.title = '';
  error(resSharedDivisorsOfTwoNumbers);
  errorEmptyValue(inputNumber1.value, resSharedDivisorsOfTwoNumbers);
  errorEmptyValue(inputNumber2.value, resSharedDivisorsOfTwoNumbers);
}
  
buttonMaxSharedDivisor.addEventListener('click', function() {
  getMaxSharedDivisors();
})

buttonSharedDivisorsOfTwoNumbers.addEventListener('click', function() {
  getSharedDivisors();
})