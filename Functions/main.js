//------1---------------
let characterStats = [];

function initializeCharacterStats() {
  characterStats = [];
}

// Example usage:
initializeCharacterStats();
console.log(characterStats);

//------2---------------

let characterStats1 = [];

function initializeCharacterStats() {
  characterStats = [];
}

function addCharacterStat(characterName, strength) {
  characterStats.push([characterName, strength]);
}

// Example usage:
initializeCharacterStats();
addCharacterStat("John", 10);
addCharacterStat("Jane", 8);
console.log(characterStats);
//------3---------
let characterStats2 = [];

function initializeCharacterStats() {
  characterStats = [];
}

function addCharacterStat(characterName, strength) {
  characterStats.push([characterName, strength]);
}

function findCharacterStrength(characterName) {
  let found = false;
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName) {
      console.log(`${characterName}'s strength is ${characterStats[i][1]}.`);
      found = true;
      break;
    }
  }
  if (!found) {
    console.log("Character was not found.");
  }
}

//------4---------------
function findCharacterIndex(characterName) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName) {
      return i;
    }
  }
  return -1;
}

function updateCharacterStrength(characterName, newStrength) {
  const index = findCharacterIndex(characterName);
  if (index !== -1) {
    characterStats[index][1] = newStrength;
    console.log(
      `${characterName}'s strength has been updated to ${newStrength}.`
    );
  } else {
    console.log("Character was not found.");
  }
}








