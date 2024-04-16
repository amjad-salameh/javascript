//----------------------1----------------------------
const currentDate1 = new Date();
console.log("Current date and time:", currentDate1);
console.log(new Date());

//----------------------2----------------------------
const currentYear = new Date().getFullYear();
console.log(currentYear);

//----------------------3----------------------------
const currentMonth1 = new Date().getMonth();
console.log(currentMonth1);

//----------------------4----------------------------

const currentDay = new Date().getDate();
console.log(currentDay);

//----------------------5----------------------------
const currentWeekday = new Date().getDay();
console.log(currentWeekday);

//----------------------6----------------------------

const currentHours = new Date().getHours();
const currentMinutes = new Date().getMinutes();
const currentSecond = new Date().getSeconds();
console.log(currentHours, currentMinutes, currentSecond);

//

const currentDate = new Date();


const currentMonth = currentDate.getMonth();

const nextMonthDate = new Date(currentDate.getFullYear(), currentMonth + 1, 1);

const lastDayOfMonth = new Date(nextMonthDate - 1);

const numberOfDays = lastDayOfMonth.getDate();

console.log("Number of days in the current month:", numberOfDays);

//----------------------7----------------------------

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow);

//----------------------8----------------------------
const representingMinutes = new Date();

representingMinutes.setMinutes(representingMinutes.getMinutes() + 1);

console.log(representingMinutes);
