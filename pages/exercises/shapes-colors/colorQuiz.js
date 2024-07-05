
//Picking colors Quiz code

//Elements
const gameDisplay = document.getElementById('game-wrapper')
const prgssbar = document.getElementById('prgBar');
const question = document.getElementById('question');
const firstCard = document.getElementById('cardOne');
const secondCard = document.getElementById('cardTwo');


//Card blueprint
class Card {
    constructor(color, img) {
        this.color = color;
        this.img = img;
    }

    color() {
        return this.color;
    }

    img() {
        return this.img;
    }
}


//Colors images of cars
const blue = new Image();
blue.src = '../../assets/auto-1/blauw-auto.png';
const black =  new Image();
black.src = '../../assets/auto-1/zwart-auto.png';
const orange = new Image();
orange.src = '../../assets/auto-1/oranje-auto.png';
const yellow = new Image();
yellow.src = '../../assets/auto-1/geel-auto.png';
const purple = new Image();
purple.src = '../../assets/auto-1/paars-auto.png';
const green = new Image();
green.src = '../../assets/auto-1/groen-auto.png';
const red = new Image();
red.src = '../../assets/auto-1/rood-auto.png';
const brown = new Image();
brown.src = '../../assets/auto-1/bruin-auto.png';
const grey = new Image();
grey.src = '../../assets/auto-1/grijs-auto.png';
const white = new Image();
white.src = '../../assets/auto-1/wit-auto.png';

//Mak
const blueCar = new Card('blue', blue);
const blackCar = new Card('black', black);
const orangeCar = new Card('orange', orange);
const yellowCar = new Card('yellow', yellow);
const purpleCar = new Card('purple', purple);
const greenCar = new Card('green', green);
const redCar = new Card('red', red);
const brownCar = new Card('brown', brown);
const greyCar = new Card('grey', grey);
const whiteCar = new Card('white', white);

//Questions

const questions = [
    {
        id: 0,
        question: 'Druk op de blauwe auto.',
        options: [blueCar, greenCar],
        correct: 'blue'
    },
    {
        id: 1,
        question: 'Druk op de rode auto.',
        options: [redCar, yellowCar],
        correct: 'red'
    },
    {
        id: 2,
        question: 'Druk op de groene auto.',
        options: [greenCar, blackCar],
        correct: 'green'
    },
    {
        id: 3,
        question: 'Druk op de paarse auto.',
        options: [purpleCar, orangeCar],
        correct: 'purple'
    },
    {
        id: 4,
        question: 'Druk op de gele auto.',
        options: [yellowCar, whiteCar],
        correct: 'yellow'
    },
    {
        id: 5,
        question: 'Druk op de bruine auto.',
        options: [brownCar, greenCar],
        correct: 'brown'
    },
    {
        id: 6,
        question: 'Druk op de grijze auto.',
        options: [greyCar, blueCar],
        correct: 'grey'
    },
    {
        id: 7,
        question: 'Druk op de oranje auto.',
        options: [orangeCar, purpleCar],
        correct: 'orange'
    },
    {
        id: 8,
        question: 'Druk op de witte auto.',
        options: [whiteCar, blackCar],
        correct: 'white'
    },
    {
        id: 9,
        question: 'Druk op de zwarte auto.',
        options: [blackCar, greyCar],
        correct: 'black'
    },
]

question.innerHTML =  questions[0].question;
firstCard.appendChild(blueCar.img);
secondCard.appendChild(greenCar.img);


console.log(whiteCar.color)