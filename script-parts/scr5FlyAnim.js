   //fly
   let fly = document.querySelector('#fly');
   let paraFly = document.querySelector('#paraFly');

   
   function start() {
     let random1 = Math.floor(Math.random() * 900);
     let random2 = Math.floor(Math.random() * 500);
     setTimeout(function() {
      fly.style.top = random2 + 'px';
      fly.style.right = random1 + 'px';
     }, 200)
     paraFly.textContent = '';
     
   }

   function finish() {
     setTimeout( function() {
      fly.style.top = '35px';
      fly.style.right = '35px';
   }, 400)
     alert('Ви дуже спритні!');
     paraFly.textContent = 'Спробуйте спіймати';
       }

   fly.addEventListener('mouseover', start);
   fly.addEventListener('click', finish);