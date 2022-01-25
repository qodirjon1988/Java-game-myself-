let chances = 5;
let record = 0;

let inputNum = Number(document.querySelector(".input").value);
let randomNum = Math.trunc(Math.random() * 20) + 1;

let Info = function (info) {
  document.querySelector(".text_end").textContent = info;
};
let Chance = function (chance) {
  document.querySelector(".chance").textContent = chance;
};

document.querySelector(".btn_check").addEventListener("click", function () {
  let inputNum = Number(document.querySelector(".input").value);
  if (!inputNum) {
    Info("Son kiritmadingiz");
  } else if (inputNum !== randomNum) {
    if (chances > 1) {
      chances--;
      Chance(chances);
      Info(
        inputNum > randomNum
          ? "Katta son kiritdingiz"
          : "Kichik son kiritdingiz"
      );
    } else {
      Chance(0);
      Info("Yutqazdingiz");
    }
  } else if (inputNum === randomNum) {
    Info("QOYIL, TOPDINGIZ!!!");
    document.querySelector(".text_1").textContent = randomNum;
    chances--;
    Chance(chances);
    if (chances > record) {
      record = chances;
      document.querySelector(".record").textContent = record;
      document.querySelector("button").style.backgroundColor = "#abfa2d";
      document.querySelector("input").style.backgroundColor = "#abfa2d";
      document.getElementById("contain").style.backgroundColor = "#abfa2e";
      document.querySelector("body").style.backgroundColor = "#abfa2e";
    }
  }
});

document.querySelector(".btn_res").addEventListener("click", function () {
  chances = 5;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  Info("O'yinni boshlang...");
  Chance(5);
  document.querySelector(".input").value = "";
  document.querySelector(".text_1").textContent =
    "1 dan 20 gacha son o'ylayapman... Siz shu sonni topa olasizmi???";
});
