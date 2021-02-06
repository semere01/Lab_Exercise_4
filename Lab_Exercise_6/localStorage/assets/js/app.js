// Define UI Variables 
const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector('.fa'); 
form.addEventListener('submit', addNewTask);
clearBtn.addEventListener('click', clearAllTasks);
filter.addEventListener('keyup', filterTasks);
taskList.addEventListener('click', removeTask);
reloadIcon.addEventListener('click', reloadPage);
function addNewTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    } 
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    addToDatabase(taskInput.value);
}
function clearAllTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    clearAllTasksFromDB();
}

function filterTasks(e) {
    var userInp = filter.value;
    document.querySelectorAll(".collection-item").forEach(function(aa) {
        if(aa.textContent.includes(userInp)){
            aa.style.display = "block";
        } else{
            aa.style.display = "none";
        }
});
}
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
    removeFromDB(e.target.parentElement.parentElement);
}
function reloadPage() {
    location.reload();
}