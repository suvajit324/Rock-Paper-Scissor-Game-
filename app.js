let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#computer-score');


const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("It's a Draw");
    msg.innerText = "It's a Draw! Play Again.";
    msg.style.backgroundColor = "#0D324D";
    
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "lightgreen";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        console.log("You Lose");
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};  

    

const playGame = (userChoice) => {
    console.log("User choice is :  ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is :  ", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice ==="rock") {
           userWin = compChoice === "paper" ? false : true;
        } else if ( userChoice === "paper") {
           userWin  =compChoice === "scissors" ? false : true;
        } else if ( userChoice === "scissors") {
           userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }

};


choices.forEach ((choice) => { 
    
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);   
    })
    
});
