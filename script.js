// Creates all the required elements and sets their attributes accordingly.;
// const taskContainer = document.querySelector('#tasks');

const submitButton = document.querySelector('#new-task-submit');

// call a function when the window loads completely
window.addEventListener('DOMContentLoaded', () => {
    // get the tasks from the local storage
    const tasks = localStorage.getItem('tasks');
    // turn the task array from string back to an array
    const taskArr = JSON.parse(tasks);

    // 
    taskArr.forEach((task) => {
        createTask(task);
    })
});

// call a function whenever the 'add task' button is clicked
submitButton.addEventListener('click', (event) => {
    // since the button has a value of readonly, this allows it to become editable
  event.preventDefault();
  
//   get the input bar by its id from the html;
//   where the user will input the text
  const inputBar = document.querySelector('#new-task-input');
  createTask(inputBar.value);

  saveData();

  inputBar.value = '';

})

// create a new task
const createTask = (taskData) => {
    // create each of the divs in the tasks div, and set their relevant attributes
  const taskContainer = document.querySelector('#tasks');
  
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', 'task');
  
  const content = document.createElement('div');
  content.setAttribute('class', 'content');
  
  const actions = document.createElement('div');
  actions.setAttribute('class', 'actions');
  
//   create the text element in the content div
  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('class', 'text');
  text.setAttribute('value', taskData);
  text.setAttribute('readonly', 'readonly');
  
//   create the edit button in the actions div
  const edit = document.createElement('button');
  edit.setAttribute('class', 'edit');
  edit.textContent = 'EDIT';

//   run a function when the edit button is clicked
  edit.addEventListener('click', () => {
    // check the text content of the edit button to determine what to do
    if(edit.textContent === 'EDIT'){
        // make the text editable if the button says 'edit', and change it to save during editing
      edit.textContent = 'SAVE';
      text.removeAttribute('readonly')
    }else {
      edit.textContent = 'EDIT';
      text.setAttribute('readonly', 'readonly');
      saveData();
    }
    
  });
  
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.textContent = 'DELETE';

//   run a function when the delete button is clicked
  deleteButton.addEventListener('click', () => {
    taskContainer.removeChild(todoDiv);

    saveData();
  })

  // Now we'll fix(append) all the required elements in where they should be.
  todoDiv.appendChild(content);
  todoDiv.appendChild(actions);
  content.appendChild(text);
  actions.appendChild(edit);
  actions.appendChild(deleteButton);
  taskContainer.appendChild(todoDiv);


  deleteButton.addEventListener('click', () => {
    taskContainer.removeChild(todoDiv);
  })

}

// to save the data to local storage
const saveData = () => {
    // grab all the task divs
  const tasks = document.querySelectorAll('.task');

//   create an empty array to store the task input data
  const taskArr = [];
  tasks.forEach((task) => {
    // transverse through the array and get each of the input elements
    const input = task.querySelector('input');
        // put each of the collected input value (text) into the array
        taskArr.push(input.value)
  });

    // save to local storage after converting to a string with inbuilt JSON
  localStorage.setItem('tasks', JSON.stringify(taskArr));
}



// todoCollectionDiv.innerText = 'Hello test'
// const inputDiv = document.createElement('div');
// document.main.section.todoCollectionDiv.appendChild();