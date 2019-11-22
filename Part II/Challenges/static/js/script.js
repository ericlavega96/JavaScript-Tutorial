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

// Challenge 2: 


