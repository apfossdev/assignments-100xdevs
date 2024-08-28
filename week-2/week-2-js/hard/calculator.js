/*
  Implement a class `Calculator` having below methods
    - initialize a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {

  constructor(){
    let result;
    this.clear();
  }

  add(num){
    this.result += num;
  }
  subtract(num){
    this.result -= num;
  }
  multiply(num){
    this.result *= num;
  }
  divide(num){
    if(num == 0) throw new Error;
    this.result /= num;
  }
  clear(){
    this.result = 0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    let charArr = str.replaceAll(" ","").split("");
    for(let i = 0; i < charArr.length; i++){
      if(charArr[i] == '0'){
        if(charArr[i-1] == '/'){
          throw new Error;
        }
      }
    }
    this.result = (eval(str));
  }

}

let newCalc = new Calculator(); 
console.log(newCalc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7"));

// newCalc.subtract(20);
// newCalc.subtract(40);
// newCalc.multiply(10);
// newCalc.divide(10);
// console.log(newCalc.getResult());

module.exports = Calculator;