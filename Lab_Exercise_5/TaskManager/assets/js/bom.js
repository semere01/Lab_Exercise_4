/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/







// Define UI Variables  here 

var questions = document.querySelectorAll(".collection-item");


for (var i = 0; i <5; i++){
	questions[i].addEventListener("click", function(e){e.target.lastChild.innerHTML = (eval("location." + e.target.firstChild.textContent));
})}
for (var i = 5; i <10; i++){
	questions[i].addEventListener("click", function(e){e.target.lastChild.innerHTML = (eval("navigator." + e.target.firstChild.textContent));
})}
for (var i = 10; i <13; i++){
	questions[i].addEventListener("click", function(e){e.target.lastChild.innerHTML = (eval("screen." + e.target.firstChild.textContent));
})}
for (var i = 13; i <15; i++){
	questions[i].addEventListener("click", function(e){e.target.lastChild.innerHTML = (eval("history." + e.target.firstChild.textContent));
})}
// q1.addEventListener("click", function(e){console.log(eval("location." + e.target.firstChild.textContent));




// function executer(self){
// 	var prefixes = ["location", "navigator", "screen", "history"];
// 	// alert("HEYYY");
// 	console.log(prefixes[0] + "." + self.firstChild.textContext);
// 	if (counter<10){
// 		console.log(prefixes[1] + "." + self.firstChild.textContext());
// 	}
// 	else if (counter<13){
// 		console.log(prefixes[2] + "." + self.firstChild.textContext());
// 	}
// 	else if (counter<15){
// 		console.log(prefixes[3] + "." + self.firstChild.textContext());
// 	}
// }








// Display the BOM Information on the innerHTML of the elements