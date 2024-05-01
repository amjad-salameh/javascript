//------------------EXERCISE 1---------------
const character = {
  name: "amjad",
  class: "lion",
  level: 100,
  abilities: ["Biting", 'Jumping' ,'Running'],
  weapon:{
    name:'sword',
    damage: 100,
    type:'melee'
  },
getOverallStrength:function()
{
    return character
}
  };
 console.log(character.getOverallStrength())
 //------------------EXERCISE 2---------------
 character.width = 200;
 console.log(character.width);
 console.log(character['width'])
//------------------EXERCISE 3---------------
character.level = 120;
character.abilities.push='Fighter';
character.weapon.name = 'gun';
console.log(character.weapon.name);
//------------------EXERCISE 4---------------

const characters = [
{ name: "Eldrin", attributes: { health: 100, mana: 50
}},
{ name: "Mira", attributes: { health: 85, mana: 60 }}
];
console.log(characters[0].attributes.health);


function getValue(){
   let x = characters[0].attributes.length;
    return x;
}

console.log(getValue());

function averageHealth() {
  let totalHealth = 0;
  for(let i = 0; i < characters.length; i++) {
    totalHealth += character.attributes.health;
  };
  return totalHealth / characters.length;
}
console.log(averageHealth())

// ------------------EXERCISE 5---------------
let object1={
    num1:1
}
let object2={
    num2:2
}
let object3= Object.assign( object1, object2)
console.log(object3.num2)
object3= Object.freeze(object3)
object3 = Object.seal(object3)

//------------------EXERCISE 6---------------
const characterStats={
    name2:"Eldrin",
    class2:"mage",
    level:7,
    heath:100,
    mana:200,
    x : function(){
console.log(Object.keys(characterStats));
        
    }
};

console.log(characterStats.x());

//------------------EXERCISE 7---------------
const gameScores ={
"Eldrin":950,
"Mira":1200,
"Thorn":800,


};
  console.log(Object.entries(gameScores));
   const increasdd = Object.entries(gameScores);
   function increment (increasdd) {
    for(let i = 0; i< increasdd.length; i++)
    {
        if (increasdd[i][1]<1000){
          increasdd[i][1]+=1000
        }
        console.log(increasdd[i]);
    }
  }
  increment(increasdd)






