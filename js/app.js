// List of cards
var deck = document.querySelector('.deck');
var cards = ['fa-diamond', 'fa-diamond',
    'fa-paper-plane-o', 'fa-paper-plane-o',
    'fa-anchor', 'fa-anchor',
    'fa-bolt', 'fa-bolt',
    'fa-cube', 'fa-cube',
    'fa-leaf', 'fa-leaf',
    'fa-bicycle', 'fa-bicycle',
    'fa-bomb', 'fa-bomb',
];


// STAR RATING [REFACTORING NEEDED!!!!]
var moves = 0;
function moveCounter() {
    moves++;
    var movesValue = document.querySelector('#moves');
    movesValue.innerHTML = moves;
    if (moves == 2) {
        removeStar();
    } else if (moves == 4) {
        removeStar1();
    } else if (moves == 6) {
        removeStar2();
    }
}

function removeStar() {
    var starsList = document.querySelectorAll('.stars li');
    starsList[0].style.display = 'none';
}
function removeStar1() {
    var starsList = document.querySelectorAll('.stars li');
    starsList[1].style.display = 'none';
}
function removeStar2() {
    var starsList = document.querySelectorAll('.stars li');
    starsList[2].style.display = 'none';
}



var timerButton = document.getElementById('timerButton');
timerButton.addEventListener('click', function (event) {
    // timerButton.innerHTML = 'RAWR';
    // clearInterval(timer);
})

var clickToStart =  document.querySelector('.deck');

clickToStart.addEventListener("click", function() {
    var sec = 0;
    var intro = document.getElementById('intro');
    intro.innerHTML = 'Game has begun!';
    timerButton.innerHTML = 'Pause';
    function pad(val) {
        return val > 9 ? val : "0" + val;
    }
    var timer = setInterval(function () {
        document.getElementById("seconds").innerHTML = pad(++sec % 60);
        document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    }, 1000);

}, {once : true});

//clearInterval(timer);


// var time = 0;
// var myInterval = -1;
// var timerButton = document.getElementById('timerButton');
// var timer = document.getElementById('timer');

// timerButton.addEventListener('click', function (event) {
//     //if paused, start
//     if (myInterval == -1) {
//         timerButton.innerHTML = 'Pause';
//         myInterval = setInterval(function () {
//             time++;

//             var hour = Math.floor(time/3600);
//             if (hour < 10) hour = '0' + hour;
//             var min = Math.floor((time - hour*3600)/60);
//             if (min < 0) min = '0' + min;
//             var sec = time - (hour*3600 + min*60);
//             if (sec < 10) sec = '0' + sec;

//             // if (sec == 59) {
//             //     if (min == 59) {
//             //         hour++;
//             //         min = 0;
//             //         if (hour < 10) hour = '0' + hour;

//             //     } else {
//             //         min++;
//             //     } if (min < 0) min = '0' + min;
//             //     sec = 0;
//             //     if (sec < 10) sec = '0' + sec;

//             //     // document.getElementById('timer').innerHTML = hour + ':' + min + ':' + sec;

//             // } 
//             timeFormatted = hour + ':' + min + ':' + sec;
//             timer.innerHTML = timeFormatted
//         }, 1000);
//     } else {
//         timerButton.innerHTML = 'Resume';
//         clearInterval(myInterval);
//         myInterval = -1;
//     }
// });



//TODO FORMAT TIMER
// function counter() {
//     time++;
//     myInterval++;
//     var hours = Math.floor(time/3600);
//     var minutes = Math.floor((time - hours*3600)/60);
//     var seconds = time - (hours*3600 + minutes*60);
//     document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
// }
// var pause = document.getElementById('pause');
// pause.onclick = function () {
//     clearInterval(timer);
// }

// MODAL
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//CREATE DECK OF CARDS
function createCard(card) {
    return `<li class="card" data-icon="fa-${card}">
    <i class="fa ${card}"></i>`;
}
function startGame() {
    var dynamicCard = shuffle(cards).map(function (card) {
        return createCard(card);
    });
    deck.innerHTML = dynamicCard.join('');
}
startGame();

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

var cardCounter = [];
var matchCounter = [];

document.addEventListener("DOMContentLoaded", function (event) {
});
//rename cards as already delcared in array above?
var cards = document.querySelectorAll('.card');

cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
        if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {

            cardCounter.push(card);
            card.classList.add('open', 'show');
           
            

            if (cardCounter[0].dataset.icon === cardCounter[1].dataset.icon) {
                cardCounter[0].classList.add('match');
                cardCounter[1].classList.add('match');
                matchCounter++;
                if (matchCounter == 8) {
                    modal.style.display = "block";
                    
                }
            }
            //if cards do not match, hide them
            if (cardCounter.length == 2) {
                moveCounter();
                setTimeout(function () {



                    cards.forEach(function (card) {
                        card.classList.remove('open', 'show');
                    })
                }, 1000);
                cardCounter = [];
            }
        }
    });
});

