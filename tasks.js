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

        //create a button to edit task
        var editButton = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editButton.appendChild(editText);
        editButton.onclick = editTask;
        li.appendChild(editButton);
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
function editTask() {
    // Get the parent li element
    var li = this.parentNode;

    // Get the task text
    var taskText = li.childNodes[0].nodeValue;

    // Create an input element for editing the task
    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = taskText;

    // Replace the task text with the input element
    li.replaceChild(editInput, li.childNodes[0]);

    // Change the edit button text to "Save"
    this.childNodes[0].nodeValue = "Save";

    // Change the edit button onclick function to saveTask
    this.onclick = saveTask;
}

function saveTask() {
    // Get the parent li element
    var li = this.parentNode;

    // Get the input element with the edited task
    var editInput = li.childNodes[0];

    // Get the edited task text
    var editedTaskText = editInput.value;

    // Replace the input element with the new task text
    var newTaskText = document.createTextNode(editedTaskText);
    li.replaceChild(newTaskText, editInput);

    // Change the edit button text back to "Edit"
    this.childNodes[0].nodeValue = "Edit";

    // Change the edit button onclick function back to editTask
    this.onclick = editTask;
}
function searchTasks() {
    // Get the search query
    var query = searchInput.value.toLowerCase();

    // Loop through all the list items
    for (var i = 0; i < taskList.children.length; i++) {
        var li = taskList.children[i];

        // Check if the task matches the search query
        if (li.textContent.toLowerCase().includes(query)) {
            li.style.display = "";
        } else {
            li.style.display = "none";
        }
    }

    // Show all the list items if the search bar is empty
    if (query === "") {
        for (var i = 0; i < taskList.children.length; i++) {
            var li = taskList.children[i];
            li.style.display = "";
        }
    }
}

document.getElementById("addButton").addEventListener("click", addTask);
searchInput.addEventListener("input", searchTasks);
