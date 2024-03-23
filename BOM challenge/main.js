
let inputText = document.querySelector("#text");
let tasks = document.querySelector(".tasks");
let submit = document.querySelector("#submit");

let taskOfArray = [];

if (localStorage.getItem("tasks")) {
    taskOfArray = JSON.parse(localStorage.getItem("tasks"));
}
getDataFromLocalStorage();

submit.onclick = function () {
    if (inputText.value !== "") {
        addTaskToarray(inputText.value);
        inputText.value = "";
    };
};

tasks.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
        deletTasksWith(e.target.parentElement.getAttribute("data-id")) 
        e.target.parentElement.remove()
    }
    if (e.target.classList.contains("divTask")) {
        taskToggleStatus(e.target.getAttribute("data-id"))
        e.target.classList.toggle("done")
    }
})

function addTaskToarray(tasktext) {
    const info = {
        id: Date.now(),
        title: inputText.value,
        completed: false,
    };
    taskOfArray.push(info);
    addElementsToPage(taskOfArray);
    addDataToLocalStorage(taskOfArray);
};

function addElementsToPage(taskOfArray) {
    tasks.innerHTML = "";
    taskOfArray.forEach((info) => {
        let div = document.createElement("div");
        div.className = "divTask";
        if (info.completed) {
            div.className = "divTask Done"
        }
        div.setAttribute("data-id", info.id);
        div.appendChild(document.createTextNode(info.title));
        let span = document.createElement("span");
        span.className = "del";
        span.appendChild(document.createTextNode("delete"));
        div.appendChild(span);
        tasks.appendChild(div);
    });
};

function addDataToLocalStorage(taskOfArray) {
    window.localStorage.setItem("tasks", JSON.stringify(taskOfArray))
};

function getDataFromLocalStorage() {
    let data =   window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementsToPage(tasks);
    };
};
function deletTasksWith(taskId) {
    taskOfArray = taskOfArray.filter((info) => info.id != taskId);
    addDataToLocalStorage(taskOfArray);
};
function taskToggleStatus(taskId) {
for (let i = 0; i <taskOfArray.length; i++) {
    if (taskOfArray[i].id == taskId) {
        taskOfArray[i].completed == false ?  taskOfArray[i].completed = true : taskOfArray[i].completed = false
    };
    };
    addDataToLocalStorage(taskOfArray);
};

