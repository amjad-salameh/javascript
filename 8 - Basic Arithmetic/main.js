// //------------------1-------------------
const num1 = 8;
const num2 = 15;
const num3 = num1 + num2;
console.log(num3);
// //------------------2-------------------
const a =30;
const b = 12;
const c = a - b;
console.log(c);

// //------------------3-------------------
const x = 7;
const y = 3;
const z = x * y;
console.log(z);

// //------------------4-------------------
const dividendo = 20;
const divisor = 4;
const resto = dividendo / divisor;
console.log(resto);

// //------------------5-------------------
const number1= 15;
const number2 = 25;
const number3 = 10;
const number4 = (number1 + number2 + number3)/2
console.log(number4);

// //------------------6-------------------
const q=20;
const w=2;
const e = q%w;
console.log(e);

// //------------------7-------------------
const numx=10;
const numy= numx %2
console.log(numy);
const numz= 19;
const numc = numz%2
console.log(numc);

//------------------8-------------------
const num4 =10;
let num5;
function test1(){
    return  num5= num4 /2;


}
test1()
console.log(num5);

const num6 = 9;
let num7 ;
function test2(){
    return  num7= num6 /2;
}

test2() 
console.log(num7); 
//---------9--------------------------------
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}


//---------10--------------------------------

// Define the number to be checked
const number0 = 15;

// Check if the number satisfies the condition
if (number0 > 10 && number0 < 20) {
    console.log(number0 + " satisfies the condition: greater than 10 and less than 20.");
} else {
    console.log(number0 + " does not satisfy the condition.");
}

//---------11--------------------------------
// Define the number to be checked
const number11 = 7;

// Check if the number satisfies the condition
if (number11 < -5 || number11 > 10) {
    console.log(number11 + " satisfies the condition: less than -5 or greater than 10.");
} else {
    console.log(number11 + " does not satisfy the condition.");
}

//---------12--------------------------------
// Define the boolean value
const booleanValue = true;

// Use the logical NOT operator to print the opposite boolean value
console.log("Original value:", booleanValue);
console.log("Opposite value:", !booleanValue);

//---------13--------------------------------

// Define the number to be checked
const number12 = 25;

// Check if the number satisfies any of the conditions
if ((number12 > 5 && number12 < 10) || (number12 > 20 && number12 < 30)) {
    console.log(number12 + " satisfies one of the conditions: greater than 5 and less than 10, or greater than 20 and less than 30.");
} else {
    console.log(number12 + " does not satisfy any of the conditions.");
}
