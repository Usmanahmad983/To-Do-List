let taskInput = document.querySelector(".task-input");
let listContainer = document.querySelector(".list-container");

function addTask() {
    if (taskInput.value === '') {
        alert("You must write somthing!");
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        listContainer.appendChild(li);
        // for icons change in li 
        let span = document.createElement("span")
        // span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    taskInput.value = ""; // after putting value input will become empty again for new task
    saveData(); // used so that data will be save after refreshing the website 
}
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // when user will check or uncheck the task then we will also call this function
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData(); // when user will delete the task then we will also call this function
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();

