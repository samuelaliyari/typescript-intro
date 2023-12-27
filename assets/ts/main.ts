let comChoice: number = 0;
let playerChoice: number = 0;
let rounds: number = 5;
let playedRounds: number = 0;
let comPoints: number = 0;
let playerPoints: number = 0;

const roundsRange: HTMLBodyElement =
	document.body.querySelector("main section div p");

const range: HTMLInputElement =
	document.body.querySelector("input[type=range]");

const userPoint: HTMLBodyElement = document.body.querySelector("#userPoint");
const comPoint: HTMLBodyElement = document.body.querySelector("#comPoint");

const userChoice: HTMLBodyElement = document.body.querySelector("#userChoice");
const compChoice: HTMLBodyElement = document.body.querySelector("#comChoice");

const changeRounds = () => {
	roundsRange.textContent = range.value;
	rounds = Number(range.value);
};

const play = (choice: number) => {
	playedRounds++;
	if (playedRounds <= rounds) {
		comChoice = Math.floor(Math.random() * 3);
		const result = choice.toString() + comChoice.toString();
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
	} else {
		if (comPoints > playerPoints) {
			window.alert("computer wins");
		} else if (comPoints < playerPoints) {
			window.alert("you win");
		} else if (comPoints === playerPoints) {
			window.alert("draw, let's play another round");
		}
	}
};
