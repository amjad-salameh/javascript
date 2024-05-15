//----------1--------------------
let str = "iron warrior";
let newArr = [];
let arry = str.split(" ");
let word = "";
for (let i = 0; i < arry.length; i++){
word = arry[i][0].toUpperCase() + arry[i].slice(1).toLowerCase();
newArr.push(word);
}

console.log(newArr.join(" "));
//-----------------2------------------
const arry2 = ["Iron Sword", "Healing Potion", "Steel Shield","Iron Axe"];
let query = "Iron";
let pusharr = [];
for (let i = 0; i < arry2.length; i++) {
 const newstr2 = arry2[i]
if (newstr2.includes(query)) {
    pusharr.push(newstr2)
}
}
console.log(pusharr);
// -----------------3----------------
// convert and swap
let str3 = "Goblin, Grunty";
const newstr3 = str3.split(",");
str3 = newstr3[1]+" "+newstr3[0];
console.log(str3);