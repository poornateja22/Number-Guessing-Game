let randomNumber = Math.floor(Math.random() * 21);
console.log(randomNumber);
let count = 0;
let score = 20;
let highScore = 0;

function number() {
    let guess = document.getElementById('input').value;
    if (guess == randomNumber) {
        document.body.style.backgroundColor = 'green';
        document.getElementById('guess').innerHTML = 'You Successfully Completed....!!';
        document.getElementById('guess').style.color = 'black';
        document.getElementById('main-para1').innerHTML = 'Your Guess is Correct';
        document.querySelector('.box').innerHTML = randomNumber;
        if (score > highScore) {
            highScore = score;
            document.getElementById('main-para3').innerHTML = 'High Score: ' + highScore;
        }
    } 
    else {
        score=score-1;
        document.getElementById('main-para2').innerHTML = 'Score: ' + score;
        if (guess < randomNumber) {
            document.getElementById('main-para1').innerHTML = 'Too Low...!';
        } 
        else if (guess > randomNumber) {
            document.getElementById('main-para1').innerHTML = 'Number Too High..';
        }
        count++;
        if (count > 19) {
            document.body.style.backgroundColor = 'red';
            document.getElementById('guess').innerHTML = 'Mission Failed'; 
            document.getElementById('main-para1').innerHTML = 'Better Luck Next Time...**'; 
            document.getElementById('input').disabled = true;
            document.getElementById('main-btn').disabled = true;
        }
    }
}

function resetGame() {
    count = 0;
    score = 20;
    randomNumber = Math.floor(Math.random() * 21);
    console.log(randomNumber);
    document.body.style.backgroundColor = 'black';
    document.querySelector('.box').innerHTML = '?';
    document.getElementById('guess').innerHTML = 'Guess My Number..!';
    document.getElementById('guess').style.color = 'white';
    document.getElementById('main-para1').innerHTML = 'Start Guessing...!';
    document.getElementById('main-para2').innerHTML = 'Score: ' + score;
    document.getElementById('input').value = '';
    document.getElementById('input').disabled = false;
    document.getElementById('main-btn').disabled = false;
}