// const message = "JavaScript is awesome!";

// console.log(message);

// const isConfirm = confirm("Plase confirm reservation");
// console.log(isConfirm);

// const test = confirm("Yes or No?");
// console.log(test);

// prompt
// const userName = prompt("Plase enter your name:");
// console.log(userName);

// const number = prompt(`${userName}, Plase enter number phone`);
// console.log(number);

// ---String----

// let value;

// value = false;
// console.log(typeof value);
// const newValue = String(value);
// console.log(typeof newValue);
// console.log(newValue);
// console.log(value);

// ---Number---

// value = "123";
// console.log(typeof value);
// const newValue = Number(value);
// console.log(newValue);
// console.log(typeof newValue);

// const test = Number("qweqwe");
// console.log(test);

// ---Boolean---

// console.log(Boolean(1));
// console.log(Boolean(0));

// console.log(Boolean("qweqwe"));
// console.log(Boolean(""));

// let test = NaN;
// test = null;
// console.log(Boolean(test));
// console.log(Boolean(null));

// ---------------------------
//--Оператори--
// ---------------------------

// console.log(2 + 2);
// console.log(10 - 4);
// console.log(8 * 6);
// console.log(188 / 4);

// console.log(10 % 3);
// console.log(10 % 2);
// console.log(10 % 5);

// console.log(5 ** 3);
// console.log(3 ** 2);

//--Логічні оператори--
// console.log(5 > 4);
// console.log(5 < 4);
// console.log(5 == 5);
// console.log(5 != 4);
// console.log(5 === 4);
// console.log(5 !== 4);

// ----------------------
// or -and -not
// -------------------------
// -----and (&&)------------

// console.log(5 === 6 && 6 > 3);
// console.log(6 + 3 >= 9 && 8 + 1 === 9);

// ------ or (||) -----------
// console.log(5 * 5 === 25 || 2 * 2 === 6);

// ---------- not (!) -------
// console.log(!true);
// console.log(!false);

// -----------------------------
// -----------------------------
// Умови if/else
// -----------------------------

// -- одинарні
// if (6 / 6 === 12) {
//   console.log("Hello!");
// } else {
//   console.log("NO!");
// }

// if (2 / 2 === 4) {
//   console.log("Hello!");
// } else {
//   console.log("NO!");
// }

// ----Тернарний оператор----
// 2 + 2 === 6 ? console.log("1") : console.log("NO!");
// 5 * 5 === 24 ? console.log(true) : console.log(false);

// let leng = "ua";

// if (leng === "ua") {
//   console.log("Понеділок");
// } else if (leng === "en") {
//   console.log("monday");
// } else {
//   console.log("Reset");
// }

// switch/case

// switch (10) {
//   case 0:
//     console.log(0);
//     break;
//   case 3:
//     console.log(3);
//     break;
//   case 5:
//     console.log(5);
//     break;
//   case 8:
//     console.log(8);
//     break;
//   case 10:
//     console.log(10);
//     break;
//   case 9:
//     console.log(9);
//     break;
// }

// let cost = null;
// const sub = "premium";

// switch (sub) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid");
// }
// console.log(cost);

// -----------------------
// -----------------------
// -----------------------

// const min = prompt("Введіть кількість хвилин");

// if (min >= 0 && min <= 14) {
//   console.log("Перша чверть");
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга чверть");
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя чверть");
// } else if (min >= 45 && min <= 59) {
//   console.log("Четверта чверть");
// } else {
//   console.log("Введіть іншу цифру");
// }

// const value = prompt("Введіть назву товару").toLowerCase();
// let cost;

// switch (value) {
//   case "яблуко":
//     cost = 10;
//     alert(`${value} коштує ${cost}гр.`);
//     break;
//   case "вишня":
//     cost = 50;
//     alert(`${value} коштує ${cost}гр.`);
//     break;
//   case "груша":
//     cost = 30;
//     alert(`${value} коштує ${cost}гр.`);
//     break;
//   case "кавун":
//     cost = 5;
//     alert(`${value} коштує ${cost}гр.`);
//     break;
//   case "чорниця":
//     cost = 70;
//     alert(`${value} коштує ${cost}гр.`);
//     break;
//   case "диня":
//     cost = 60;
//     alert(`${value} коштує ${cost}гр.`);
//     break;

//   default:
//     alert(`Товару ${value}, немае в наявності`);
// }
// console.log(cost);
