// Define UI Variables 
const taskInput = document.querySelector('#task');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const changer = document.querySelector('#order');
const reloadIcon = document.querySelector('.fa');
let DB;
document.addEventListener('DOMContentLoaded', () => {  
    let TasksDB = indexedDB.open('tasks', 1);
    TasksDB.onerror = function() {
            console.log('There was an error');
        }
    TasksDB.onsuccess = function() {
        console.log('Database Ready');
        DB = TasksDB.result;
        displayTaskList();
    }
    TasksDB.onupgradeneeded = function(e) {
        let db = e.target.result;

        let objectStore = db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });

        objectStore.createIndex('taskname', 'taskname', { unique: false });
        objectStore.createIndex('date', 'date',{unique:false});

        console.log('Database ready and fields created!');
    }
});
form.addEventListener("click", addNewTask);
function addNewTask(e) {
    // Check empty entry
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";
        return;
    }
  let newTask = {
      taskname: taskInput.value,
      date:new Date()
  }
  let transaction = DB.transaction(['tasks'], 'readwrite');
  let objectStore = transaction.objectStore('tasks');

  let request = objectStore.add(newTask);
  request.onsuccess = () => {
      form.reset();
  }
  transaction.oncomplete = () => {
      displayTaskList();
  }
  transaction.onerror = () => { console.log('error'); }
}
function displayTaskList() {
    while (taskList.firstChild) {   taskList.removeChild(taskList.firstChild);}
    let objectStore = DB.transaction('tasks').objectStore('tasks');
    objectStore.openCursor().onsuccess = function(e) {
        let cursor = e.target.result;
        if (cursor) {
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.setAttribute('data-task-id', cursor.value.id);
            li.date = cursor.value.date;
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = "<i class=\"fa fa-remove\"></i>&nbsp;<a href=\"./change.html?id=" + cursor.value.id + "\"><i class=\"fa fa-pencil\"></i> </a>";
            li.appendChild(link);
            li.appendChild(document.createTextNode(cursor.value.taskname));
            taskList.appendChild(li);
            cursor.continue();
        }
    }
}
clearBtn.addEventListener('click', clearAllTasks);
function clearAllTasks() {
    let transaction = DB.transaction("tasks", "readwrite"); 
    let tasks = transaction.objectStore("tasks");
    tasks.clear(); 
    displayTaskList();
    console.log("Tasks Cleared !!!");
}
taskList.addEventListener('click', removeTask);
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            let taskID = Number(e.target.parentElement.parentElement.getAttribute('data-task-id'));
            let transaction = DB.transaction(['tasks'], 'readwrite');
            let objectStore = transaction.objectStore('tasks');
            objectStore.delete(taskID);
            transaction.oncomplete = () => {
                e.target.parentElement.parentElement.remove();
            }
        }
    }
}
changer.addEventListener('change', sortDisplay);
function sortDisplay(e){
    while (taskList.firstChild) {  taskList.removeChild(taskList.firstChild);}
    let objectStore = DB.transaction('tasks').objectStore('tasks');
    console.log(e.target);
        objectStore.index('date').openCursor(null, 'next').onsuccess = function(e) {
            let cursor = e.target.result;
    
            if (cursor) {
                const li = document.createElement('li');
                li.className = 'collection-item';
                li.setAttribute('data-task-id', cursor.value.id);
                li.date = cursor.value.date;
    
                const link = document.createElement('a');
                link.className = 'delete-item secondary-content';
                link.innerHTML = `
                 <i class="fa fa-remove"></i>
                &nbsp;<a href="./change.html?id=${cursor.value.id}"><i class="fa fa-edit"></i> </a>
                `;
                li.appendChild(link);
                li.appendChild(document.createTextNode(cursor.value.taskname));
                if(e.target.value == "Ascendning"){
                    taskList.appendChild(li);
                }else{
                    taskList.prepend(li);
                }
                cursor.continue();
            }
        }   
}