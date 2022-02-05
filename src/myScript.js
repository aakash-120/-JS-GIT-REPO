// Only change code below this line
var a= 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";


// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";


const FCC = "freeCodeCamp";
let fact = "is cool!";

fact = "is awesome!";
console.log(FCC, fact);

const sum = 10 + 10;

const difference = 45 - 33;

const product = 8 * 10;

const quotient = 66 / 33;


let myVar = 11;

// Only change code below this line
myVar--;



// Only change code below this line
const myDecimal = 5.7;
const product1 = 5.0 * 1.0;
console.log(product1);

const quotient1 = 4.4 / 2; // Change this line
console.log(quotient1);

const remainder = 5%3;
console.log(remainder);


let aa = 3;
let bb = 17;
let cc = 12;

// Only change code below this line
aa +=  12;
bb += 9 ;
cc += 7;
console.log(aa);
console.log(bb);
console.log(cc);


let aaa = 11;
let bbb = 9;
let ccc = 3;

// Only change code below this line
aaa -=  6;
bbb -= 15;
ccc -= 1;
console.log(aaa);
console.log(bbb);
console.log(ccc);


let aaaa = 5;
let bbbb = 12;
let cccc = 4.6;

// Only change code below this line
aaaa *=  5;
bbbb *=  3;
cccc *= 10;
console.log(aaaa);
console.log(bbbb);
console.log(cccc);

let a2 = 48;
let b2 = 108;
let c2 = 33;

// Only change code below this line
a2 /= 12;
b2 /= 4;
c2 /= 11;


const myStr2 = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

const myStr3= '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr3);

const myStr4 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line
console.log(myStr4);

const myStr5 = "This is the start. "+"This is the end."; // Change this line

let myStr6 = "This is the first sentence.";
myStr6 += " This is the second sentence.";

const myName2 = "freeCodeCamp";
const myStr7 = "Hello, our name is " + myName2 + ", how are you?";
console.log(myStr7);

const someAdjective = "awesome!";
let myStr8 = "freeCodeCamp is ";
myStr8 += someAdjective;
console.log(myStr8);

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;
console.log("Alan Peter".length);

// Setup
let firstLetterOfLastName2 = "";
const lastName2 = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName2[0]; // Change this line
console.log(firstLetterOfLastName);

// Setup
let myStr9 = "Jello World";

// Only change code below this line
// myStr[0] = "H"; // Change this line
// Only change code above this line
myStr9 = "Hello World";
console.log(myStr9);

// Setup
const lastName3 = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName3[2]; // Change this line

// Setup
const lastName4 = "Lovelace";

// Only change code below this line
const lastLetterOfLastName2 = lastName[lastName4.length - 1]; // Change this line
console.log(lastLetterOfLastName2);


// Setup
const lastName5 = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName5[lastName5.length - 2]; // Change this line

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line

// Only change code below this line
const myArray = ["string",10];
// Only change code below this line
const myArray2 = [["Bulls", 23], ["White Sox", 45]];

const myArray3 = [50, 60, 70];
const myData = myArray3[0];
console.log(myData);

// Setup
const myArray4 = [18, 64, 99];
myArray4[0] = 45;
// Only change code below this line

const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData2 = myArray5[2][1];
  console.log(myData2);

  // Setup
const myArray6 = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray6.push(["dog", 3]);

// Setup
const myArray7 = [["John", 23], ["cat", 2]];

// Only change code below this line
const removedFromMyArray = myArray7.pop();
console.log(myArray7);
console.log(removedFromMyArray);


// Setup
const myArray8 = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray2 = myArray8.shift();
console.log(myArray8);
console.log(removedFromMyArray2);


// Setup
const myArray9 = [["John", 23], ["dog", 3]];
const removedFromMyArray3 = myArray.shift();

// Only change code below this line
myArray9.unshift(["Paul", 35]);


