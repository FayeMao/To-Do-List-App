const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
let tasksArray = [] // Array to store tasks

function addTask(task) {
    if (inputBox.value === '') {
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value; // This will be nested in li
        tasksArray.push(inputBox.value); // Add item to the list
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value =""; // Clears this every time you press the button
    saveData();
} 

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        const taskToRemove = e.target.parentElement.textContent.replace("\u00d7", "").trim();
        tasksArray = tasksArray.filter(task => task !== taskToRemove); // Will remove all tasks that have the same string
        e.target.parentElement.remove(); // Remove the list item from the DOM
    };
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

localStorage.clear();
