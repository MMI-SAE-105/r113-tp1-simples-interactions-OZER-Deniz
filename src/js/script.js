// TODO
//Changer la couleur du text

const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge");
if (aMettreEnRouge) {
    aMettreEnRouge.style.color = "red";
}

//Réagir à un click

const EnRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click");

EnRougeSuiteAClick.addEventListener("click", (evt) => {
    EnRougeSuiteAClick.style.color = "red";
});

//collections d'éléments

const collH2 = document.querySelectorAll("h2")
collH2.forEach((elm) => {
    elm.addEventListener("click", (evt) => {
        evt.target.style.color = "red";
    });
});