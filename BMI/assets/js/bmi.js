let weight = parseInt(prompt("Enter Weight"));
let height = parseInt(prompt("Enter Height"));

let calcBmi = function(w, h){
	let bmi = weight/(height * height);
	bmi = Number(bmi.toFixed(2));
	return bmi;
}

let finalBMI = calcBmi(weight, height);

if (finalBMI < 18.5){
	console.log("Underweight");
} else if (finalBMI < 24.9){
	console.log("Normal");
} else if (finalBMI < 29.9){
	console.log("Overweight");
} else{
	console.log("Obese");
}
console.log(finalBMI)