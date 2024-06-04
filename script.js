// var pBtm = document.querySelector('.pbtm');
// var timer = 60;
// var score = -10;
// var hitrn = 0;

// function increaseScore() {

//     score += 10;
//     document.querySelector("#scoreval").textContent = score;

// }

// function getNewHit() {

//     hitrn = Math.floor(Math.random() * 10);
//     document.querySelector('#hitval').textContent = hitrn;

// }

// function makeBubble() {

//     var pBtm = document.querySelector('.pbtm');
//     var clutter = "";

//     for (var i = 1; i <= 96; i++) {
//         var randomNumber = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${randomNumber}</div>`;
//     }

//     pBtm.innerHTML = clutter;

// }

// function runTimer() {

//     var timerInterval = setInterval(() => {
//         if (timer > 0) {
//             timer--;
//             document.querySelector('#timeval').textContent = timer;
//         } else {
//             clearInterval(timerInterval);
//             document.querySelector('.pbtm').innerHTML = "<h1>Game Over</h1>"
//         }
//     }, 1000);

// }

// pBtm.addEventListener('click', function(dets) {
    
//     var clickedNum = Number(dets.target.textContent);
//     if (clickedNum === hitrn) {
//         increaseScore();
//         makeBubble();
//         getNewHit();
//     }

// });

// runTimer();
// makeBubble();
// getNewHit();
// increaseScore();







































var timer = 60;
var hitrn = 0;
var score = -10;


function makeBubble() {

    var pBtm = document.querySelector(".pbtm");
    var clutter = "";

    for (var i = 1; i <= 96; i++) {
        var randomNumber = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${randomNumber}</div>`;
    }

    pBtm.innerHTML = clutter;

}


function runTimer() {

    var timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector('.pbtm').innerHTML = "<h2>Game Over</h2>"
        }
    }, 1000);

}


function getNewHit() {

    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;

}


function increaseScore() {

    score += 10; 
    document.querySelector("#scoreval").textContent = score;

}


var pBtm = document.querySelector('.pbtm');
pBtm.addEventListener("click", function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});


getNewHit();
runTimer();
makeBubble();
increaseScore();