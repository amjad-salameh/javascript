//----------------1----------------------
const weaponInventory = ["Sword","Bow","Magic Staff"];
const weaponToCheck = "Sword";
console.log(weaponInventory.includes(weaponToCheck));

//----------------2----------------------
const questName = ["Dragon's Lair","The Lost Artifact","Rescue the Princess"]
questName.reverse()
console.log(questName);

//----------------3----------------------
const monsterType = ["Dragon","Goblin"," Orc"]
monsterType.push("Dracula")
console.log(monsterType);

//----------------4----------------------
 const monsterTypes = ["Dragon","Goblin","orc"]
 const monsterToCheck = ["Orc"]
console.log(monsterTypes.indexOf(monsterToCheck));

//----------------5----------------------
const questNames = ["Dragon's Lair","The Lost Artifact","Rescue the princess"]
const specificQuest = "Rescue the princess";
if (specificQuest.indexOf(questNames))
{
    console.log("Rescue the Princess found at index X")
}
else{
    console.log("Quest not found")
}

//----------------6----------------------
const monsterList = ["Dragon","Orc","Goblin"]
monsterList.pop()
console.log(monsterList)

//----------------7----------------------
const monsterList1 = ["Orc","Goblin"];
const newMonster = "Dragon";
monsterList1.unshift(newMonster);
console.log(monsterList1)

//----------------8----------------------
const monsterList2 = ["Dragon","Orc","Goblin"];

 const rm = delete monsterList2[0]
 console.log(monsterList2)

 //----------------9----------------------
 const heroList1 = ["Archer","Mage"]
 const heroList2 = ["Warrior","Healer"]
 const togather = heroList1.concat(heroList2)
 console.log(togather)

 //----------------10----------------------

 const questNames1 = ["Dragon's Lair","The Lost Artifact","Rescue the Princess"]
console.log(questNames1.sort())

//----------------11----------------------
const spellsString = "Fireball,Heal,Ice Lance"
const spellsArray = spellsString.split(",")
console.log(spellsArray)

//----------------12----------------------
const questNames2 = ["Dragon's Lair","The Lost Artifact","Rescue the Princess"]
const n =2 

 const firstNQuest=  questNames2.splice(0,n);
 console.log(firstNQuest)

 //----------------13----------------------
 const monsterList3 = ["Dragon","Orc","Goblin"]
 monsterList3.length=0;
 console.log(monsterList3)

 //----------------14----------------------
 const inventory = ["sword","shield"]
 const newWeapon = "Bow"
 inventory.push(newWeapon)
 console.log(inventory)
 //----------------15----------------------
 const inventory2 = ["gold","Magic potion","Sheild"]
 delete inventory2[2]
 console.log(inventory2)
 //----------------16----------------------
 const quests = ["Dragon Lair","Rescue the princess"]
 const newQuest = "Defeat the Goblin Kind"
 quests.unshift(newQuest)
 console.log(quests)
 //----------------17----------------------
 const quests1 = ["Dragon Lair","Rescue the princess","Defeat the Goblin King"]
 quests1.sort()
 console.log(quests1)

 //----------------18----------------------
 const quests2 = ["Dragon Lair","Rescue the princess","Defeat the Goblin King"]
 const questToCheck = "Rescue the princess";
 console.log(quests2.includes(questToCheck))
 //----------------19----------------------
 const scores = [30,80,60,90]
 scores.sort((a,b)=>b-a);
 console.log(scores)
 
 
 
