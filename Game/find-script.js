let isLightSwitchedOff = true;
const body = document.querySelector("body");
const switchButton = document.getElementById("switch");
const myE = document.getElementById("e");
const mySanta = document.getElementById("santa");
const santaIsHelping = document.getElementById("santatext");
const theArrow = document.getElementById("arrow");

window.addEventListener("load", function () {
  switchButton.addEventListener("click", function () {
    if (isLightSwitchedOff === true) {
      myE.style.visibility = "hidden";
      myE.style.display = "block";
      mySanta.style.visibility = "hidden";
      mySanta.style.display = "block";
      santaIsHelping.style.visibility = "hidden";
      santaIsHelping.style.display = "inline-block";
      theArrow.style.visibility = "hidden";
      theArrow.style.display = "block";
      body.classList.add("light-off");
      body.classList.remove("light-on");

      switchButton.src = "images/675859.png";

      isLightSwitchedOff = false;
      saveToLocalStorage();
    } else {
      myE.style.visibility = "visible";
      mySanta.style.visibility = "visible";
      santaIsHelping.style.visibility = "visible";
      theArrow.style.visibility = "visible";
      body.classList.add("light-on");
      body.classList.remove("light-off");

      switchButton.src = "images/675808.png";

      isLightSwitchedOn = true;
      saveToLocalStorage();
    }
  });

  function readFromLocalStorage() {
    isLightSwitchedOff = localStorage.isLightSwitchedOgg === "true";
  }
  if (isLightSwitchedOff) {
    myE.style.visibility = "visible";
    body.classList.add("light-on");
    switchButton.src = "images/675859.png";
  } else if (isLightSwitchedOff === false) {
    myE.style.visibility = "hidden";
    body.classList.remove("light-off");
    switchButton.src = "images/675808.png";
  }
});

function saveToLocalStorage() {
  localStorage.isLightSwitchedOff = isLightSwitchedOff;
}

myE.addEventListener("click", myLetterDisapears);
function myLetterDisapears() {
  sessionStorage.setItem("eVisible", true);
  myE.style.display = "none";
}
