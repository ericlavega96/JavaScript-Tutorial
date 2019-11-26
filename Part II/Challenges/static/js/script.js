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

