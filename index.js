import readlineSync from 'readline-sync';
import chalk from 'chalk';
var score = 0;
var highScores = [
  { name: "Preethi", score: 3 },
  { name: "Sahithi", score: 2 },
]

var questions = [
  {
    question: "Where do I live? ",
    answer: "Gollapally",
  },
  {
    question: "What is my fav Color? ",
    answer: "Black",
  },
  {
    question: "Is my graduation completed?",
    answer: "Yes"
  }
];


var userName = readlineSync.question("May I have your name? : ");
console.log(("Welcome to our site ") + chalk.green(userName));


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer == answer) {
    console.log(chalk.green("Your right!"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("Sorry ur wrong"));
  }
  console.log("current score: ", score);
  console.log("-------------")
}

for (var i = 0; i < questions.length; i++) {
  var currentAnswer = questions[i];
  play(currentAnswer.question, currentAnswer.answer);
}

console.log("YAY! You SCORED: ", score);
console.log("check out the high scores, if you should be there ping me I'll update the scores.");
highScores.map(score => console.log(score.name, score.score));

