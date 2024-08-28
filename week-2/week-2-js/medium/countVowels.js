/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let lowercaseStr = str.toLowerCase();
    let charArr = lowercaseStr.split('');
    let counter = 0;
    for(let i = 0; i < charArr.length; i++){
      if(charArr[i] == 'a' || charArr[i] == 'e' || charArr[i] == 'i' || charArr[i] == 'o' || charArr[i] == 'u'){
        counter++;
      }
    }
    return counter;
}

module.exports = countVowels;