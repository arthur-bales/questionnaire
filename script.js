const startPage = document.querySelector(".start-page");
const questionUne = document.querySelector(".question-une");
const questionDeux = document.querySelector(".question-deux");
const questionTrois = document.querySelector(".question-trois");
const scorePage = document.querySelector(".score-page")
const buttonsSelector = document.querySelectorAll("button");
let etape = 1;

// Calcul du score
let scoreDisplay = document.querySelectorAll(".score");
let scorePoints = -1; //cf index.html ligne 27 
let scoreFinal = document.querySelector(".score-final");
const correctAnswer = document.querySelectorAll(".correct");

const aaa = "eeeee"
console.log(typeof scoreFinal); 

buttonsSelector.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("correct")) {
      scorePoints += 1;
        scoreDisplay.forEach((el) => {
            el.style.border = "solid 1px #adff2f"; 
            el.style.boxShadow = "0px 0px 15px -3px #adff2f"; 
        })
    } else {
        scoreDisplay.forEach((el) => {
            el.style.border = "solid 1px red";
            el.style.boxShadow = "0px 0px 15px -3px red";
        })
}
  })
});

// Affichage du score
scoreDisplay.forEach((el) => {
  el.innerText = `Score ${scorePoints} / 3`;
});

// Affichage des questions
questionUne.style.display = "none";
questionDeux.style.display = "none";
questionTrois.style.display = "none";
scorePage.style.display ="none"; 

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
      etape += 1; 
      scoreDisplay.forEach((el) => {
        el.innerText = `Score ${scorePoints} / 3`;
      });
    } else if (etape > 3) {
        questionTrois.style.display = "none"; 
        scorePage.style.display = ""
        scoreFinal.innerText = `Score ${scorePoints} / 3`;
        console.log(scorePoints);
if (scorePoints >= 2) {
    scoreFinal.style.color = "#adff2f";
} else {
    scoreFinal.style.color = "red"; 
    scoreFinal.style.border = "solid 3px red"; 
    scoreFinal.style.boxShadow = "0px 0px 20px -3px red"
}
    }
  });
});


