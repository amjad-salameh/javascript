//Array methods
//1. Retrieve Player Names
console.log("=======1. Retrieve Player Names=======");
let players = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];
let playersNames = players.map((players) => players.name);
console.log(playersNames);
//2. Filter Players by Level
console.log("=======2. Filter Players by Level=======");
let levels = [{ level: 1 }, { level: 2 }, { level: 3 }];
let playersByLevel = levels.filter((levels) => levels.level >= 2);
console.log(playersByLevel);
//3. Calculate Total Health
console.log("=======3. Calculate Total Health=======");
let health = [{ health: 100 }, { health: 120 }, { health: 80 }];
let totalHealth = health.reduce((acc, health) => acc + health.health, 0);
console.log(totalHealth);
//4. Combine Player Names and Levels
console.log("=======4. Combine Player Names and Levels=======");

let players2 = [
  { name: "Hero", level: 1 },
  { name: "Warrior", level: 2 },
];
let playerNames = players2.map((players2) => players2.name);
let playerLevels = players2.map((players2) => players2.level);
let playerNamesAndLevels = playerNames.map(
  (playerNames, index) => `${playerNames} - Level ${playerLevels[index]}`
);

console.log(playerNamesAndLevels);
// 5. Update Player Health
console.log("=======5. Update Player Health=======");

let players3 = [
  { name: "Hero", health: 100 },
  { name: "Warrior", health: 120 },
];

let newHealth = 150;

let playerName = "Hero";

let updatedPlayers = players3.map((players3) => {
  if (players3.name === playerName) {
    return { ...players3, health: newHealth };
  } else {
    return players3;
  }
});

console.log(updatedPlayers);
// 6. Filter Players by Location
console.log("=======6. Filter Players by Location=======");

let players4 = [
  { location: "forest" },
  { location: "mountain" },
  { location: "castle" },
];

let location = "forest";

let filteredPlayers = players4.filter(
  (players4) => players4.location === location
);

console.log(filteredPlayers);
//7. Get Average Player Level
console.log("=======7. Get Average Player Level=======");

let players5 = [{ level: 1 }, { level: 2 }, { level: 3 }, ,];

let averageLevel =
  players5.reduce((acc, player) => {
    return acc + player.level;
  }, 0) / players5.length;

console.log(averageLevel);
//8. Sort Players by Health
console.log("=======8. Sort Players by Health=======");

let players6 = [{ health: 100 }, { health: 120 }, { health: 80 }];

let sortedPlayers = players6.sort((a, b) => b.health - a.health);

console.log(sortedPlayers);
//9. Retrieve Player Inventories
console.log("=======9. Retrieve Player Inventories=======");

let players7 = [
  { inventory: ["sword", "health potion"] },
  { inventory: ["axe", "shield"] },
];

let inventories = players7.map((players7) => players7.inventory);

console.log(inventories);
