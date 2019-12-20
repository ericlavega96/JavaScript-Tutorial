// Challenge 1: Your age in days
function ageInDays(){
    let birthYear = prompt('What year were you born?');
    let ageDays = (2019 - birthYear) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageDays + ' days old');
    h1.setAttribute('id', 'age-days');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('age-days').remove();
}

// Challenge 2: Cat Generator

function generateCat(){
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-gen');

    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock, Paper, Scissors

function rpsGame(choice) {
    let humanChoice, botChoice;

    humanChoice = choice.id;
    botChoice = numberToChoice(randToRpsInt());

    results = decideWinner(humanChoice, botChoice);

    message = finalMessage(results);



   rpsFrontEnd(choice.id, botChoice, message)
}

function randToRpsInt() {

    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(choice, botChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    }

    let score = rpsDatabase[choice][botChoice];
    let botScore = rpsDatabase[botChoice][choice];

    return [score, botScore];
}

function finalMessage([score, botScore]) {
    if(score === 0){
        return {'message': 'You lost!', 'color': 'red' };
    }
    else if(score === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow' };
    }else{
        return {'message': 'You won!', 'color': 'green' };
    }
}

function rpsFrontEnd(choiceImage, botImageChoice, finalMessage) {
    let imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    // Let's remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    console.log(botImageChoice);

    humanDiv.innerHTML = "<img src='" +  imagesDatabase[choiceImage] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1)'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" +  imagesDatabase[botImageChoice] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1)'>";
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

// Challenge 4: Change the color of all buttons

let allButtons = document.getElementsByTagName('button');
console.log(allButtons);

let copyAllButtons = [];
for (let i =0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

console.log(copyAllButtons);


function buttonColorChange(colorSelect) {
    if (colorSelect.value === 'red') {
        buttonsRed();
    }else if (colorSelect.value === 'green') {
        buttonsGreen();
    }else if (colorSelect.value === 'reset') {
        buttonsColorReset();
    }else if (colorSelect.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonsColorReset() {
    for (let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    let colorList = ['btn-primary','btn-success','btn-danger','btn-warning'];

    for (let i=0; i < allButtons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(colorList[randomNumber]);
    }
}

// Challenge 5: Black Jack

let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-score', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-score', 'div': '#dealer-box', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardsMap': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]},
    'wins': 0,
    'losses': 0,
    'draws': 0,
    'isStand': false,
    'turnsOver': false
};

const YOU = blackjackGame['you'];
const DEALER =  blackjackGame['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

const winSound = new Audio('static/sounds/cash.mp3');

const loseSound = new Audio('static/sounds/aww.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
//document.getElementById('blackjack-hit-button').addEventListener('click', blackjackhit);

document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);


function blackjackHit() {
    if (blackjackGame['isStand'] === false) {
        let card = randomCard();    
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}


function randomCard() {
    let randomCard = Math.floor(Math.random() * blackjackGame.cards.length);
    return blackjackGame['cards'][randomCard];
}

function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    } else {

    }
}

function blackjackDeal() {

    if (blackjackGame['turnsOver'] === true){

        blackjackGame['isStand'] = false;

        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        
        for(i=0; i < yourImages.length; i++){
            yourImages[i].remove();
        }
    
        for(i=0; i < dealerImages.length; i++){
            dealerImages[i].remove();
        }
    
        YOU['score'] = 0;
        DEALER['score'] = 0;
        
        document.querySelector(YOU['scoreSpan']).textContent = 0;
        document.querySelector(DEALER['scoreSpan']).textContent = 0;
    
        document.querySelector(YOU['scoreSpan']).style.color = 'white';
        document.querySelector(DEALER['scoreSpan']).style.color = 'white';
    }
}

function updateScore(card, activePlayer) {

    if (card == 'A'){
        if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <= 21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    } else {
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}   

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


 async function dealerLogic() {
    blackjackGame['isStand'] = true;

    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
}


function computeWinner() {
    let winner;

    if (YOU['score'] <= 21 ){
        if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
            winner = YOU;
            blackjackGame['wins']++;
        } else if (YOU['score'] < DEALER['score']) {
            winner = DEALER;
            blackjackGame['losses']++;
        } else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
    } else if (YOU['score'] > 21 && DEALER['score'] <= 21 ) {
        winner = DEALER;
        blackjackGame['losses']++;
    } else if (YOU['score'] > 21 && DEALER['score'] > 21 ) {
        blackjackGame['draws']++;
    }

    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (blackjackGame['turnsOver'] === true) {
            
        if (winner == YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green'; 
            winSound.play();
        } else if (winner == DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red'; 
            loseSound.play();
        } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor; 
    }
}