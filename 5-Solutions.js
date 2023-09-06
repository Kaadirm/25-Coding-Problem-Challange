/*Complete the solution so that it reverses the string passed into it.
------   1   -------

'world'  =>  'dlrow'
'word'   =>  'drow'

SOLUTION

function solution(str){
  
 return str.split("").reverse().join("")
  
}


------   2   -------

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

SOLUTION

function countSheeps(arrayOfSheep) {
  let count = 0
  for (let i= 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i]){
      count++
    }
    else{
    }
  }
  return count
}

------   3   -------

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

SOLUTION

function getCount(str) {
  const myArray = str.split("")
  let count = 0
  for (let i= 0; i < myArray.length; i++){
    switch(myArray[i]){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        count++;
        break;
    }
  }
  return count
}

------   4   -------

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

SOLUTION 

function evenOrOdd(number) {
  if ((number % 2) === 0 ){
      return "Even"
      }
  else{
      return "Odd"
  }
}

------   5   -------
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

SOLUTION

function greet(name){
  if(name === "Johnny"){
    return "Hello, my love!";
  }
  {
    return "Hello, " + name + "!";
  }
}

*/
