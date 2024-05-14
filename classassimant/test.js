// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map((a) => a * 2);

// console.log(newArr);

let arr = ["orange", "apple", "banana"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

let car = {
  name: "Fiat",
  model: "131",
  year: 1979,
  color: "green",
};

// console.log(car.name);

console.log(car["name"]);
console.log(car["model"]);
console.log(car["year"]);
console.log(car["color"]);
console.log(car["omar & amjad"]);

// let a = undefined;

console.log("undefined == >", Boolean(undefined));
console.log("0 == >", Boolean(0));
console.log("null == >", Boolean(null));
console.log("[] == >", Boolean([]));
console.log("{} == >", Boolean({}));

if (!undefined) {
  console.log("marhaba");
}

let str = "omaramjad";
if (!car["omar & amjad"]) {
  car[str] = "Rolls Roys";
}

console.log(car);
