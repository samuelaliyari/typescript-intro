var comChoice = 0;
var playerChoice = 0;
var rounds = 5;
var playedRounds = 0;
var comPoints = 0;
var playerPoints = 0;
var roundsRange = document.body.querySelector("main section div p");
var range = document.body.querySelector("input[type=range]");
var userPoint = document.body.querySelector("#userPoint");
var comPoint = document.body.querySelector("#comPoint");
var userChoice = document.body.querySelector("#userChoice");
var compChoice = document.body.querySelector("#comChoice");
var changeRounds = function () {
    roundsRange.textContent = range.value;
    rounds = Number(range.value);
};
var play = function (choice) {
    playedRounds++;
    if (playedRounds <= rounds) {
        comChoice = Math.floor(Math.random() * 3);
        var result = choice.toString() + comChoice.toString();
        switch (result) {
            case "00":
                console.log("tryAgain");
                break;
            case "01":
                comPoints++;
                break;
            case "02":
                playerPoints++;
                break;
            case "10":
                playerPoints++;
                break;
            case "11":
                console.log("tryAgain");
                break;
            case "12":
                comPoints++;
                break;
            case "20":
                comPoints++;
                break;
            case "21":
                playerPoints++;
                break;
            case "22":
                console.log("tryAgain");
                break;
        }
        userPoint.textContent = playerPoints.toString();
        comPoint.textContent = comPoints.toString();
        switch (comChoice) {
            case 0:
                compChoice.textContent = "✊";
                break;
            case 1:
                compChoice.textContent = "🖐️";
                break;
            case 2:
                compChoice.textContent = "🖖";
                break;
            default:
                break;
        }
        switch (choice) {
            case 0:
                userChoice.textContent = "✊";
                break;
            case 1:
                userChoice.textContent = "🖐️";
                break;
            case 2:
                userChoice.textContent = "🖖";
                break;
            default:
                break;
        }
    }
    else {
        if (comPoints > playerPoints) {
            window.alert("computer wins");
        }
        else if (comPoints < playerPoints) {
            window.alert("you win");
        }
        else if (comPoints === playerPoints) {
            window.alert("draw, let's play another round");
        }
    }
};
