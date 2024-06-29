document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');
    
    const taskTextNode = document.createTextNode(taskText);
    newTask.appendChild(taskTextNode);
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
}
