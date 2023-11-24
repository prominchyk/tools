//adaptive design
let asideTextMenu = document.querySelector('#asideTextMenu');
let aside = document.querySelector('body aside');
let asideLinks = document.querySelectorAll('aside a');

if(window.matchMedia("(max-width: 900px)").matches) {
  asideTextMenu.addEventListener('click', function() {
    aside.classList.toggle('asideHeight');
    for(let asideLink of asideLinks) {
    asideLink.classList.toggle('asideDisplay');
    }
  })
}