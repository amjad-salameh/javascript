//----------1--------------------
let str = "iron warrior";
let newArr = [];
let arry = str.split(" ");
let word = "";
for (let i = 0; i < arry.length; i++) {
  word = arry[i][0].toUpperCase() + arry[i].slice(1).toLowerCase();
  newArr.push(word);
}

console.log(newArr.join(" "));
//-----------------2------------------
const arry2 = ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"];
let query = "Iron";
let pusharr = [];
for (let i = 0; i < arry2.length; i++) {
  const newstr2 = arry2[i];
  if (newstr2.includes(query)) {
    pusharr.push(newstr2);
  }
}
console.log(pusharr);
// -----------------3----------------
// convert and swap
let str3 = "Goblin, Grunty";
const newstr3 = str3.split(",");
str3 = newstr3[1] + " " + newstr3[0];
console.log(str3);
//-----------------4---------------

let str4 = "3h 45min";
const newstr4 = str4.split(" ");
let hours = parseInt(newstr4[0]);

let minutes = parseInt(newstr4[1].slice(0, 2));

console.log(`${hours} hours and ${minutes} minutes`);

// -----------------5----------------

let str5 = "Epic Fantasy Battle";
const newstr5 = str5.split(" ");
let acronym = "";
for (let i = 0; i < newstr5.length; i++) {
  acronym += newstr5[i][0].toUpperCase();
}

console.log(acronym);

// -----------------6----------------

let str6 = "Iron Warrior;Warrior;1";
const newstr6 = str6.split(";");
let newstr61 = "";
for (let i = 0; i < newstr6.length; i++) {
  newstr61 += newstr6[i] + ", ";
}

newstr61 = newstr61.slice(0, -2);

console.log(newstr61);
//----------------------7------------------------------
let str7 = "dark forest";
const newstr7 = str7.split(" ");
let newstr71 = "";
for (let i = 0; i < newstr7.length; i++) {
  newstr71 += newstr7[i] + "-";
}

newstr71 = newstr71.slice(0, -1);

console.log(newstr71);

//-----------------------------8---------------------------
let str8 =
  "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.";
const newstr8 = str8.split(" ");
let newstr81 = "";
for (let i = 0; i < newstr8.length; i++) {
  newstr81 += newstr8[i] + " ";
}

newstr81 = newstr81.slice(0, 50);

console.log(newstr81);

//-----------------------------9---------------------------

let str9 = "Goblin, Orc, Dragon";
const newstr9 = str9.split(",");
console.log(newstr9);
