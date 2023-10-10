var computerChoice;

let rounds = parseInt(prompt("How many rounds do you want to play?"));

wins = 0;
ties = 0;
losses = 0;

for (let i = 0; i < rounds; i ++) {

var userChoice = prompt("Rock, paper, or scissors?");

let randomNumber = Math.round(Math.random() * 3);


    if (randomNumber == 1) {
    computerChoice = "rock";
}
    else if (randomNumber == 2) {
        computerChoice = "paper";
    }
        else if (randomNumber == 3) {
            computerChoice = "scissors";
        }

if (computerChoice == userChoice) {
    alert("You tied!");
    ties++;
}
    else if ((computerChoice == "rock") && (userChoice == "scissors")) {
        alert("The computer chose rock, which beats scissors. Sorry, you lost. :(");
        losses++;
        }
        else if ((computerChoice == "paper") && (userChoice == "rock")) {
        alert("The computer chose paper, which beats rock. Sorry, you lost :(")
        losses++;
            }
            else if ((computerChoice == "scissors") && (userChoice == "paper")) {
        alert("The computer chose scissors, which beats paper. Sorry, you lost :(");
        losses++;
                }
                else if ((computerChoice == "rock") && (userChoice == "paper")) {
        alert("The computer chose rock, which loses to paper. You won!");
        wins++;
                    }
                    else if ((computerChoice == "paper") && (userChoice == "scissors")) {
        alert("The computer chose paper, which loses to scissors. You won!");
        wins++;
                        }
                        else if ((computerChoice == "scissors") && (userChoice == "rock")) {
        alert("The computer chose scissors, which loses to rock. You won!")
        wins++;
        }
    console.log(computerChoice);
    console.log(userChoice);
}

alert("You won " + wins + " time(s), tied " + ties + " time(s), and lost " + losses + " time(s).")


