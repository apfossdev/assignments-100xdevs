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

const numOfQuestions = quizData.length;
let questionNum = 0;

let questionsAnsweredCorrectly = 0;


function printQuestionNodes(){

  const questionNode = document.createElement("div");
  const question = document.createElement("div");
  const options = document.createElement("div");
  const submitBtn = document.createElement("button");

  question.innerHTML = quizData[questionNum]["question"];

  const option_a = document.createElement("input");
  option_a.setAttribute("type", "radio");
  option_a.setAttribute("value", quizData[questionNum]["a"]);
  const option_a_label = document.createElement("label");
  option_a_label.setAttribute("for", quizData[questionNum]["a"]);
  option_a_label.innerHTML = quizData[questionNum]["a"];

  const option_b = document.createElement("input");
  option_b.setAttribute("type", "radio");
  option_b.setAttribute("value", quizData[questionNum]["b"]);
  const option_b_label = document.createElement("label");
  option_b_label.setAttribute("for", quizData[questionNum]["b"]);
  option_b_label.innerHTML = quizData[questionNum]["b"];

  const option_c = document.createElement("input");
  option_c.setAttribute("type", "radio");
  option_c.setAttribute("value", quizData[questionNum]["c"]);
  const option_c_label = document.createElement("label");
  option_c_label.setAttribute("for", quizData[questionNum]["c"]);
  option_c_label.innerHTML = quizData[questionNum]["c"];

  const option_d = document.createElement("input");
  option_d.setAttribute("type", "radio");
  option_d.setAttribute("value", quizData[questionNum]["d"]);
  const option_d_label = document.createElement("label");
  option_d_label.setAttribute("for", quizData[questionNum]["d"]);
  option_d_label.innerHTML = quizData[questionNum]["d"];

  submitBtn.innerHTML = "Submit";
  if(questionNum < numOfQuestions) submitBtn.setAttribute("onclick", "printQuestionNodes()");
  else submitBtn.setAttribute("onclick","showResult()"); 
  
  const parentNode = document.getElementById("main");
  const quizSection = document.getElementById("quiz-section");

  options.appendChild(option_a);
  options.appendChild(option_a_label);
  options.appendChild(option_b);
  options.appendChild(option_b_label);
  options.appendChild(option_c);
  options.appendChild(option_c_label);
  options.appendChild(option_d);
  options.appendChild(option_d_label);

  questionNode.appendChild(question);
  questionNode.appendChild(options);
  questionNode.appendChild(submitBtn);

  quizSection.appendChild(questionNode);
  parentNode.appendChild(quizSection);

  questionNum++;
}

function showResult(){
  
}