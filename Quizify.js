//Note before running this program into your local PC run the following command npm install kuler, npm install readline-sync

let readlineSync = require("readline-sync");
let kuler = require("kuler"); //this is used for adding colors
let user_name = readlineSync.question("Enter your name ");
console.log(kuler(`Hello ${user_name} Welcome to the Quizify`, "#e11d48"));

/* Creating the Question answer data set */

/* Here we are used object to create questions because objects are extensive which means they can store multiple values in a single variable and we can add more questions in future */
let score = 0;
const database = {
  data: [
    {
      question: "let a={},b={} \n console.log(a==b)\n console.log(a==b)",
      options: {
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true"
      },
      correct_answer: "a"
    },
    {
      question: "Object.assign(target,source) create which type of copy?",
      options: {
        a: "deep copy",
        b: "shallow copy",
        c: "nested copy",
        d: "Creates a new reference"
      },
      correct_answer: "b"
    },
    {
      question: "Is method chaining possible with forEach?",
      options: {
        a: "Yes",
        b: "No"
      },
      correct_answer: "b"
    }
  ]
};

function show_question_and_options(database) {
  for (let i = 0; i < database.data.length; ++i) {
    console.log(`\nQ${i + 1} - ${database.data[i].question}\n`);
    for (let key in database.data[i].options) {
      console.log(`${key} - ${database.data[i].options[key]}`);
    }

    let user_answer = readlineSync.question("Enter your answer ");
    if (user_answer === database.data[i].correct_answer) {
      console.log(kuler("Your answer is correct", "#22c55e"));
      score++;
    } else {
      console.log(kuler("Incorrect answer", "#991b1b"));
      console.log(
        kuler(`Correct answer is ${database.data[i].correct_answer}`, "#67e8f9")
      );
    }
  }
}

const leaderboard = {
  data: [
    {
      name: "Arpit",
      score: 10
    },
    {
      name: "Rohan",
      score: 90
    },
    {
      name: "Rohan",
      score: 11
    }
  ]
};
function show_high_scorer(leaderboard) {
  leaderboard.data.push({ name: user_name, score: score });
  let sorted_leaderboard = leaderboard.data.sort((a, b) => b.score - a.score);
  console.log("\nCheck your position in LeaderBoard");
  console.log("------------------------------------------------------");

  for (let leader of sorted_leaderboard) {
    console.log(kuler(`${leader.name}-${leader.score}`, "#d946ef"));
  }
}

show_question_and_options(database);
console.log(kuler(`${user_name} score is ${score}`, "#fef08a"));
leaderboard.data.sort();

show_high_scorer(leaderboard);
