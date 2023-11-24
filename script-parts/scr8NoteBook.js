//noteBook

let texts = [];
let buttonText = document.querySelector('#text button');
let createButton = document.querySelector('#create button');
let textarea = document.querySelector('#text textarea');
let listNotes = document.querySelector('#notes');
let regime = document.querySelector('#regime');
regime.innerHTML = '<b>Режим створення нового запису.</b><br> Введіть в поле запис та натисніть Зберегти.<br> Для редагування натисніть на кнопку потрібного запису.<br> Для видалення запису натисніть Х.';
let arrSpanOpen = [];

let textsJson = localStorage.getItem('textArr');
let textsArr = JSON.parse(textsJson);
let listJson = localStorage.getItem('listArr');
let listArr = JSON.parse(listJson);
let counter = 0;
if(listArr == null) {
  counter = 0;
} else {
  counter = listArr.length;
}

function editing(event) {
  let mode = buttonText.dataset.mode;
  let activeKey;
  let listOpen = document.querySelectorAll('span.open');
  buttonText.dataset.mode = 'update';
  regime.innerHTML = '<b>Режим перегляду та редагування.</b><br> Для збереження змін натисніть Зберегти.<br> Для створення нового запису натисніть Новий запис.<br> Для видалення запису натисніть Х.';
  activeKey = event.target.dataset.key - 1;
  buttonText.dataset.key = event.target.dataset.key - 1;
  textarea.value = texts[activeKey];
  if(texts[activeKey] == undefined) {
    textarea.value = '';
  }
  for(let li of listOpen) {
    li.classList.remove('activeNoteBook');
  }
  if(event.target.tagName === 'SPAN') {
    event.target.classList.add('activeNoteBook');
  }
}

function removing() {
  let listRemove = document.querySelectorAll('span.remove');
  for(let listRemoveItem of listRemove) {
      listRemoveItem.addEventListener('click', function(event) {
        delete texts[event.target.previousElementSibling.dataset.key - 1];
        delete arrSpanOpen[arrSpanOpen.indexOf(Number(event.target.previousElementSibling.dataset.key))];
        event.target.parentElement.remove();
        localStorage.setItem('listArr', JSON.stringify(arrSpanOpen));
      })
  }
}

if(listArr != null) {
  for(let i = 0; i < listArr.length; i++) {
    if(listArr[i] !== null) {
      let li = document.createElement('li');
      let spanOpen = document.createElement('span');
      let spanRemove = document.createElement('span');
      spanOpen.classList.add('open');
      spanRemove.classList.add('remove');
      spanOpen.textContent = 'запис'+listArr[i];
      spanRemove.textContent = 'Х';
      spanOpen.dataset.key = listArr[i];
      listNotes.append(li);
      li.append(spanOpen);
      li.append(spanRemove);
    }
  }
  texts.unshift(...textsArr);
  arrSpanOpen.unshift(...listArr);

  listNotes.addEventListener('click', editing);
  removing();
}

buttonText.addEventListener('click', function() {
  let mode = buttonText.dataset.mode;
  let text = textarea.value;

  if(mode == 'create') {
    let li = document.createElement('li');
    let spanOpen = document.createElement('span');
    let spanRemove = document.createElement('span');
    spanOpen.classList.add('open');
    spanRemove.classList.add('remove');
    counter++;
    spanOpen.textContent = 'запис'+counter;
    spanRemove.textContent = 'Х';
    spanOpen.dataset.key = counter;
    listNotes.append(li);
    li.append(spanOpen);
    li.append(spanRemove);
    arrSpanOpen.push(counter);
    texts.push(text);
    textarea.value = '';
  }

  listNotes.addEventListener('click', editing);
  removing();

  if(mode == 'update') {
    let key  = buttonText.dataset.key;
    texts[key] = text;  
    textarea.value = texts[key];
  }
  try{
    localStorage.setItem('textArr', JSON.stringify(texts));
    localStorage.setItem('listArr', JSON.stringify(arrSpanOpen));
  } catch(error) {
    alert('Пам\'ять записної книжки переповнена! Для збереження нового запису необхідно видалити якийсь із старих.');
  }
})

createButton.addEventListener('click', function() {
  buttonText.dataset.mode = 'create';
  regime.innerHTML = regime.innerHTML = '<b>Режим створення нового запису.</b><br> Введіть в поле запис та натисніть Зберегти.<br> Для редагування натисніть на кнопку потрібного запису.<br> Для видалення запису натисніть Х.';
  textarea.value = '';
  let listOpen = document.querySelectorAll('span.open');
  for(let li of listOpen) {
      li.classList.remove('activeNoteBook');
      li.style.fontWeight = 'normal';
    }
})