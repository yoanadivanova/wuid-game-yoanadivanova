let myM = document.getElementById("m");
let myInventory = document.getElementById("inventory");
let myRiddle = document.getElementById("riddle");
let mySecondLetter = "G __ m __";
let myThirdLetter = "G a m __";
let myLastLetter = "G a m e";
let myButton = document.getElementById("done");
let clickZoneInfo = document.getElementById("info");
const textTip = document.getElementById("text");
let nextTip = document.getElementById("dog");
let lastTip = document.getElementById("outside");

myM.addEventListener("click", myFunction);
function myFunction() {
  myM.style.display = "none";
  myRiddle.innerHTML = mySecondLetter;
  sessionStorage.setItem("mVisible", true);
  textTip.style.display = "none";
  nextTip.style.display = "block";
}

const isM = sessionStorage.getItem("mVisible");

function callingTheSessionStorage() {
  if (isM === "true") {
    myM.style.display = "none";
    myRiddle.innerHTML = mySecondLetter;
  }
}

callingTheSessionStorage();

const isImg = sessionStorage.getItem("aVisible");

function callingTheSessionStorageAgain() {
  if (isImg === "true") {
    myRiddle.innerHTML = myThirdLetter;
    textTip.style.display = "none";
    nextTip.style.display = "none";
    lastTip.style.display = "block";
  }
}

callingTheSessionStorageAgain();

const isE = sessionStorage.getItem("eVisible");

function callingTheSessionStorageLast() {
  if (isE === "true") {
    myRiddle.innerHTML = myLastLetter;
    myButton.style.display = "block";
    lastTip.style.display = "none";
    clickZoneInfo.style.display = "none";
  }
}

callingTheSessionStorageLast();

function randomHint() {
  var hintOptions = [
    "Find the first letter before you continue to the next screen.",
    "Where is the first letter hidden?",
    "The first letter should be somewhere here.",
  ];
  const displayedTip =
    hintOptions[Math.floor(Math.random() * hintOptions.length)];
  textTip.textContent = displayedTip;
}

clickZoneInfo.addEventListener("click", randomHint);
