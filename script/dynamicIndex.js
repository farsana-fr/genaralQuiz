//Authored by (Farsana Rahim)[https://github.com/farsana-fr]
//First coded on 13 Jan 2023

"use strict";

//quiz stores all the details such as question, options, correct answer
// this will help to maintain everything in an ordered manner

let score = 0;
const quiz = [
  {
    question: `1. How many months are there in a year?`,
   
    choices: [
      `1. 24`,
      `2. 1`,
      `3. 12`,
      `4. 365`,
    ],
    correct: {
      opt: 3,
      head: `3. 12`,
      para: "There are only 12 months a year starting from Jan to Dec",
    },
  },
  {
    question: `2. How many days are there in a year(when not leap year)?`,
    choices: [`1. 364`, `2. 365`, `3. 366`, `4. 362`],
    correct: {
      opt: 2,
      head: "2. 365",
      para: "There are 365 days for normal year, and 366 on a leap year",
    },
  },
  {
    question: "3. How many colours are there in a rainbow?",
    choices: [
      "1. 9",
      "2. 7",
      "3. 5",
      "4. 4",
    ],
    correct: {
      opt: 2,
      head: "2. 7",
      para: "Rainbow has only 7 colours, remember? VIBGYOR",
    },
  },
  {
    question: '4. We use our ears to ______<br><h6 class="text-danger fw-bold">(Read Carefully)</h6>',
    choices: [
      `1. Hear`,
      `2. Here`,
      `3. Smell`,
      `4. Speak`,
    ],
    correct: {
      opt: 1,
      head: `1. Hear`,
      para: `As on Wikipedia :- Hearing, or auditory perception, is the ability to perceive sounds through an organ, such as an ear, by detecting vibrations as periodic changes in the pressure of a surrounding medium.`,
    },
  },
  {
    question: `5. Name the day that comes after Tuesday`,
    choices: [`1. Thursday`, `2. Monday`, `3. Tomorrow`, `4. Wednesday`],
    correct: {
      opt: 4,
      head: "4. Wednesday",
      para: "The names of the days of the week(in order) are Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday",
    },
  },
  {
    question: `6. What does humans breathe to live?`,
    choices: [
      `1. Oxygen`,
      `2. Methane`,
      `3. Hydrogen`,
      `4. Carbon Dioxide`,
    ],
    correct: {
      opt:1,
      head: `1. Oxygen`,
      para: `Humans take in oxygen(chemical formula : O2) and breathe out carbon dioxide. `,
    },
  },
  {
    question: `7. How many zeroes are there in one thousand?`,
    choices: [`1. 2`, `2. 3`, `3. 4 `, `4. None of the above`],
    correct: {
      opt: 2,
      head: `2. 3`,
      para: "One thousand means 1000, which has only three zeroes",
    },
  },
  {
    question: `8. Which part of a plant soaks up nutrients and water?`,
    choices: [`1. Stomata`, `2. Branch`, `3. Root`, `4. Trunk`],
    correct: {
      opt: 3,
      head: `3. Root`,
      para: `Root runs through the soil and find long ways to find nutrient and water for the plant`,
    },
  },
  {
    question: `9. Which bird has a far sight and turns its head all the way round?`,
    choices: [
      `1. Eagle`,
      `2. Vulture`,
      `3. Parrot`,
      `4. Owl`,
    ],
    correct: {
      opt: 4,
      head: `4. Owl`,
      para: `Owls are quite specialized predators, having eyes and ears designed to easily locate prey and unique feathers that enable them to fly almost silently. There head is rotatable Funny 😂 isn't it ??`,
    },
  },
  {
    question: `10. How well you liked my quiz?`,
    choices: [
      `1. Good`,
      `2. Bad`,
      `3. Nothing to say`,
      `4. Loved it`,
    ],
    correct: {
      opt: 4,
      head: `4. Loved it`,
      para: `Your answer should be this 😈 You should love this quiz, this is super easy to build and reused for any topics 😊 Happy Coding`,
    },
  },
];

