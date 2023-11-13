let halfInput = document.getElementById("half-input");
let halfButton = document.getElementById("half-button");

let fortuneInput = document.getElementById("fortune-input");
let fortuneButton = document.getElementById("fortune-button");
let fortuneOutput = document.getElementById("fortune-output");

let fortunes = ["you will get a hug tomorrow", "you will get a free car soon", "you will find a free dinner tonight"]

fortuneButton.addEventListener("click", function(){
	var currentInputText = fortuneInput.value;
	generate(currentInputText);
	restyleSize();
	restyleColor();
});

halfButton.addEventListener("click", function(){
	let numberToDivide = halfInput.value;
	excitingMath(numberToDivide);
});


function generate(incUserInput){
	let randomIndex = Math.floor(Math.random() * fortunes.length);
	console.log(randomIndex);
	let selectedRandomFortunesText = fortunes[randomIndex];
	console.log(selectedRandomFortunesText);
	fortuneOutput.innerText = incUserInput + ": " + selectedRandomFortunesText;
}

function excitingMath(incomingNumber) {
	let mathResult = (incomingNumber / 2.0) * 10000;
	alert(mathResult);
}


function restyleSize(){
	let fontSizes = ["30px", "10px", "100px"];
	let randomIndex = Math.floor(Math.random()*fontSizes.length);
	fortuneOutput.style.fontSize = fontSizes[randomIndex]; 

}

function restyleColor(){
	let fontColor = ["#521250", "#1c271", "#FF0000"];
	let randomIndex = Math.floor(Math.random() * fontColor.length);
	console.log(randomIndex);
	fortuneOutput.style.fontColor = fontColor[randomIndex]; 

}












