console.log("hello");
let quizcontainer = document.getElementById("quiz-container");
let gifcontainer = document.getElementById("gif-container");
let textcontainer = document.getElementById("text-container");
console.log(textcontainer);
let lossdiv = document.getElementById("lossdiv");
let windiv = document.getElementById("windiv");
console.log(windiv);
console.log(lossdiv);
let finalscoreofwin = document.getElementById("finalscoreofwin");
let finalscoreofloss = document.getElementById("finalscoreofloss");
let quesnospanclass = document.getElementsByClassName("quesnospanclass");
let quetext = document.getElementById("que-text-h1");
let option = document.getElementsByClassName("option");
let li = document.getElementsByTagName("li");
let li1 = document.getElementById("1");
let li2 = document.getElementById("2");
let li3 = document.getElementById("3");
let li4 = document.getElementById("4");
let scorespan = document.getElementById("scorespan");
let timerspan = document.getElementById("timerspan");
let footer = document.getElementById("footer");
let time = 60;

const startquiz = () => {
  textcontainer.style.display = "none";
  quizcontainer.style.display = "flex";
  const looper = setInterval(function () {
    timerspan.innerHTML = time - 1;
    time--;
    if (time <= 0) {
      clearInterval(looper);
      quizcontainer.style.display = "none";
      footer.style.display = "none";

      finalscoreofwin.innerHTML = scoreval;
      finalscoreofloss.innerHTML = scoreval;
      gifcontainer.style.display = "block";

      if (scoreval > 35) {
        console.log("win");
        windiv.style.display = "block";
        lossdiv.style.display = "none";
      } else {
        lossdiv.style.display = "block";
        windiv.style.display = "none";
      }
    }
  }, 1000);
};

const quesArr = [
  "Which telescope is set to be used to produce a movie of black hole movements",
  "InSight Mars lander’ was launched by which country",
  "India’s first liquid-mirror telescope has been commissioned in which state/UT",
  "Which is a single integrated circuit",
  "The first movie released in 1982 with terrific computer animation and graphics was",
  "What is the binary value of ‘A’",
  "Which web browser is developed by the Google",
  "Who is the founder of Bluetooth",
  "Which American Computer Company is also known by the nick name “Big Blue”",
  "Which company first developed the Java programming language",
];
const optionsArr = [
  [
    "Hubble Telescope",
    "Event Horizon telescope",
    "South African Large telescope",
    "gran Telescope",
  ],
  ["Israel", "UAE", "USA", "Russia"],
  ["Sikkim", "Jammu & Kashmir", "Uttarakhand", "Himachal Pradesh"],
  ["Gate", "Mother board", "Chip", "CPU"],
  ["Star wars", "Tron", "forbidden Planet", "Dark Star"],
  ["01000100", "11000001", "01100001", "01000001"],
  ["IE", "Fire Fox", "Safari", "Chrome"],
  ["Ericsson", "IBM", "Apple", "Dell"],
  ["Microsoft", "Apple", "Compaq corporation", "IBM"],
  ["Microsoft", "Google", "Sun Microsystem", "IBM"],
];
let valueofli1, valueofli2, valueofli3, valueofli4;
let selectoption1 = () => {
  valueofli1 = li1.value;
  li1.classList.add("clickonli");
  li2.classList.remove("clickonli");
  li3.classList.remove("clickonli");
  li4.classList.remove("clickonli");
};
let selectoption2 = () => {
  valueofli2 = li2.value;
  // console.log(valueofli2)
  li2.classList.add("clickonli");
  li1.classList.remove("clickonli");
  li3.classList.remove("clickonli");
  li4.classList.remove("clickonli");
};
let selectoption3 = () => {
  valueofli3 = li3.value;
  li3.classList.add("clickonli");
  li1.classList.remove("clickonli");
  li2.classList.remove("clickonli");
  li4.classList.remove("clickonli");
};
let selectoption4 = () => {
  valueofli4 = li4.value;
  li4.classList.add("clickonli");
  li2.classList.remove("clickonli");
  li3.classList.remove("clickonli");
  li1.classList.remove("clickonli");
};
let value = 1;
let i = 1;
let scoreval = 0;
let score = 0;
const submit = () => {
  console.log(value);
  li1.classList.remove("clickonli");
  li2.classList.remove("clickonli");
  li3.classList.remove("clickonli");
  li4.classList.remove("clickonli");
  

  if (value <= 10) {
    console.log(value)
    console.log(valueofli1)
    console.log(valueofli2)
    console.log(valueofli3)
    console.log(valueofli4)
    if (
      (value == 1 && valueofli2 == 2) ||
      (value == 2 && valueofli3 == 3) ||
      (value == 3 && valueofli3 == 3) ||
      (value == 4 && valueofli1 == 1) ||
      (value == 5 && valueofli1 == 1) ||
      (value == 6 && valueofli4 == 4) ||
      (value == 7 && valueofli4 == 4) ||
      (value == 8 && valueofli1 == 1) ||
      (value == 9 && valueofli4 == 4)
    ) {
      scoreval = scoreval + 5;
      scorespan.innerHTML = scoreval;
      quesnospanclass[0].innerHTML = value + 1;
      quesnospanclass[1].innerHTML = value + 1;
      value++;
      quetext.innerHTML = quesArr[i];
      for (let j = 0; j < 4; j++) {
        option[j].innerHTML = optionsArr[i][j];
      }
      // option[0].innerHTML = optionsArr[i][0];
      i++;
      valueofli1=0;
  valueofli2=0;
  valueofli3=0;
  valueofli4=0;
    } else if (value == 10 && valueofli3 == 3) {
      scoreval = scoreval + 5;
      scorespan.innerHTML = scoreval;
      value++;
      finalscoreofwin.innerHTML = scoreval;
      finalscoreofloss.innerHTML = scoreval;
      quizcontainer.style.display = "none";
      footer.style.display = "none";

      gifcontainer.style.display = "block";

      if (scoreval > 35) {
        console.log("win");
        windiv.style.display = "block";
        lossdiv.style.display = "none";
      } else {
        lossdiv.style.display = "block";
        windiv.style.display = "none";
      }
    } else if (value == 10) {
      finalscoreofwin.innerHTML = scoreval;
      finalscoreofloss.innerHTML = scoreval;
      value++;
      quizcontainer.style.display = "none";
      footer.style.display = "none";

      gifcontainer.style.display = "block";

      if (scoreval > 35) {
        console.log("win");
        windiv.style.display = "block";
        lossdiv.style.display = "none";
      } else {
        lossdiv.style.display = "block";
        windiv.style.display = "none";
      }
    } else if (value < 10) {
      quesnospanclass[0].innerHTML = value + 1;
      quesnospanclass[1].innerHTML = value + 1;
      value++;
      quetext.innerHTML = quesArr[i];
      for (let j = 0; j < 4; j++) {
        option[j].innerHTML = optionsArr[i][j];
      }
      // option[0].innerHTML = optionsArr[i][0];
      i++;
      valueofli1=0;
  valueofli2=0;
  valueofli3=0;
  valueofli4=0;
    }
  }
};
