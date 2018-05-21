document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
});

const field = document.getElementById("new-task-description")
const list = document.getElementById("tasks")

const submissionForm = document.getElementById("create-task-form")
submissionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var newField = document.createElement("li")
  var content = document.createTextNode(e.target.children[1].value)
  newField.appendChild(content);
  list.appendChild(newField)
})
