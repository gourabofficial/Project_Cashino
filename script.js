let amount = 10000;
document.querySelector('.amount h2').textContent = "Your Amount: " + amount;

function generateGameNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

document.getElementById('submit-bid').addEventListener('click', function() {
    const bidAmount = Number(document.getElementById('bid').value);
    if (bidAmount > 0 && bidAmount <= amount) {
        playGame(bidAmount);
    } else {
        alert("Invalid bid amount. Enter a valid bid amount.");
    }
});

function playGame(bidAmount) {
    document.getElementById('submit-bid').disabled = true;
    const submitButton = document.getElementById('submit');
    submitButton.removeEventListener('click', submitNumber);
    submitButton.addEventListener('click', submitNumber);

    function submitNumber() {
        const userNumber = Number(document.getElementById('number').value);
        if (userNumber >= 1 && userNumber <= 10) {
            const gameNumber = generateGameNumber();
            document.querySelector('.game-number h2').textContent = "Game Number: " + gameNumber;
            if (userNumber === gameNumber) {
                amount += bidAmount * 2;
                alert("You Won the Game!");
                console.log("you won")
            } else {
                amount -= bidAmount;
                alert("Better luck next time.");
                console.log("you lost bro")
            }
            document.querySelector('.amount h2').textContent = "Your Amount: " + amount;
            if (amount <= 0) {
                alert("Your money is not sufficient to continue.");
                stopGame();
            } else {
                document.getElementById('submit-bid').disabled = false;
            }
        } else {
            alert("Invalid number. Enter a number between 1 and 10.");
        }
    }
}

function stopGame() {
    document.getElementById('bid').disabled = true;
    document.getElementById('submit-bid').disabled = true;
    document.getElementById('number').disabled = true;
    document.getElementById('submit').disabled = true;
    alert("Game Over!");
}
