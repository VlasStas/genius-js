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
// ===============================================
// ===============================================
// Модуль 3
// -----------------------------------------------
// область видимості

// const a = 5;
// if (true) {
//   const b = 10;
//   console.log("block", b);
// }

// console.log("global", a);

// Цикли

// do while
// for
// break && continue

// let a = 1;

// while (a <= 5) {
//   console.log("a =", a++);
// }

// let a = 3;

// while (a) {
//   console.log("a", a--);
// }
// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 5);
// let a;
// for (a = 0; a <= 3; a++) {
//   console.log(a);
// }

// let summ = 0;

// while (true) {
//   let value = +prompt("Введіть число");
//   if (!value) break;

//   summ += value;
// }
// console.log("Summ", summ);

// for (i = 0; i < 10; i++) {
//   if (i % 2 === 1) continue;
//   console.log(i);
// }

//  -----------------------------
// -------------------------------
// Масиви
// ------------------------------

// let arr = ["Apple", "Orange", "Plum"];

// console.log(arr);

// arr[2] = "Lemon";

// console.log(arr);

// arr[3] = "Cherry";

// console.log(arr.length);

// arr.push("Tomato");

// console.log(arr);

// console.log(arr.length);

// arr.pop();

// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift("Apple");
// console.log(arr);

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (item of arr) {
//   console.log(item);
// }

// for (key in arr) {
//   console.log(arr[key]);
// }

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[2][2]);

// ===================
// методи присвоення
// ========================

// let a = 5;
// let b = a;
// console.log(a);
// a = 10;
// console.log(a);
// console.log(b);

// let arr = [1, 2, 3];
// let arr2 = arr;

// arr.push(4);

// console.log(arr);
// console.log(arr2);

// let arr = ["a", "b", "c", "d", "f"];
// !!!!!!!!!!!!!!!!!!!
// console.log(arr);
// delete arr[2]; // Так не робити!!!
// !!!!!!!!!!!!!!!!!!!!!

// console.log(arr);
// arr.splice(2, 1);
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);

// console.log(arr.slice(1, 3));

// let a = [1, 2, 3];
// console.log(arr.concat(a, true));

// console.log(arr.indexOf("c", 1));
// console.log(arr.lastIndexOf("c"));
// console.log(arr.includes("c"));

// const fruits = [
//   { id: 0, name: "Aple" },
//   { id: 1, name: "Tomato" },
//   { id: 2, name: "Chery" },
//   { id: 3, name: "Orange" },
//   { id: 4, name: "Lemon" },
// ];
// console.log(fruits);

// find
// console.log(fruits.find((item) => item.id === 2));

// filter
// console.log(fruits.filter((item) => item.id < 2));

// map
// let result = fruits.map((item) => item.name.length);
// console.log(result);

// let names = "Оля, Юля, Аня, Петя";

// split
// let arr = names.split(", ");

// console.log(arr);

// join
// let newStr = arr.join(" +|+ ");
// console.log(newStr);

// let arr = [1, 2, 3, 4, 5];

// let red = arr.reduce((summ, item) => summ + item);
// console.log(red);
// document.write(red);
// document.write("<br>");
// // reduce
// let arr2 = [25, 44, 33];
// let summ = arr2.reduce((sum, item) => sum + item) / arr2.length;
// console.log(summ);
// document.write(summ);

// ===============================
// =================================
// 24
// Функції

// function showMessage(name, city) {
//   console.log("Hello, my name is " + name + ". I'm from " + city);
// }
// showMessage("Nata", "Kyiv");
// showMessage("Olya", "Lviv");
// showMessage("Katya", "Dnipro");

// const saiHi = function () {
//   console.log("Hi!");
// };

// saiHi();

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(7, 9);

// console.log(result);

// const testFunk = function (a, b) {
//   console.log("a:", a);
//   console.log("b:", b);

//   return;
// };

// testFunk(1, 3);

// аргументи і rest ==============

// const addName = function () {
//   const arg = Array.from(arguments);
//   //   console.log(arguments);
//   console.log(arg);
// };

// addName(1, 2, 3, 5, 6, 9);

// const addName = function (...arg) {
//   console.log(arg);
// };

// addName(1, 2, 3, 5, 6, 9);

// callback ==================

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// function showOk() {
//   console.log("You say ok");
// }

// function showNo() {
//   console.log("You say No");
// }

// ask("Yes or no?", showOk, showNo);

// hof =====================

// const hello = function (name) {
//   console.log(`Hello, ${name}!`);
// };

// // hello("Ann");
// const searchName = function (callback) {
//   const name = "Ivan";
//   callback(name);
// };

// searchName(hello);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log("Hello");
//   }
//   console.log("Good Bye!");
// }

// checkAge(17);

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log("Go to movie!");
// }
// showMovie(21);

// Стрілкові функції =================

// const test = (arg) => {
//   console.log(arg);
// };
// test("Hello!");

// const ahowMovie = (age) => {
//   if (age >= 21) {
//     return console.log("Hello!");
//   }
//   return console.log("Bye!");
// };
// ahowMovie(20);

// const a = () => {
//   console.log("a");
// };

// const b = () => {
//   console.log("b");
// };

// const c = () => {
//   console.log("c");
//   a();
//   b();
// };

// c();

// console.log(document);

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector("button");

// buttonRef.addEventListener("click", () => addNumber(numberRef.value));

// ============================
// ---------------------------
// ===============================================
//
// Замикання
// -------------------------------------------------

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }
// const calc = createNewSum(5);

// calc();

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);

// console.log(addFive(10));

// function createUrl(domain) {
//   return function (url) {
//     return `http://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua");

// console.log(comUrl("google"));
// console.log(comUrl("fb"));

// console.log(comUa("google"));
// console.log(comUa("fb"));

// ================================
// this
// ===========================

// function hello() {
//   console.log("hello", this);
// }
// hello();

// const user = {
//   name: "Ivan",
//   city: "Odessa",
//   sayHello: hello,
// };

// user.sayHello();
// -------------------

// function abc() {
//   console.log("В функції");
//   console.log(this);
// }
// abc();

// document.querySelector("p").onclick = abc;

// function changeColor() {
//   console.log(this);
//   this.style.background = "green";
// }

// document.querySelector("div").onclick = changeColor;

// function changeColor() {
//   this.style.background = "green";
// }

// let user = document.querySelectorAll("div");

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

// ---------------

// const showList = () => {
//   console.log(this);
// };
// showList();

// const list = {
//   names: ["Ann", "Olga", "Nata"],
//   showList: showList,
// };
// list.showList();
// ========================

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// const Ann = {
//   name: "Anna",
//   age: 23,
// };
// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// user.info.bind(Ann)("Kyiv");
// const nataInfo = user.info.bind(Nata, "Dnipro");
// nataInfo();
