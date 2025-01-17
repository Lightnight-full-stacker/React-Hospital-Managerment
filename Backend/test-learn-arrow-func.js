// Arrow function vs Normal function
// 
// Arrow function pros:
// variable becomes a function
//
// Reference:
// https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/arrow_function.html
/////////////////////////////////////


//1. Normal function
function logInfo(number) {
	return number * number;
}
input = 3;
var return_var = logInfo(input)
console.log(return_var);


//2. Arrow function
input = 4;
var return_var = (number) => {
    return number * number
}
console.log(return_var(input));


//3. Arrow function - no arguments
var return_var = () => {
    var number = 5;
    return number * number
}
console.log(return_var());


/////////////////////////////////////
// output:
// 9
// 16
// 25