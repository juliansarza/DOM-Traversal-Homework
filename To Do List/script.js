// JavaScript variables
const taskArray = [];
// console.log(taskArray);

// DOM variables
const title = document.getElementById("title");
const taskEl = document.getElementById("task");
const btnEl = document.getElementById("btn");

title.innerText = "Julian's To Do List";
btnEl.innerText = "Add Task";

// function definitions
function addTask() {
    const entry = prompt("Enter a new task.");
    taskArray.push(entry);
    const newLi = document.createElement("li");
    newLi.innerText = entry;
    taskEl.append(newLi);
}

// Event listeners
btnEl.addEventListener("click", () => {
    addTask();
});

taskEl.addEventListener("click", function handleClick(event) {

    event.target.className = "strikeThrough";

    setTimeout(() => {
        console.log("Delayed for 1 second.");
        event.target.remove();
      }, 1000)


    
}
);