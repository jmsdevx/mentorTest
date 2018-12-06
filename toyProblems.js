//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function(str) {
    let split = str.split("");
    let reversed = split.reverse();
    let joined = reversed.join("");
    return joined;
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function(array) {
    let filtered = array.filter((e, i) => {
      if (array.indexOf(e) == i) {
        return e;
      }
    });
    return filtered;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function(str) {
    let splitter = str.split(" ");
    let mapped = splitter.map((e, i) => {
      return e.charAt(0).toUpperCase() + e.slice(1);
    });
    return mapped.join(" ");
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function(str) {
    let regex = str.match(/[aeiou]/gi);
    return regex === null ? 0 : regex.length;
  },

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function(num) {
    let prime = num != 1;
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  },

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo: "1020",

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: "Hello World", //Hello is in scope of the nested function
  log2: undefined //bar is out of scope
};
