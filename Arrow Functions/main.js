//Arrow Functions
//----------1---------

const getPlayerName = function (player) {
  return player.name;
};

const getPlayerName1 = (player) => player.name;

console.log(getPlayerName("amjad"));

//----------2---------
const getPlayerHealth = (health) => {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
};

console.log(getPlayerHealth(80));

//----------3---------
const getTotalInventoryValue = (items) => {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
}
console.log(getTotalInventoryValue(160));

//----------4---------
// let sortedItems = items.sort((a, b) => b.value - a.value);

// console.log(sortedItems);


//----------5---------

const getItemNames = (items)=>{
  return items.map( (item)=> {
    return item.name;
  });
}
console.log(getItemNames(50));