//The heart of quiz page
function constrQuiz() {
  let questionHTML = `<div class="quizStart ">`;
  quiz.forEach((e, i) => {
    let imageCode = "";

    if (e.screenshot) {
      imageCode = `<img src=${e.screenshot}>`;
    }
    questionHTML += `
      
              
                <h2>${e.question}</h2>
                ${imageCode}
                <div class="mt-4">
                <div class="form-check">
                    <input
                    class="form-check-input form-check-inputq${i + 1}"
                    type="radio" name="q${i + 1}" 
                    id="q${i + 1}a1"
                    />
                    <label class="form-check-label" for="q${i + 1}a1">
                    ${e.choices[0]}
                    </label>
                </div>
                <div class="form-check">
                    <input
                    class="form-check-input form-check-inputq${i + 1}"
                    type="radio" name="q${i + 1}" 
                    id="q${i + 1}a2"
                    />
                    <label class="form-check-label" for="q${i + 1}a2">${
      e.choices[1]
    }</label>
                </div>
                <div class="form-check">
                    <input
                    class="form-check-input form-check-inputq${i + 1}"
                    type="radio" name="q${i + 1}" 
                    id="q${i + 1}a3"
                    />
                    <label class="form-check-label" for="q${i + 1}a3">${
      e.choices[2]
    }</label>
                </div>
                <div class="form-check">
                    <input
                    class="form-check-input form-check-inputq${i + 1}"
                    type="radio" name="q${i + 1}" 
                    id="q${i + 1}a4"
                    />
                    <label class="form-check-label" for="q${i + 1}a4">${
      e.choices[3]
    }</label>
                    <br />
                    </div>
                </div>
                <div class="row">
                  <button type="button" class="col-lg-3 col-md-3 submitAns submitAns--${
                    i + 1
                  } btn btn-success mb-5">Submit Answer</button><div class="col-lg-6 col-md-6 eachResultq${
      i + 1
    } fw-bold"></div>
                </div>
                <br>
                <button type="button" class="checkB checkB--${
                  i + 1
                } btn btn-primary disabled hide">Check Answer</button>
                <div class=" answer answer--${i + 1} border mt-5 p-4">
                    <h5>${e.correct.head}</h5>
                    <p>
                    ${e.correct.para}
                    </p>
                    
              </div>
          
      `;
  });
  questionHTML += `</div>
    <hr>
    <div class="finishQuiz text-center mt-5">
                    <button type="button" class="btnFinish btn btn-danger w-50">Finish</button>
                  </div>`;
  return questionHTML;
}

const btnSubmit = document.querySelector(".submitB");
const secWelcome = document.querySelector(".welcome");
const secQuiz = document.querySelector(".quiz");
const timer = document.querySelector(".displayTimer");
if (secQuiz) secQuiz.innerHTML = "";

//Starting the quiz on click of Start Button
//Note: I have added this event on the complete quiz area, so it eases our effort to handle all the buttons within the same handler

