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
updateCharacterStrength("amjad", "ali");

//------5---------------

function removeCharacterStat(characterName) {
  const index = findCharacterIndex(characterName);
  if (index !== -1) {
    characterStats.splice(index, 1);
    console.log(`${characterName} has been removed.`);
  } else {
    console.log("Character was not found.");
  }
}
removeCharacterStat(characterStats);
//------6---------------

function listCharacters() {
  for (let i = 0; i < characterStats.length; i++) {
    console.log(`${characterStats[i][0]} - ${characterStats[i][1]}`);
  }
}
listCharacters();

//------7---------------

function strongestCharacter() {
  let strongest = characterStats[0];
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][1] > strongest[1]) {
      strongest = characterStats[i];
    }
  }
  console.log(strongest);
}

strongestCharacter();
// -------------------Pure functions----------------
//----------------1---------------

function calculateAverageRating(ratings) {
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  return sum / ratings.length;
}

console.log(calculateAverageRating([8.5, 7.9, 6.3, 9.2, 8.1]));

//-----------------2-----------------

function extractDeveloperNames(titles) {
  let developers = [];
  for (let i = 0; i < titles.length; i++) {
    developers.push(titles[i].slice(titles[i].lastIndexOf("-") + 2));
  }
  return developers;
}

console.log(
  extractDeveloperNames([
    "The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo",
    "Final Fantasy VII (1997) - Developed by Square Enix",
    "Halo: Combat Evolved (2001) - Developed by Bungie",
  ])
);

//-----------------3-----------------

function containsWordInTitle(title, word) {
  return title.includes(word);
}

console.log(containsWordInTitle("Final Fantasy VII", "Fantasy"));

//-----------------4-----------------
function allTitlesStartWithSameLetter(game1, game2, game3) {
  return (
    game1.charAt(0) === game2.charAt(0) && game2.charAt(0) === game3.charAt(0)
  );
}

console.log(
  allTitlesStartWithSameLetter(
    "Assassin's Creed",
    "Age of Empires",
    "Animal Crossing"
  )
);

//-----------------5-----------------

function concatenateGenres(genres) {
  let result = "";
  for (let i = 0; i < genres.length; i++) {
    if (i === genres.length - 1) {
      result += genres[i];
    } else {
      result += genres[i] + ", ";
    }
  }
  return result;
}

console.log(concatenateGenres(["RPG", "Action", "Adventure"]));

//-----------------6-----------------

function countInxXPRange(experiencePoints, lowerBound, upperBound) {
  let count = 0;
  for (let i = 0; i < experiencePoints.length; i++) {
    if (
      experiencePoints[i] >= lowerBound &&
      experiencePoints[i] <= upperBound
    ) {
      count++;
    }
  }
  return count;
}

console.log(countInxXPRange([50, 75, 100, 30, 20, 100], 75, 100));

//-----------------7-----------------

function findGamesByDeveloper(titles, developers, developer) {
  let result = [];
  for (let i = 0; i < titles.length; i++) {
    if (developers[i] === developer) {
      result.push(titles[i]);
    }
  }
  return result;
}

console.log(
  findGamesByDeveloper(
    ["The Legend of Zelda", "Final Fantasy", "Halo: Combat Evolved"],
    ["Nintendo", "Square Enix", "Bungie"],
    "Nintendo"
  )
);

//-----------------8-----------------

function capitalizeFirstLetter(titles) {
  let result = [];
  for (let i = 0; i < titles.length; i++) {
    result.push(titles[i].charAt(0).toUpperCase() + titles[i].slice(1));
  }
  return result;
}

console.log(
  capitalizeFirstLetter([
    "the legend of zelda",
    "final fantasy",
    "halo: combat evolved",
  ])
);

//-----------------9-----------------

function uniquexP(experiencePoints) {
  let result = [];
  for (let i = 0; i < experiencePoints.length; i++) {
    if (!result.includes(experiencePoints[i])) {
      result.push(experiencePoints[i]);
    }
  }
  return result;
}

console.log(uniquexP([100, 50, 75, 50, 100, 75, 100]));

function sortTitlesAlphabetically(titles) {
  return titles.sort();
}

console.log(
  sortTitlesAlphabetically([
    "The Legend of Zelda",
    "Final Fantasy",
    "Halo: Combat Evolved",
  ])
);

//-----------------10-----------------

function filterXxXPByCriteria(experiencePoints, greaterThan, lessThan) {
  let result = [];
  for (let i = 0; i < experiencePoints.length; i++) {
    if (experiencePoints[i] > greaterThan && experiencePoints[i] < lessThan) {
      result.push(experiencePoints[i]);
    }
  }
  return result;
}

console.log(filterXxXPByCriteria([10, 20, 30, 40, 50], 20, 50));
