const result = document.getElementById("result");

const btns = document.getElementsByTagName('button');
console.log(btns)

var equation = [];

const appendToScreen = (num) => {
	equation.push(num);
	result.innerHTML = equation.join("");
}

const showResult = () => {
	equationResult = eval(equation.join(""));
	equation = [equationResult];	
	result.innerHTML = equationResult;
}

const setDefault = () => {
	result.innerHTML = "0";
	equation = []
}

const deleteLast = () => {
	equation.pop();
	result.innerHTML = equation.join("");
	if(!equation.length) result.innerHTML = "0"
}