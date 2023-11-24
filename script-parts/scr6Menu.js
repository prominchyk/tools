let links = document.querySelectorAll('#menu a');
let tabs = document.querySelectorAll('.tab');
for(let link of links) {
 link.addEventListener('click', function() {
   for(let i = 0; i < links.length; i++) {
     if(links[i].classList.contains('active')) {
       links[i].classList.remove('active');
     }
   }
   for(let j = 0; j < tabs.length; j++) {
     if(tabs[j].classList.contains('active')) {
       tabs[j].classList.remove('active');
     }
   }
   this.classList.add('active');
   let self = this;
   for(let tab of tabs) {
     if(tab.dataset.elem == self.id) {
       tab.classList.add('active');
     }
   }
   })
}