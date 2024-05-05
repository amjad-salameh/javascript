//------------------------1-------------------
const playerHealth = 10;
const palyer1 = 11;
const player2 = 7;
if (palyer1 >= playerHealth) {
  console.log("Player 1 is strong");
} else if (player2 >= playerHealth) {
  console.log("Player 2 is weak");
}

//------------------------2-------------------
const playerGold = 100;
const player3 = 11;
const player4 = 101;

if (player3 >= playerGold) {
  console.log("Player 3 is rich");
} else if (player4 >= playerGold) {
  console.log("Player 4 is poor");
}

//------------------------3-------------------
const weather = "sunny";
const timeOfDay = "morning";
if (weather == "sunny") {
  console.log("continue the adventure");
} else if (weather != "sunny") {
  console.log("seek shelter");
}
//------------------------4-------------------
const playerWeapon = "sword";
const enemyWeapon = "axe";
if (playerWeapon == enemyWeapon) {
  console.log("Weapons clashing");
} else if (playerWeapon != enemyWeapon) {
  console.log("advantage");
}

//------------------------5-------------------
const playerAge = 16;
if (playerAge >= 13 && playerAge <= 19) {
  console.log("The player is between 13 and 19 years old.");
} else {
  console.log("The player is not between 13 and 19 years old.");
}

//------------------------6-------------------
const gameScore = 100;

if (gameScore >= 50) {
  console.log("Congratulations! You won the game!");
} else if (gameScore < 50) {
  console.log("Sorry! You lost the game.");
}

//------------------------7-------------------
const numOfEnemies = 10;
if (numOfEnemies % 2 === 0) {
  console.log("The number of enemies is even");
} else {
  console.log("The number of enemies is odd");
}

//------------------------8-------------------
// haracter age group classification
let characterAge = 50;
if (characterAge <= 12) {
  console.log("The character is a child");
} else if (characterAge >= 13 && characterAge < 19) {
  console.log("The character is a teenager");
} else if (characterAge >= 20) {
  console.log("The character is a young adult");
}

//------------------------9-------------------
// players battle skill evaluation:
let playerSkill = 10;
if (playerSkill > 70) {
  console.log("battle skill");
} else if (playerSkill < 70) {
  console.log("skilled warrior");
} else {
  console.log("train harder");
}

//------------------------10-------------------
// game session duration category:

let sessionDuration = 50;
if (sessionDuration < 90) {
  console.log("short session");
} else if (sessionDuration >= 90 && sessionDuration < 150) {
  console.log("medium session");
} else if (sessionDuration >= 150) {
  console.log("long session");
}

//------------------------11-------------------
// check potion availability in lnventory:

let totalPotions = 50;
let usedPotions = 70;

if (totalPotions > usedPotions) {
  console.log("You have enough potions");
} else {
  console.log("You don't have enough potions");
}

//------------------------12------------
// validate player age for restricted quest:
let plaYerAge = 16;
let questAgeRestriction = 18;
if (plaYerAge >= questAgeRestriction) {
  console.log("You are old enough to complete the quest");
} else {
  console.log("You are not old enough to complete the quest");
}

//------------------------13-------------------
//special weekend events:

let dayOfWeek = "Saturday";
if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday") {
  console.log("It's the weekend!");
} else {
  console.log("It's a weekday!");
}

//------------------------14-------------------
// identify era of game setting:

let gameSettingYear = 2018;

if (gameSettingYear >= 2000 && gameSettingYear < 2010) {
  console.log("The era is 2000s");
} else if (gameSettingYear >= 2010 && gameSettingYear < 2020) {
  console.log("The era is 2010s");
}

//------------------------15-------------------
// Evaluate character class and attribute:
let characterClass = "warrior";
let characterLevel = 30;
if (characterClass == "warrior" && characterLevel >= 10) {
  console.log("The character is a warrior");
} else if (characterClass == "mage" && characterLevel >= 10) {
  console.log("The character is a mage");
} else if (characterClass == "archer" && characterLevel >= 10) {
  console.log("The character is an archer");
} else {
  console.log("The character is not a warrior, mage or archer");
}

//------------------------16-------------------
//Determines battle readiness:
let playerHealh = 60;
let enemyCount = 10;
if (playerHealh >= 50 && enemyCount >= 10) {
  console.log("The player is ready to battle!");
} else {
  console.log("The player is not ready to battle.");
}

//------------------------17-------------------
// assess quest completion status:
let questProgress = 40;
let questDiffculty = 50;

if (questProgress >= questDiffculty) {
    console.log("You have completed the quest!");
} else {
    console.log("You have not completed the quest yet.");
}

//------------------------18-------------------
// check players inventory:
 
let inventorySize = 20;

if (inventorySize >= 20) {
    console.log("You have enough space in your inventory.");
} else {
    console.log("You do not have enough space in your inventory.");
}

