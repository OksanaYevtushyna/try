let min = 0;
let max = 8;
let randomNum;
let possiblePrize = 100;
const numIncrement = 4;
const prizeDec = 2;
const possiblePrizeInc = 2;
let attempts = 3;
let triedAttempt;
let answer;
let currentPrize = 0;
let totalPrize = 100;


if (confirm('Do you want to play a game?')) {
    let max = 8;
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    attempts;
    currentPrize;
    possiblePrize;
    totalPrize;
    while (attempts > 0) {
        answer = +prompt(`
        Choose a roulette pocket from 0 to ${max}
        Attempts left: ${attempts}
        Total prize: ${currentPrize}$
        Possible prize on current attempt: ${possiblePrize}$
        Please enter your number
        `)
        if (answer === randomNum) {
            currentPrize += possiblePrize;
            alert(`Congratulation, you won! Your prize is: ${currentPrize}$`)
            if (confirm('Do you want to continue?')) {
                max += numIncrement;
                attempts = 3;
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(randomNum);
                totalPrize *= possiblePrizeInc;
                possiblePrize = totalPrize;
            } else {
                alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
                if (confirm('Do you want to play again?')) {
                    let max = 8;
                    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                    attempts;
                    console.log(randomNum);
                    currentPrize = 0;
                    possiblePrize = totalPrize;
                } else {
                    break;
                }
            }
        } else {
            attempts--;
            possiblePrize /= prizeDec;
        }

        if (attempts === 0) {
            alert(`Thank you for your participation. Your prize is: ${currentPrize}$`);
            if (confirm('Do you want to play again?')) {
                let max = 8;
                randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
                console.log(randomNum);
                attempts;
                currentPrize = 0;
                possiblePrize;
            } else {
                break;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}
