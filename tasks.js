// JavaScript code
var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");
var form = document.getElementById("taskForm");
var error = document.getElementById("error");

function addTask() {
    if (taskInput.value === "") {
        alert("Please enter a task.");
    }
    else {
        // Create a new list item
        var li = document.createElement("li");
        var taskText = document.createTextNode(taskInput.value);
        li.appendChild(taskText);

        // Create a checkbox for the completed task
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = completeTask;
        li.appendChild(checkbox);

        // Create a button to delete the task
        var deleteButton = document.createElement("button");
        var deleteText = document.createTextNode("Delete");
        deleteButton.appendChild(deleteText);
        deleteButton.onclick = deleteTask;
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = "";
        error.textContent = ""
    }
}

function completeTask() {
    // Get the parent li element
    var li = this.parentNode;

    // Toggle the "completed" class on the li element
    li.classList.toggle("completed");
}

function deleteTask() {
    // Get the parent li element
    var li = this.parentNode;

    // Display a confirmation dialog before deleting the task
    if (confirm("Are you sure you want to delete this task?")) {
        // Remove the li element from the list
        taskList.removeChild(li);
    }
}
