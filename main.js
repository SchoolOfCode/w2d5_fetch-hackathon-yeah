const h2Categories = document.querySelector("#h2-categories");
let ul = document.querySelector("#categories");
let btnStart = document.querySelector("#btnStart");
let parag = document.querySelector("#parag");
let listItems = [];

// A function for fetching data
async function getCategories() {
  const response = await fetch("https://opentdb.com/api.php?amount=50");
  const data = await response.json();
  const dataLength = data.results.length;

  for (let i = 0; i < dataLength; i++) {
    if (listItems.includes(data.results[i].category) === false) {
      listItems.push(data.results[i].category);
      listFunction(data.results[i].category);
    }
  }
}

getCategories();

function listFunction(category) {
  let list = document.createElement("li");
  list.innerText = "▶ " + category;
  ul.appendChild(list);
}

async function getQuestions() {
  const response = await fetch("https://opentdb.com/api.php?amount=10");
  const data = await response.json();
  for (let i = 0; i < data.results.length; i++) {
    inputFunction(data.results[i].question);
    inputAnswerFunction(data.results[i].correct_answer);
    for (let j = 0; j < data.results[i].incorrect_answers.length; j++) {
      inputAnswerFunction(data.results[i].incorrect_answers[j]);
    }
  }
}

function inputFunction(question) {
  let p = document.createElement("p");
  p.setAttribute("type", "text");
  p.innerText = "Q. " + question;
  parag.appendChild(p);
}

function inputAnswerFunction(answer) {
  let inp = document.createElement("input");
  let span = document.createElement("span");
  inp.setAttribute("type", "radio");
  span.innerText = answer;
  parag.appendChild(inp);
  parag.appendChild(span);
}
function getType(type) {
  let;
}

btnStart.addEventListener("click", getQuestions);
