const taskInput = document.querySelector('#task'); //the task input text field
const form = document.querySelector('#task-form'); //The form at the top
const filter = document.querySelector('#filter'); //the task filter text field
const taskList = document.querySelector('.collection'); //The ul
const clearBtn = document.querySelector('.clear-tasks');
const reloadIcon = document.querySelector(".fa");
const flipornot = document.querySelector("#flipornot");

// form submit
form.addEventListener('submit', addNewTask);
// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);
// Filter Task
filter.addEventListener('keyup', filterTasks);
// Remove task event [event delegation]
taskList.addEventListener("click", removeTask);
reloadIcon.addEventListener("click", reloadPage);
flipornot.addEventListener("change", byTime);



// Add New Task Function definition
function addNewTask(e) {
 if (taskInput.value === ""){
 	taskInput.style.borderColor = "red";
 	return;
 }
 const li = document.createElement("li");
 li.className = "collection-item";
 li.appendChild(document.createTextNode(taskInput.value));
 const link = document.createElement('a');
 link.innerHTML = '<i class = "fa fa-remove"></i>';
 link.className = "delete-item secondary-content";
 li.appendChild(link);
 taskList.appendChild(li);


 e.preventDefault(); //disable form submission
}
// Clear Task Function definition
function clearAllTasks() {
 while (taskList.firstChild){
 	taskList.removeChild(taskList.firstChild);
 }
}

function filterTasks(e) {
	var userInp = filter.value;
	// document.querySelectorAll(".collection-item").forEach(console.log());
	document.querySelectorAll(".collection-item").forEach(function(aa) {
		if(aa.textContent.includes(userInp)){
			aa.style.display = "block";
		} else{
			aa.style.display = "none";
		}
		// console.log("parent.innerHTML: " + aa.childNodes());
		// console.log("userInp: " + userInp);
});
}

function removeTask(e){
	if (e.target.parentElement.classList.contains("delete-item")){
		if (confirm("Are you sure? ")){
			e.target.parentElement.parentElement.remove();
		}
	}
}

function reloadPage(){
	location.reload();
}

function byTime(){
	var bb = Array.from(taskList.childNodes);
	taskList.innerHTML = "";
	for (let i = bb.length-1; i > 0; i--){
		taskList.append(bb[i]);
	}
}
