// Method getElementById takes the HTML element so it can be modified / used in the js code.
// This is an input box when user can type a task name
const taskInput = document.getElementById("task-input");
// This is a button element to add a task to the list
const btnAdd = document.getElementById("add-btn");
// addEventListener method can be used for example to add a functionality to elements, e.g. click
// When "Add" button clicked the text from the input will be saved as a span inside the list items
btnAdd.addEventListener("click", function () {
  // getting the "ul" element with ID = my-list
  const list = document.getElementById("my-list");
  // creates new element "li"
  const listItem = document.createElement("li");
  // creates new element "span" inside this element will task text be displayed at the UI
  const taskText = document.createElement("span");
  // restricting that the input box cannot be executed
  // will display a message when the box was left blank and button clicked
  const myInput = taskInput.value;
  if (myInput === "") {
    alert("Please enter new task!");
    return;
  }

  // Creating a checkbox element, seting up a random ID
  const newCheckBoxID = "checkbox" + Date.now();
  const inputCheckBox = document.createElement("input");
  inputCheckBox.setAttribute("type", "checkbox");
  inputCheckBox.setAttribute("id", newCheckBoxID);

  // display checkbox inside the list
  listItem.appendChild(inputCheckBox);
  // display li element with span inside
  listItem.appendChild(taskText);
  // display list elements inside ul element
  list.appendChild(listItem);

  // adding a text decoration to the span element (task) when checkbox checked
  const checkbox = document.getElementById(newCheckBoxID);
  if (checkbox) {
    checkbox.addEventListener("change", function () {
      const parentList = checkbox.parentElement;
      const textElement = parentList.querySelector("span");
      if (checkbox.checked) {
        textElement.style.textDecoration = "line-through";
      } else {
        textElement.style.textDecoration = "none";
      }
    });
  }

  // creating a delete button element ansd setting ID
  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("id", "btn-delete");
  btnDelete.innerHTML = "Delete";
  // creating an edit button element and setting ID
  const btnEdit = document.createElement("button");
  btnEdit.setAttribute("id", "btn-edit");
  btnEdit.innerHTML = "Edit";
  // creating a button container <div>
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  // displaying buttons inside the container
  buttonContainer.appendChild(btnDelete);
  buttonContainer.appendChild(btnEdit);
  // displaying container inside the list item <li>
  listItem.appendChild(buttonContainer);
  // appendChild method is used to display the elements at the UI
  // display span element with text from the input
  taskText.appendChild(document.createTextNode(myInput));

  // adding functionality to the delete button
  btnDelete.addEventListener("click", function () {
    list.removeChild(listItem);
  });
});
