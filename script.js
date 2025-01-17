let score_you = document.querySelector(".yourscore");
let score_comp = document.querySelector(".compscore");

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".pic");        // get all buttons for rock, paper, scissors
const msg = document.querySelector(".display-para");           // element to display game result message

const userScorePara = document.querySelector(".yourturn");
const compScorePara = document.querySelector(".compturn");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    score_you.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    score_comp.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  final_Winner();
  restart_Game();
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice){
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

const final_Winner = () =>{
  if(userScore === 5){
    msg.innerText = "You are the Final Winner , Restart ?";
    disableGame();
  }
  if(compScore === 5){
    msg.innerText = "Comp is the Final Winner, Restart ?";
    disableGame();
  }
}

const disableGame = () => {
  choices.forEach((choice) => {
    choice.setAttribute("disabled", true);
  });
};

const restart_Game = ()=>{
  msg.addEventListener("click",()=>{
    location.reload();
  })
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});