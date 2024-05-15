//---------------exercises 1--------------------------------
let gameWorld = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],
  createEntity: function(name, health,position,inventory){
    const enemies =  {
        
      x:name,
      y:health,
      z:position,
      inventory:inventory,
     
  }
  return enemies
},
addPlayer: function(name, health,position,inventory){
    this.players.push(name, health, position, inventory)

}
};
gameWorld.addPlayer("amjad",100,30,20);

console.log(gameWorld.players);

//---------------exercises 2--------------------------------




