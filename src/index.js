document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    // Check if the input is not empty before proceeding
    if (taskDescription.trim() !== "") {
      // Create a new list item element
      const listItem = document.createElement("li");

      // Set the text content of the list item to the task description
      listItem.textContent = taskDescription;

      // Append the new list item to an existing task list (or create one if not exists)
      const taskList = document.getElementById("tasks");
      if (!taskList) {
        const newList = document.createElement("ul");
        newList.id = "tasks";
        document.body.appendChild(newList);
      }

      taskList.appendChild(listItem);

      // Clear the input field for the next task
      document.getElementById("new-task-description").value = "";
    }
  });
});
