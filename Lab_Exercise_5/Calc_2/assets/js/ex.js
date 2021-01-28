const addBtn = document.querySelector("#sum");
const diffBtn = document.querySelector("#diff");
const prodBtn = document.querySelector("#prod");
const divBtn = document.querySelector("#div");
const inp1 = document.querySelector("#n1");
const inp2 = document.querySelector("#n2");
const inp3 = document.querySelector("#n3");
const pwrBtn = document.querySelector("#pwr");
const sqrtBtn = document.querySelector("#sqrt");
var inp3Vals = [];





addBtn.addEventListener("click", add);
diffBtn.addEventListener("click", diff);
prodBtn.addEventListener("click", prod);
divBtn.addEventListener("click", div);
pwrBtn.addEventListener("click", pwr);
sqrtBtn.addEventListener("click", sqrt);





function add(){
	var sum = 0;
	inp3Vals = (inp3.value.split(" "))
	inp3Vals.forEach(function(i){sum+=parseInt(i);})
	document.getElementById("ans").innerHTML = sum;
}
function diff(){
	document.getElementById("ans").innerHTML = parseInt(document.querySelector("#n1").value) - parseInt(document.querySelector("#n2").value);
}
function prod(){
	var product = 1;
	inp3Vals = (inp3.value.split(" "))
	inp3Vals.forEach(function(i){product*=parseInt(i);})
	document.getElementById("ans").innerHTML = product;
}
function div(){
	if (parseFloat(document.querySelector("#n2", 2).value) == 0){
		document.getElementById("ans").innerHTML = "Cannot divide by zero";
		return
	}
	document.getElementById("ans").innerHTML = parseFloat(document.querySelector("#n1").value, 2) / parseFloat(document.querySelector("#n2", 2).value);
}
function pwr(){
	document.getElementById("ans").innerHTML =  parseFloat(document.querySelector("#n1").value, 2) ** parseFloat(document.querySelector("#n2", 2).value);
}
function sqrt(){
	document.getElementById("ans").innerHTML =  parseFloat(document.querySelector("#n1").value, 2) ** (1/parseFloat(document.querySelector("#n2", 2).value));
}




	








	// let choice = prompt("What service do you want? \n 1. Sum\n 2. Subtraction\n 3. Multiplication\n 4. Division");
 // if (choice == "1"){
 // 	let n = parseInt(prompt("How many numbers do you want to enter?"));
 // 	let arr = new Array();
 // 	let ans = 0;
 // 	for (let i = 0; i < n; i++){
 // 		arr[i] = parseInt(prompt("Enter number " + (i+1)));
 // 	}
 // 	arr.forEach(function(member){
 // 		ans+=member;
 // 	})
 // 	console.log(ans);
 // }
 // if (choice == "2"){
 // console.log("Difference: " + diff(prompt("first number for substraction"), prompt("second number for substraction")));
 // }
 // if (choice == "3"){
 // 	let n = parseInt(prompt("How many numbers do you want to enter?"));
 // 	let arr = new Array();
 // 	let ans = 1;
 // 	for (let i = 0; i < n; i++){
 // 		arr[i] = parseInt(prompt("Enter number " + (i+1)));
 // 	}
 // 	arr.forEach(function(member){
 // 		ans*=member;
 // 	})
 // 	console.log(ans);
 // }
 // if (choice == "4"){
	// let n1 = prompt("first number for div");
	// let n2 = prompt("second number for div");
	// console.log("Quotient: " + div(n1,n2));
	// // while (true){console.log("a")}
 // }

 

