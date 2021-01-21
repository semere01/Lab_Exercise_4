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
	let account_balance = 0;
	let cont = true;
	while(cont){
	let choice = prompt("What service do you want? \n 1. Deposit\n 2. Withdraw\n 3. Balance\n 4. Transfer");
 if (choice == "1"){
 	let n = prompt("How much money do you want to deposit?");
 	account_balance += parseInt(n);
  console.log("you have deposited " + n + " to your account.\nYour current balance is " + account_balance + ".");
 }
 else if (choice == "2"){
	 let n = prompt("How much money do you want to Withdraw? (50 - 1000)");
	 if ((n >= 50) && (n <= 1000) && (account_balance>=n)){
	 	account_balance-=parseInt(n);
	 	console.log("You have withdrawn " + n + " ETB.\nYour remaining amount is " + account_balance + ".");
	 } else if (account_balance<n){
	 	console.log("You do not have that amount in your account.");
	 } else {
	 	console.log("Please enter a number withing the specified range of 50-1000.");
	 }
 }
 else if (choice == "3"){
 	console.log("Your current balance is " + account_balance + ".");
 }
  else if (choice == "4"){
	 let n = prompt("How much money do you want to Transfer?");
	 let acc_no = prompt("Please enter account number");
	 if (account_balance>=n){
	 	account_balance-=parseInt(n);
	 	console.log("You have transferred " + n + " ETB to account number " + acc_no + ".\nYour current balance is " + account_balance + ".");
	 } else{
	 	console.log("You do not have that amount in your account.");
	 }
 } else { cont = false;}
}


})();
