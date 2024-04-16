//-------------------1-------------------------------
isSunny = true;
isWeekend = false;
if (isSunny == true && isWeekend == false) {
    console.log("It's a sunny day!");
} else  {
    console.log("It's a weekend!");
}

//-------------------2-------------------------------
const age = 20;
const license = true;
if (age >= 18 && license == true) {
    console.log("You can drive!");
} else  {
    console.log("You can't drive!");
}

//-------------------3-------------------------------
const KnowsJavaScript = false;
const KnowsPython = true;
if (KnowsJavaScript == false || KnowsPython == true) {
    console.log("You can learn JavaScript!");
} else  {
    console.log("You can't learn JavaScript!");
}

//-------------------4-------------------------------
isRaining = true;
if (isRaining == true) {
    console.log("It's raining!");
} else if (isRaining != true) {
    console.log("It's not raining!");
}

//-------------------5-------------------------------
const likeMusic = "a";
const playingGuitar = "a";
const hasTime = "a";

if (likeMusic == "a" && playingGuitar == "a" && hasTime == "a") {
    console.log("You like music!");
} else if (likeMusic == "a" || playingGuitar == "a" || hasTime =="a")  {
    console.log("You dont like music!");
} 


//-------------------6-------------------------------
const peersonAge = 25;
if (peersonAge>=18) {
    console.log("greater than 18");
} else if (peersonAge<18) {
    console.log("less than 18");
}

//-------------------7-------------------------------
const currentTemerature = 30;
if (currentTemerature >= 30) {
    console.log("It's warm!");
} else if (currentTemerature < 30) {
    console.log("It's cold!");
}

//-------------------8-------------------------------
const firstNumber = 10;
const secondNumber = 20;

if (firstNumber == secondNumber) {
    console.log("They are equal!");
} else if (firstNumber!= secondNumber) {
    console.log("They are not equal!");
}

//-------------------9-------------------------------
const budget = 500;
expenses = 450;

if (budget >= expenses) {
    console.log("You have enough money!");
} else if (budget == expenses) {
    console.log("You have the same amount of money!");
}

//-------------------10-------------------------------
person1Height = 1.70;
person2Height = 1.65;

if (person1Height >= person2Height) {
    console.log("Person 1 is taller!");
} else if (person1Height == person2Height) {
    console.log("Person 1 is the same height as person 2!");
}
