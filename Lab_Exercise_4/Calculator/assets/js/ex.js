function sum(n1, n2){
	let ans = parseInt(n1) + parseInt(n2);
	return ans;
}

function diff(n1, n2){
	let ans = parseInt(n1) - parseInt(n2);
	return ans;
}

function prod(n1, n2){
	let ans = parseInt(n1) * parseInt(n2);
	return ans;
}

function div(n1, n2){
	if (parseInt(n2) != 0) {let ans = parseInt(n1) / parseInt(n2); return ans;}
	return "Cannot divide by zero";
}


(function() {
	let choice = prompt("What service do you want? \n 1. Sum\n 2. Subtraction\n 3. Multiplication\n 4. Division");
 if (choice == "1"){
 	let n = parseInt(prompt("How many numbers do you want to enter?"));
 	let arr = new Array();
 	let ans = 0;
 	for (let i = 0; i < n; i++){
 		arr[i] = parseInt(prompt("Enter number " + (i+1)));
 	}
 	arr.forEach(function(member){
 		ans+=member;
 	})
 	console.log(ans);
 }
 if (choice == "2"){
 console.log("Difference: " + diff(prompt("first number for substraction"), prompt("second number for substraction")));
 }
 if (choice == "3"){
 	let n = parseInt(prompt("How many numbers do you want to enter?"));
 	let arr = new Array();
 	let ans = 1;
 	for (let i = 0; i < n; i++){
 		arr[i] = parseInt(prompt("Enter number " + (i+1)));
 	}
 	arr.forEach(function(member){
 		ans*=member;
 	})
 	console.log(ans);
 }
 if (choice == "4"){
	let n1 = prompt("first number for div");
	let n2 = prompt("second number for div");
	console.log("Quotient: " + div(n1,n2));
	// while (true){console.log("a")}
 }

 
})();
