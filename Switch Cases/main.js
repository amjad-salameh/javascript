// switch cases for rpg game project
// 1- quest days fo the week:
const dayOfWeek = 5;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// 2- game theme color setting:

const themeColor = "red";

switch (themeColor) {
  case "red":
    console.log("red");
    break;
  case "blue":
    console.log("blue");
    break;
  case "green":
    console.log("green");
    break;
  case "yellow":
    console.log("yellow");
    break;
  case "orange":
    console.log("orange");
    break;
  case "purple":
    console.log("purple");
    break;
}

// 3- Quest Notification status:
const questStatus = "new";

switch (questStatus) {
  case "new":
    console.log("completed");
    break;
  case "unread":
    console.log("unread");
    break;
  case "unopened":
    console.log("unopened");
    break;
}

// 4 - player level classification:

const playerLevel = "Beginner";

switch (playerLevel) {
  case "Beginner":
    console.log("Beginner");
    break;
  case "Advanced":
    console.log("Advanced");
    break;
  case "Intermediate":
    console.log("Intermediate");
    break;
  case "Expert":
    console.log("Expert");
    break;
  case "Master":
    console.log("Master");
    break;
}

// 5 - player score ranges:

const playerScore = 80;

switch (true) {
  case playerScore >= 90:
    console.log("legend");
    break;
  case playerScore >= 80:
    console.log("champion");
    break;
  case playerScore >= 70:
    console.log("rookie");
    break;
}

// 7- seasonal quests:

let questMonth = 5;

switch (questMonth) {
  case 1:
    console.log("ice kingdom adventure");
    break;
  case 2:
    console.log("valentines day special");
    break;
  case 3:
    console.log("spring blossom hunt");
    break;
  case 4:
    console.log("easter egg hunt");
    break;
  case 5:
    console.log("flower festival celebrations");
    break;
  case 6:
    console.log("summer solstice quest");
    break;
  case 7:
    console.log("beach party bonanza");
    break;
  case 8:
    console.log("underWater expedition");
    break;
  case 9:
    console.log("Harvest festival quest");
    break;
  case 10:
    console.log("haunted mansion mystery ");
    break;
  case 11:
    console.log("turkey trot adventure");
    break;
  case 12:
    console.log("frosty festivities");
    break;
}

// 8- player input handling:
let playerInput = true;
switch (typeof playerInput) {
  case "number":
    console.log("number");
    break;
  case "string":
    console.log("string");
    break;
  case "boolean":
    console.log("boolean");
    break;
}

// 9- game update release schedule:
const updateMonth = 7;

switch (updateMonth){
    case updateMonth >= 1 && updateMonth <= 3:
        console.log("first quarter");
        break;
    case updateMonth >= 4 && updateMonth <= 6:
        console.log("second quarter");
        break;
    case updateMonth >= 7 && updateMonth <= 9:
        console.log("third quarter");
        break;
    case updateMonth >= 10 && updateMonth <= 12:
        console.log("fourth quarter");
        break;
}