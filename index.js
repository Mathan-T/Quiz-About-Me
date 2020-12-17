// Required Libraries
var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

// welcome message
var welcomeMessage = readlineSync.question("Enter your name to begin: ")
console.log();
console.log(chalk.cyan.bold("Welcome"), chalk.greenBright.bold(welcomeMessage), chalk.cyan.bold("to DO YOU KNOW about me Quiz!!"));
console.log(chalk.magenta("--------------------------------------------"));
console.log()

// Instructions
console.log(chalk.bgBlue.whiteBright.bold("Game Instructions:"));
console.log(chalk.magentaBright.italic("1. This game contains 10 multiple choice questions."));
console.log(chalk.magentaBright.italic("2. For each correct answer will be rewarded 5 points."));
console.log(chalk.magentaBright.italic("3. For each wrong answer will reduce 2 points."));
console.log(chalk.magentaBright.italic("4. Lets begin the game"));
console.log()

// function & branching
function play(question, a, b, c, d, answer)
{
console.log()
console.log(chalk.yellowBright(question));
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log()
var userAnswer = readlineSync.question("Enter your choice: ");
if (userAnswer === answer)
{
  console.log(chalk.cyan("You entered: "), userAnswer);
  console.log(chalk.greenBright.bold("YAY!! Right Answer"));
  score = score + 5
  console.log("The score is: ", score);
}
else {
  console.log(chalk.redBright.bold("OOPS Wrong Answer"));
  console.log(chalk.cyanBright.bold("The answer is: "), answer);
  score = score - 2
  console.log("The score is: ", score);
}
console.log("-------------")
}

// Questions & Answers using Array of Objects
var questions = [{
  question: "1. Where do i live? ",
  a: "a: Chennai",
  b: "b: Coimbatore",
  c: "c: Trichy",
  d: "d: Kanchipuram",
  answer: "d"
},
{
  question: "2. What is my profession? ",
  a: "a: Data Analyst",
  b: "b: Software Developer",
  c: "c: Full Stack Developer",
  d: "d: Web Developer",
  answer: "c"
},
{
  question: "3. Where do i worked last? ",
  a: "a: Linkedin",
  b: "b: TCS",
  c: "c: Zoho",
  d: "d: Draup",
  answer: "d"
},
{
  question: "4. Who is my favourite superhero? ",
  a: "a: Superman",
  b: "b: Batman",
  c: "c: Hulk",
  d: "d: Ironman",
  answer: "b"
},
{
  question: "5. Who is my inspiration? ",
  a: "a: Steve Jobs",
  b: "b: Sundar Pichai",
  c: "c: Elon Musk",
  d: "d: Mark Zuckerberg",
  answer: "b"
},
{
  question: "6. Who is my favourite musician? ",
  a: "a: A.R. Rahman",
  b: "b: Anirudh",
  c: "c: Justin Bieber",
  d: "d: Selena Gomez",
  answer: "a"
},
{
  question: "7. Who is my favourite sport? ",
  a: "a: Basket Ball",
  b: "b: Cricket",
  c: "c: Foot Ball",
  d: "d: Tennis",
  answer: "b"
},
{
  question: "8. Who is my favourite sportperson? ",
  a: "a: Cristiano Ronaldo",
  b: "b: Usain Bolt",
  c: "c: Roger Federer",
  d: "d: M.S.Dhoni",
  answer: "d" 
},
{
  question: "9. Which is my favourite hobby? ",
  a: "a: Playing Mobile Games",
  b: "b: Cooking",
  c: "c: Books Reading",
  d: "d: Programming",
  answer: "a"
},
{
  question: "10. Which is my favourite mobile game? ",
  a: "a: Free Fire",
  b: "b: Clash of Clans",
  c: "c: Call of Duty",
  d: "d: Pubg Mobile",
  answer: "d"
}]

// loop to play the function
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.a,currentQuestion.b, currentQuestion.c, currentQuestion.d, currentQuestion.answer)
}

//printing the scores
console.log()
console.log(chalk.bgWhite.black.bold("Hurray!! Your Final Score is:", score));

//adding highscores
console.log()
console.log(chalk.cyanBright.bold("Checkout the Highscores:"));

var highScores = [{
  name: "1. Mathan",
  score: "50"
},
{
  name: "2. Ashwin",
  score: "40"
},
{
  name: "3. Raghav",
  score: "35"
}]

// branching to print the highscores
for (var i=0; i<highScores.length; i++)
{
  var currentScore = highScores[i];
  console.log(chalk.blueBright(currentScore.name), currentScore.score);
}

console.log()

console.log(chalk.greenBright.italic("***If you have beaten the highscore just take a screenshot and send it to my twitter, ill update your name ASAP***"));