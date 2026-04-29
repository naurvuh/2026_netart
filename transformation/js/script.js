let container = document.querySelector("#container");
let addButton = document.querySelector("#addButton");

let tasks = [
  "- clean room",
  "- call doctor",
  "- walk dog",
  "- make breakfast",
  "- make lunch",
  "- make dinner",
  "- exercise",
  "- journal",
  "- read 10 pages",
  "- homework 1",
  "- homework 2",
  "- study for exam",
  "- pay therapy bill",
  "- pick up medicine",
  "- do laundry",
  "- shower",
  "- practice bass",
  "- write lyrics",
  "- talk to your friends",
  "- apply for internships",
  "- put phone down"];

let index = 0;
addButton.addEventListener("click", function() {
  if (index < tasks.length) { 
    let newPara = document.createElement("p");
  newPara.textContent = tasks[index];
  newPara.classList.add("highlight");

  container.appendChild(newPara);

  index++; // move to next task
} else {
  alert("uh oh. instead of doing your tasks, go lay in your bed and doomscroll for an hour. Did you really think you weere capable of completing all of this? ");
}
});