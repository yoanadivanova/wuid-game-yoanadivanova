let computerChoiceDisplay = document.getElementById("computer-choice");
let userChoiceDisplay = document.getElementById("user-choice");
let resultDisplay = document.getElementById("result");
let possibleChoices = document.querySelectorAll("button");
let myImg = document.getElementById("img");
let myDog = document.getElementById("dogimg");
let myGoodDog = document.getElementById("dog2img");
let myFirstText = document.getElementById("h2");
let myOtherText = document.getElementById("win");

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It is a draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
    myImg.style.display = "block";
    myDog.style.display = "none";
    myGoodDog.style.display = "block";
    myFirstText.style.display = "none";
    myOtherText.style.display = "inline-block";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "Try again";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
    myImg.style.display = "block";
    myDog.style.display = "none";
    myGoodDog.style.display = "block";
    myFirstText.style.display = "none";
    myOtherText.style.display = "inline-block";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Try again";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
    myImg.style.display = "block";
    myDog.style.display = "none";
    myGoodDog.style.display = "block";
    myFirstText.style.display = "none";
    myOtherText.style.display = "inline-block";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "Try again";
  }
  resultDisplay.innerHTML = result;
}

//watched a tutorial only for the rock paper scissors game

myImg.addEventListener("click", myOtherFunction);
function myOtherFunction() {
  sessionStorage.setItem("aVisible", true);
  myImg.style.display = "none";
}