const myList10 = [["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15],["Chocolate Bar", 15]];

function reusableFunction() {
    console.log("Hi World");
  }
  
  reusableFunction();


  function functionWithArgs(param1, param2) {
    console.log(param1+param2);
  }
  
  functionWithArgs(1,2);
  functionWithArgs(7,9);


  function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(5);
  const answer2 = timesFive(2);
  const answer3 = timesFive(0);
  console.log(answer);
  console.log(answer2);
  console.log(answer3);



  // Declare the myGlobal variable below this line
let myGlobal=10 ;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


function myLocalScope() {
    // Only change code below this line
  const myVar =0;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
console.log(myOutfit());


// Setup
let sum2 = 0;

function addThree() {
  sum2 = sum2 + 3;
}

// Only change code below this line

function addFive() {
  sum2 = sum2 + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7) ;
console.log(processed);


function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
  
  return arr.shift()
   
    // Only change code above this line
  }
  
  // Setup
  const testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

  function welcomeToBooleans() {
    // Only change code below this line
  
    return true; // Change this line
  
    // Only change code above this line
  }
  var bool = welcomeToBooleans();
  console.log(bool);


  function trueOrFalse(wasThatTrue) {
    // Only change code below this line
   if (wasThatTrue) {
      return "Yes, that was true";
    }
     if (!wasThatTrue) {
      return "No, that was false";
    }
  
  
    // Only change code above this line
  
  }

  // Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);
  console.log(testEqual(10));

  // Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);
  console.log(testStrict(10));

  // Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");

  // Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  // Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testStrictNotEqual(10);
  console.log( testStrictNotEqual(10));


  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  testGreaterThan(10);


  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  testGreaterOrEqual(10);

  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  testLessThan(10);
  console.log( testLessThan(10));

  function testLessOrEqual(val) {
    if (val<= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  testLessOrEqual(10);


  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25) {
      
        return "Yes";
      
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);


  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val >20 || val <10 ) {
      return "Outside";
    }
  
  
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);


  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  else if (val < 5) {
      return "Smaller than 5";
    }
  else{
    return "Between 5 and 10";
  }
  }
  
  testElseIf(7);

  console.log( testElseIf(7));

  function orderMyLogic(val) {
    if (val < 5) {
       return "Less than 5";
     } 
       if (val < 10) {
       return "Less than 10";
     } 
     else {
       return "Greater than or equal to 10";
     }
   }
   
   orderMyLogic(7);

   function testSize(num) {
    // Only change code below this line
  if(num< 5)
  {
    return "Tiny";
  }
  else if(num< 10)
  {
    return "Small";
  }
  else if(num< 15)
  {
    return "Medium";
  }
  else if(num< 20)
  {
    return "Large";
  }
  else if(num>= 20)
  {
    return "Huge";
  }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);

  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);



function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch(val) {
    case 1:
      // console.log("alpha");
      return "alpha";
      break;
    case 2:
      // console.log("beta");
       return "beta";
      break;
      case 3:
    // console.log("gamma");
     return "gamma";
    break;
      case 4:
    // console.log("delta");
     return "delta";
    break;
      
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);


  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
        case "b":
      return "bird";
      break;
        case "c":
      return "cat";
      break;
    
    default:
      return "stuff";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);
  console.log(switchOfStuff(1));

  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        return "Low";
        break;
      case 4:
      case 5:
      case 6:
        return "Mid";
        break;
      case 7:
      case 8:
      case 9:
        return "High";
        break;
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
  sequentialSizes(1);


  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);


  function isLess(a, b) {
    // Only change code below this line
  return a<b;
    // Only change code above this line
  }
  
  isLess(10, 15);

  // Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
      return undefined;
    }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
 console.log(abTest(2,2));


 let count = 0;

function cc1(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc1(2); cc1(3); cc1(7); cc1('K'); cc1('A');


const myDog = {
    // Only change code below this line
  name:"aakash",
  legs:4,
  tails:5,
  friends:[],
    // Only change code above this line
  };

  // Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

  console.log(hatValue);
  console.log(shirtValue);


  // Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj2["an entree"];   // Change this line
  const drinkValue = testObj2["the drink"];    // Change this line

  // Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj3[playerNumber];   // Change this line
  console.log(player);

  // Setup
const myDog2 = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog2.name = "Happy Coder";
  