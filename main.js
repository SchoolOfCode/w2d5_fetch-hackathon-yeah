const h2Categories = document.querySelector("#h2-categories");
let ul = document.querySelector("#categories");
let listItems = [];

async function getCategories() {
  const response = await fetch("https://opentdb.com/api.php?amount=50");
  const data = await response.json();
  //   console.log(data.results[0].category);
  //   console.log(data.results.length);
  const dataLength = data.results.length;
  for (let i = 0; i < dataLength; i++) {
    // console.log(data.results[i].category);
    listFunction(data.results[i].category);
    // h2Categories.innerText = data.results[i].category;
  }
}

// const btnStart = document.querySelector("#btnStart");
// btnStart.addEventListener("click", getCategories);
getCategories();

function listFunction(category) {
  let list = document.createElement("li");
  list.innerText = category;
  ul.appendChild(list);
}