if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    secWelcome.classList.add("hidden");
    secWelcome.textContent = "";
    secQuiz.classList.remove("hidden");
    secQuiz.innerHTML = constrQuiz();
    timer.classList.remove("hidden");
    //23-Jan-2023 : Add Timer Starts
    // let quizAllowedTime=10*60*1000;
    let sec = 0;
    let min = 3;
    let remaining = "";
    let tim = setInterval(
      () =>
        // timer.textContent;
        {
          // let wat=Intl.DateTimeFormat('en-US').format(new Date(quizAllowedTime));
          if (min == 0 && sec == 0) {
            document
              .querySelectorAll(`.form-check-input`)
              .forEach((e) => (e.disabled = true));

            document
              .querySelectorAll(`.submitAns`)
              .forEach((e) => e.classList.add("disabled"));
            timer.innerHTML = `<h4 class="text-center p-1">TIMED OUT!!</h4>`;
            timer.classList.add("hidden");
            clearInterval(tim);
          } else if (sec == 0) {
            min--;
            sec = 60;
          } else {
            remaining = `${min}`.padStart(2, 0) + `:${sec--}`.padStart(2, 0);
            timer.innerHTML = `<h4 class="text-center p-1">TIME LEFT: ${remaining}</h4>`;
            // timer.textContent=remaining;
            // console.log("remaining",remaining);
          }
        },

      1000
    );
    //23-Jan-2023 : Add Timer Ends
    const quizArea = document.querySelector(".quizStart");
    if (!secQuiz.classList.contains("hidden")) {
      document
        .querySelector(".btnFinish")
        .addEventListener("click", function () {
          timer.classList.add("hidden");
          secQuiz.innerHTML = `
      <div class=" mt-5">
          <h3>You have scored</h3>
          <h3 class="displayScore text-green fw-bold"></h3>
      </div>
      `;

          //May be will uncomment in future
          // window.location="result.html";
          console.log(document.querySelector(".displayScore"));
          const scored = localStorage.getItem("score")
            ? localStorage.getItem("score")
            : 0;
          const perc = (scored / `${quiz.length}`) * 100;
          document.querySelector(
            ".displayScore"
          ).textContent = `${scored} out of ${quiz.length} which is ${perc}%`;
          localStorage.removeItem("score");
        });
    }
    //Listening to all events from quiz section
    quizArea.addEventListener("click", function (e) {
      // console.log(e.target);
      const getTargetClass = e.target.getAttribute("class");

      //Handle for Submit Answer Starts

      let answered = getTargetClass
        .split(" ")
        .filter((e) => e.startsWith("submitAns--"))
        .join();
      console.log("answered", answered);
      if (answered) {
        // console.log(answered[answered.length-1]);
        // answered=answered[answered.length-1];);
        //Updated the logic on Jan 23 to handle 2 digit question numbers
        answered = answered.slice(answered.lastIndexOf("-") + 1);
        let selectedOption = 0;

        //Correct answer is on array that starts from index 0.
        //Here we have stored the submited question on answered with is index+1
        //Hence to trace back the index of quiz to get the current question, we need to do answered-1
        const correctAns = quiz[answered - 1].correct.opt;
        console.log("Answered", answered);
        //  console.log(document.querySelectorAll(`.form-check-inputq${answered}`));

        document
          .querySelectorAll(`.form-check-inputq${answered}`)
          .forEach((e, i) => {
            // console.log("Inside loop 152");
            console.log("ELEM", e, "Checked?", e.checked);
            if (e.checked) {
              selectedOption = i + 1;
              // console.log("selected",selectedOption);
              // console.log("correct",correctAns);
              if (selectedOption == correctAns) {
                localStorage.setItem("score", ++score);
                document.querySelector(
                  `.eachResultq${answered}`
                ).innerHTML = `<h6 class="text-success fw-bold">Correct Answer 🎉</h6>`;
              } else {
                document.querySelector(
                  `.eachResultq${answered}`
                ).innerHTML = `<h6 class="fw-bold text-danger">Wrong Answer, take a lot at correct answer</h6>`;
              }
              document
                .querySelector(`.checkB--${answered}`)
                .classList.remove("disabled");
              document
                .querySelector(`.checkB--${answered}`)
                .classList.remove("hide");
              //disable the radio buttons

              quiz[answered - 1].choices.forEach((_, i) => {
                document.getElementById(
                  `q${answered}a${i + 1}`
                ).disabled = true;
              });
            }
          });
      }
      //Handle for Submit Answer Ends

      //Handle the Check Answer functionality Starts

      let checkAns = getTargetClass
        .split(" ")
        .filter((e) => e.startsWith("checkB--"))
        .join();

      // let toShow=checkAns[checkAns.length-1];
      //Updated the logic on Jan 23 to handle 2 digit question numbers
      let toShow = checkAns.slice(checkAns.lastIndexOf("-") + 1);

      if (checkAns) {
        const btnCheck = document.querySelector(`.${checkAns}`);
        document.querySelector(`.answer--${toShow}`).classList.toggle("show");
        btnCheck.textContent =
          btnCheck.textContent == "Check Answer"
            ? "Hide Answer"
            : "Check Answer";
      }

      //Handle the Check Answer functionality End
    });
  });
}
