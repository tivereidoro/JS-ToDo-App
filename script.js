// Creates all the required elements and sets their attributes accordingly.;
// const taskContainer = document.querySelector('#tasks');

const submitButton = document.querySelector('#new-task-submit');

window.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks');
    const taskArr = JSON.parse(tasks);

    taskArr.forEach((task) => {
        createTask(task);
    })
});

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const inputBar = document.querySelector('#new-task-input');
  createTask(inputBar.value);

  saveData();

  inputBar.value = '';

})

const createTask = (taskData) => {
  const taskContainer = document.querySelector('#tasks');
  
  const todoDiv = document.createElement('div');
  todoDiv.setAttribute('class', 'task');
  
  const content = document.createElement('div');
  content.setAttribute('class', 'content');
  
  const actions = document.createElement('div');
  actions.setAttribute('class', 'actions');
  
  const text = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('class', 'text');
  text.setAttribute('value', taskData);
  text.setAttribute('readonly', 'readonly');
  
  const edit = document.createElement('button');
  edit.setAttribute('class', 'edit');
  edit.textContent = 'EDIT';
  edit.addEventListener('click', () => {
    if(edit.textContent === 'EDIT'){
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

  deleteButton.addEventListener('click', () => {
    taskContainer.removeChild(task);
    
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

// to save the data in storage
const saveData = () => {
  const tasks = document.querySelectorAll('.task');

  const taskArr = [];
  tasks.forEach((task) => {
    const input = task.querySelector('input');
        taskArr.push(input.value)
  });

  localStorage.setItem('tasks', JSON.stringify(taskArr));
}



// todoCollectionDiv.innerText = 'Hello test'
// const inputDiv = document.createElement('div');
// document.main.section.todoCollectionDiv.appendChild();