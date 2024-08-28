/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let charArr = str
    .toLowerCase()
    .replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, "")
    .split("");
  // console.log(charArr);
  let i = 0;
  let j = charArr.length-1;
  while(i<=j){
    if(charArr[i] != charArr[j]){
      return false;
    }
    else{
      i++;
      j--;
    }
  }
  return true;
}
// isPalindrome("Able, was I ere I saw Elba!");
module.exports = isPalindrome;
