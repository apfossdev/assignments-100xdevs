const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  // you can add more quiz here
];

let questionCounter = 0;
const questionCount = quizData.length;
let quizScore = 0;
const questionNode = document.getElementById('quiz-form');


//use helper functions for more clarity and future easy debugging of code
//this might look longer for few functions but increases readability so much moreee

function createQuestion(){
  const question = document.createElement("h3");
  question.innerHTML = quizData[questionCounter]["question"];
  return question; //this is to return the question as an object for us to use it later

}

function createOptions(){
  const optionsDiv = document.createElement("div");
  optionsDiv.setAttribute("id", `${questionCounter}-options`);

  ["a", "b", "c", "d"].forEach((option) => {
    const radioButton = document.createElement("input");
    radioButton.setAttribute("type", "radio");
    radioButton.setAttribute("id", `${questionCounter}-${option}`);
    radioButton.setAttribute("value", `${option}`);
    radioButton.setAttribute("name", `${questionCounter}`);

    const radioButtonLabel = document.createElement("label");
    radioButtonLabel.setAttribute("for", `${questionCounter}-${option}`);
    radioButtonLabel.innerHTML = quizData[questionCounter][option];
    optionsDiv.appendChild(radioButton);
    optionsDiv.appendChild(radioButtonLabel);
  });
  return optionsDiv;
}

function createSubmitButton(){
  const submitButton = document.createElement("button");
  submitButton.setAttribute("id", `${questionCounter}-submitButton`);
  submitButton.innerHTML = "Submit";
  submitButton.addEventListener('click',submitFunctionality);
  return submitButton;
}

function displayQuestion(){
  questionNode.innerHTML = "";
  questionNode.appendChild(createQuestion());
  questionNode.appendChild(createOptions());
  questionNode.appendChild(createSubmitButton());
}


function submitFunctionality(){
  const checkedRadio = document.querySelector(`input[name="${questionCounter}"]:checked`);
    if(checkedRadio && checkedRadio.value === quizData[questionCounter]["correct"]) {
      quizScore++;
    }
    questionCounter++;

    if(questionCounter < questionCount) {
      displayQuestion();
    }
    else{
      questionNode.innerHTML = `<h3>Your score is ${quizScore} out of ${questionCount}</h3>`;
    }
  }

displayQuestion();