//text analys
    
let textArea = document.querySelector('textarea');
let resWordsNumber = document.querySelector('#resWordsNumber');
let resSymbolsNumber = document.querySelector('#resSymbolsNumber');
let resSymbolsWithoutSpace = document.querySelector('#resSymbolsWithoutSpace');
let resPercent = document.querySelector('#resPercent');
let checkboxWordsNumber = document.querySelector('#checkboxWordsNumber');
let checkboxSymbNumber = document.querySelector('#checkboxSymbNumber');
let checkboxSymbWithoutSpace = document.querySelector('#checkboxSymbWithoutSpace');
let checkboxPercent = document.querySelector('#checkboxPercent');
let reset = document.querySelector('#reset');

function textAnalysWords() {
    let textValue = textArea.value;
    let arrText = textValue.split(' ');
    let counter = 0;
    let counter3 = 0;
    let counter4 = 0;
    for(let elem of arrText) {
          if(elem === '' || elem === '-' || elem === ';' || elem === ':' || elem === ',' || elem === '.' || elem === '!' || elem === '?' || elem === '/') {
            counter--;
          }
          if(elem.includes('\n')) {
            counter3++;
            let arrWordN = elem.split('\n');
            for(let i = 0; i < arrWordN.length; i++) {
              if(arrWordN[i] !== '') {
                counter4++;
                }
            }
            if(arrWordN[0].endsWith('-') === true && arrWordN[1] !== '') {
                counter4--;
                }
          }
          }
    resWordsNumber.textContent = ` ${arrText.length + counter - counter3 + counter4}.`;
}

function textAnalysSymbols() {
  let textValue = textArea.value;
  let arrSymbols = textValue.split('');
  let counter2 = 0;
  for(let i = 0; i < arrSymbols.length; i++) {
    if((arrSymbols[i] === ' ' && arrSymbols[i + 1] === ' ') || (arrSymbols[i] === ' ' && arrSymbols[i + 1] === '\n') || (arrSymbols[i] === '\n' && arrSymbols[i + 1] === ' ') || (arrSymbols[i] !== ' ' && arrSymbols[i + 1] === '-' && arrSymbols[i + 2] === '\n' && arrSymbols[i + 3] !== ' ')) {
            counter2--;
      }
    }
    if(arrSymbols[0] === ' ') {
      counter2--;
    }
  resSymbolsNumber.textContent = ` ${arrSymbols.length + counter2}.`;
}

function textAnalysSymbolsWithoutSpaces() {
  let textValue = textArea.value;
  let arrSymbols = textValue.split('');
  let counter5 = 0;
  for(let elem of arrSymbols) {
          if(elem === ' ' || elem === '\n') {
            counter5--;
          }
    }
  resSymbolsWithoutSpace.textContent = ` ${arrSymbols.length + counter5}.`;
}

function percentSymbol() {
  let textValue = textArea.value;
  let arrSymbols = textValue.split('');
  let arrPercent = [];
  for(let elem of arrSymbols) {
    if(elem !== ' ' && elem !== '\n') {
            arrPercent.push(elem);
          }
        }
let arrPercentLowerCase = arrPercent.join('').toLowerCase().split('');
  
let objPercent = {};
for(let elem of arrPercentLowerCase) {
  if(objPercent[elem] === undefined) {
    objPercent[elem] = 1;
  } else {
    objPercent[elem]++;
   } 
}
        
for(let key in objPercent) {
  let table = document.createElement('table');
  let tr = document.createElement('tr');
  let tdKey = document.createElement('td');
  tdKey.textContent = key;
  tdKey.classList.add('colored2');
  tr.append(tdKey);
  let tdValue = document.createElement('td');
  tdValue.textContent = Math.round(objPercent[key] / arrPercentLowerCase.length * 100) + ' %';
  tdValue.classList.add('colored');
  tr.append(tdValue);
  resPercent.append(table);
  table.append(tr);
}
}

checkboxWordsNumber.addEventListener('click', function() {
  if(checkboxWordsNumber.checked) {
    textAnalysWords();
  } else {
    resWordsNumber.textContent = '';
  }
})

checkboxSymbNumber.addEventListener('click', function() {
  if(checkboxSymbNumber.checked) {
    textAnalysSymbols();
  } else {
    resSymbolsNumber.textContent = '';
  }
})

checkboxSymbWithoutSpace.addEventListener('click', function() {
  if(checkboxSymbWithoutSpace.checked) {
    textAnalysSymbolsWithoutSpaces();
  } else {
    resSymbolsWithoutSpace.textContent = '';
  }
})

checkboxPercent.addEventListener('click', function() {
  if(checkboxPercent.checked) {
    percentSymbol();
  } else {
    resPercent.textContent = '';
  }
})

reset.addEventListener('click', function() {
  resPercent.textContent = '';
  resSymbolsNumber.textContent = '';
  resSymbolsWithoutSpace.textContent = '';
  resWordsNumber.textContent = '';
}
)