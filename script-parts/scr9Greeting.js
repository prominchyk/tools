let greeting = document.querySelector('#greeting');

let now = new Date();
let hourNow = now.getHours(); 

function writeGreeting(hour) {
    if(hour >= 0 && hour < 6) {
        greeting.textContent = 'Спокійної ночі!';
    }
    if(hour >= 6 && hour < 12) {
        greeting.textContent = 'Приємного ранку!';
    }
    if(hour >= 12 && hour < 18) {
        greeting.textContent = 'Вдалого дня!';
    }
    if(hour >= 18 && hour <= 23) {
            greeting.textContent = 'Затишного вечора!';
    }
}
writeGreeting(hourNow);



setInterval(function() {
    let checkNow = new Date();
    let checkHourNow = checkNow.getHours();
    writeGreeting(checkHourNow);
    console.log(checkHourNow);
}, 1800000)