const startPage = document.querySelector(".start-page");
const questionUne = document.querySelector(".question-une");
const questionDeux = document.querySelector(".question-deux");
const questionTrois = document.querySelector(".question-trois");
const buttonsSelector = document.querySelectorAll("button");
let etape = 1;

// Calcul du score
let scoreDisplay = document.querySelectorAll(".score");
let scorePoints = -1; //cf index.html ligne 27 
const correctAnswer = document.querySelectorAll(".correct");

buttonsSelector.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("correct")) {
      scorePoints += 1;
      console.log(etape); 
        scoreDisplay.forEach((el) => {
            el.style.border = "solid 1px #adff2f"; 
            el.style.boxShadow = "0px 0px 15px -3px #adff2f"; 
        })
    } else {
        scoreDisplay.forEach((el) => {
            console.log("error");
            el.style.border = "solid 1px red";
            el.style.boxShadow = "0px 0px 15px -3px red";
        })
}
  });
});

// Affichage du score
scoreDisplay.forEach((el) => {
  el.innerText = `Score ${scorePoints} / 3`;
});

// Affichage des questions
questionUne.style.display = "none";
questionDeux.style.display = "none";
questionTrois.style.display = "none";

buttonsSelector.forEach((button) => {
  button.addEventListener("click", () => {
    if (etape === 1) {
      startPage.style.display = "none";
      questionUne.style.display = "";
      etape += 1;
      scoreDisplay.forEach((el) => {
        el.innerText = `Score ${scorePoints} / 3`;
      });
    } else if (etape === 2) {
      questionUne.style.display = "none";
      questionDeux.style.display = "";
      etape += 1;
      scoreDisplay.forEach((el) => {
        el.innerText = `Score ${scorePoints} / 3`;
      });
    } else if (etape === 3) {
      questionDeux.style.display = "none";
      questionTrois.style.display = "";
      scoreDisplay.forEach((el) => {
        el.innerText = `Score ${scorePoints} / 3`;
      });
    }
  });
});
