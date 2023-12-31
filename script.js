document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var addTaskModal = document.getElementById("addTaskModal");

    // Get the button that opens the modal
    var btn = document.getElementById("addTask");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        addTaskModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        addTaskModal.style.display = "none";
    }

   // When the user submits the form, close the modal
   document.getElementById("taskForm").onsubmit = function(e) {
    e.preventDefault();
    addTaskModal.style.display = "none";

    // Get the values from the form
    var taskName = document.getElementById("taskName").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var taskDueDate = document.getElementById("taskDueDate").value;
    var taskDueTime = document.getElementById("taskDueTime").value;

    // Create a new task element
    var taskElement = document.createElement("div");
    taskElement.innerHTML = `
        <h2>${taskName}</h2>
        <p>${taskDescription}</p>
        <p>Due: ${taskDueDate} at ${taskDueTime}</p>
    `;

    // Append the new task to the main section
    var mainSection = document.getElementsByTagName("main");
    mainSection.appendChild(taskElement);
}
});
