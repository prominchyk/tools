  //screen keyboard
  let buttonsScreenKeyboard = document.querySelectorAll('#tableScreenKeyboard td');
  let textAreaScreenKeyboard = document.querySelector('#screenKeyboard textarea');
  let textArr = [];
  let spaceButton = document.querySelector('#space');
  let backspaceButton = document.querySelector('#backspace');
  let capslockButton = document.querySelector('#capslock');
  let resetScreenKeaboard = document.querySelector('#resetScreenKeaboard');
  let screenKeyboardBackColor = document.querySelector('#screenKeyboardBackColor');
  let screenKeyboardFontColor = document.querySelector('#screenKeyboardFontColor');

  screenKeyboardBackColor.addEventListener('change', function() {
   textAreaScreenKeyboard.style.backgroundColor = this.value;
  })

  screenKeyboardFontColor.addEventListener('change', function() {
   textAreaScreenKeyboard.style.color = this.value;
  })

  for(let buttonScreenKeyboard of buttonsScreenKeyboard) {
   buttonScreenKeyboard.addEventListener('click', function(event) {
     textAreaScreenKeyboard.focus();
     if(event.target == spaceButton) {
       textArr.splice(textAreaScreenKeyboard.selectionStart, 0, ' ');
     }
     else if(event.target.textContent == 'Enter') {
       textArr.splice(textAreaScreenKeyboard.selectionStart, 0, '\n');
     }
     else if(event.target == backspaceButton) {
       //textArr.splice(textAreaScreenKeyboard.selectionStart - 1, 1);
       if(textAreaScreenKeyboard.selectionStart != textAreaScreenKeyboard.selectionEnd) {
       textArr.splice(textAreaScreenKeyboard.selectionStart, textAreaScreenKeyboard.selectionEnd - textAreaScreenKeyboard.selectionStart);
      } else {
         textArr.splice(textAreaScreenKeyboard.selectionStart - 1, 1);
       }
     }
     else if(event.target == capslockButton) {
       textArr.push('');
     }
     else {
       if(capslockButton.classList.contains('capslockActive')) {
         textArr.splice(textAreaScreenKeyboard.selectionStart, 0, event.target.textContent);
       } else {
         textArr.splice(textAreaScreenKeyboard.selectionStart, 0, event.target.textContent.toLowerCase());
       }
     }
     textAreaScreenKeyboard.value = textArr.join('');
   })
  }
  resetScreenKeaboard.addEventListener('click', function() {
     textArr = [];
     textAreaScreenKeyboard.style.backgroundColor = '#FFFFFF';
     textAreaScreenKeyboard.style.color = '#000000';
  })
 
  capslockButton.addEventListener('click', function() {
   capslockButton.classList.toggle('capslockActive');
  })

 textAreaScreenKeyboard.addEventListener('keydown', function(event) {
   if(event.key == 'Backspace') {
     if(textAreaScreenKeyboard.selectionStart != textAreaScreenKeyboard.selectionEnd) {
       textArr.splice(textAreaScreenKeyboard.selectionStart, textAreaScreenKeyboard.selectionEnd - textAreaScreenKeyboard.selectionStart);
       } else {
         textArr.splice(textAreaScreenKeyboard.selectionStart - 1, 1);
       }
   }
 })

 textAreaScreenKeyboard.addEventListener('keypress', function(event) {
  if(event.key == 'Enter') {
    textArr.splice(textAreaScreenKeyboard.selectionStart, 0, '\n');
  }
  else {
  textArr.splice(textAreaScreenKeyboard.selectionStart, 0, event.key);
  }
})

textAreaScreenKeyboard.addEventListener('paste', function(event) {
  event.preventDefault();
  window.navigator.clipboard.readText().then(function(text) {
    if(text) {
      textArr.splice(textAreaScreenKeyboard.selectionStart, 0, ...text);
      textAreaScreenKeyboard.value = textArr.join('');
    }
  })
})