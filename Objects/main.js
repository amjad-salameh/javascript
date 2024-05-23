//---------------exercises 1--------------------------------
let gameWorld = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createEntity: function (name, health, position, inventory) {
    const enemies = {
      x: name,
      y: health,
      z: position,
      inventory: inventory,
    };
    return enemies;
  },
  addPlayer: function (name, health, position, inventory) {
    this.players.push(name, health, position, inventory);
  },
};
gameWorld.addPlayer("amjad", 100, 30, 20);

console.log(gameWorld.players);

//---------------exercises 2--------------------------------
let gameWorld2 = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],

  addPlayer(player) {
    this.players.push(player);
  },

  removePlayer(player) {
    const index = this.players.indexOf(player);
    if (index !== -1) {
      this.players.splice(index, 1);
    }
  },

  addEnemy(enemy) {
    this.enemies.push(enemy);
  },

  removeEnemy(enemy) {
    const index = this.enemies.indexOf(enemy);
    if (index !== -1) {
      this.enemies.splice(index, 1);
    }
  },

  addItem(item) {
    this.items.push(item);
  },

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  },

  addNPC(npc) {
    this.npcs.push(npc);
  },

  removeNPC(npc) {
    const index = this.npcs.indexOf(npc);
    if (index !== -1) {
      this.npcs.splice(index, 1);
    }
  },
};

// Example usage:
const player1 = { name: "Player1" };
const enemy1 = { name: "Enemy1" };
const item1 = { name: "Item1" };
const npc1 = { name: "NPC1" };

gameWorld2.addPlayer(player1);
gameWorld2.addEnemy(enemy1);
gameWorld2.addItem(item1);
gameWorld2.addNPC(npc1);

console.log(gameWorld2.players);
console.log(gameWorld2.enemies);
console.log(gameWorld2.npcs);

gameWorld2.removePlayer(player1);
gameWorld2.removeEnemy(enemy1);
gameWorld2.removeItem(item1);
gameWorld2.removeNPC(npc1);

console.log(gameWorld2.players);
console.log(gameWorld2.enemies);
console.log(gameWorld2.items);
console.log(gameWorld2.npcs);

//---------------exercises 3--------------------------------

let gameWorld3 = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createEntity: function (name, health, position, inventory) {
    const enemies = {
      x: name,
      y: health,
      z: position,
      inventory: inventory,
    };
    return enemies;
  },
  addPlayer: function (name, health, position, inventory) {
    this.players.push(name, health, position, inventory);
  },
  createPlayer: function (name, health, position, inventory) {
    const player = this.createEntity(name, health, position, inventory);
    player.move = function (newPosition) {
      player.z = newPosition;
    };
    return player;
  },
};
console.log(gameWorld3.createPlayer("amjad", 100, 30, 20));

//------------------------Exercise 4: -------------------------

let gameWorld4 = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createEntity: function (name, health, position, inventory) {
    const enemies = {
      x: name,
      y: health,
      z: position,
      inventory: inventory,
    };
    return enemies;
  },
  addPlayer: function (name, health, position, inventory) {
    this.players.push(name, health, position, inventory);
  },
  createPlayer: function (name, health, position, inventory) {
    const player = this.createEntity(name, health, position, inventory);
    player.move = function (newPosition) {
      player.z = newPosition;
    };
    return player;
  },
};

gameWorld4.addPlayer("amjad", 100, 30, 20);

console.log(gameWorld4.createPlayer("amjad", 100, 30, 20));

//---------------------Exercise 5: Item Interaction--------------------

let gameWorld5 = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createEntity: function (name, health, position, inventory) {
    const enemies = {
      x: name,
      y: health,
      z: position,
      inventory: inventory,
    };
    return enemies;
  },
  addPlayer: function (name, health, position, inventory) {
    this.players.push(name, health, position, inventory);
  },
  createPlayer: function (name, health, position, inventory) {
    const player = this.createEntity(name, health, position, inventory);
    player.move = function (newPosition) {
      player.z = newPosition;
    };
    player.pickUpItem = function (item) {
      if (player.z === item.z) {
        player.inventory.push(item);
      }
    };
    player.useItem = function (item) {
      if (player.inventory.includes(item)) {
        player.inventory.splice(player.inventory.indexOf(item), 1);
        item.effect(player);
      }
    };
    return player;
  },
};
//---------------------Exercise 6: Adding Abilities--------------------

function createAbility(name, effect) {
  return {
    name: name,
    effect: effect,
  };
}

function createPlayer(name, health, position, inventory, abilities) {
  const player = gameWorld5.createEntity(name, health, position, inventory);
  player.move = function (newPosition) {
    player.z = newPosition;
  };
  player.pickUpItem = function (item) {
    if (player.z === item.z) {
      player.inventory.push(item);
    }
  };
  player.useItem = function (item) {
    if (player.inventory.includes(item)) {
      player.inventory.splice(player.inventory.indexOf(item), 1);
      item.effect(player);
    }
  };
  player.abilities = abilities;
  return player;
}

//-------------------Exercise 7: Advanced Combat---------------------

let gameWorld7 = {};

//---------------------Exercise 8: Leveling System----------------
/*Update the
createPlayer
function to add
level
and
xp
(experience points) properties tothe player. Also, add a
levelUp
method that increases the player's level by 1 for every 100experience points, increases the player's health, and reduces the player's xp by the amountused to level up.*/

function createPlayer(name, health, position, inventory, abilities, level, xp) {

}


