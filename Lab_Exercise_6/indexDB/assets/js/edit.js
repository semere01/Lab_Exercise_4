const form = document.querySelector('#task-form'); 
const taskInput = document.querySelector('#task'); 

const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));

var DB;
document.addEventListener('DOMContentLoaded', () => {
    let TasksDB = indexedDB.open('tasks', 1);

    TasksDB.onerror = function() {
            console.log('There was an error');
        }
    TasksDB.onsuccess = function() {
        DB = TasksDB.result;
        displayTask();
    }
    function displayTask() {
        var transaction = DB.transaction(['tasks']);
        var objectStore = transaction.objectStore('tasks');
        var request = objectStore.get(id);
        request.onsuccess = function(event) {
            if (request.result) {
                taskInput.value = request.result.taskname;

            } else {
                console.log('No data record');
            }
        };
        request.onerror = function(event) {
            console.log('Transaction failed');
        };
    }
    form.addEventListener('submit', updateTask);
    function updateTask(e) {
        e.preventDefault();
        console.log('was here');
        // Check empty entry
        if (taskInput.value === '') {
            taskInput.style.borderColor = "red";

            return;
        }
       objectStore = DB.transaction(['tasks'], "readwrite").objectStore('tasks');
       request = objectStore.get(id);
        request.onsuccess = ()=>{
            const data = request.result;
            data.taskname = taskInput.value;
            objectStore.put(data);
        }
        history.back();
    }
});