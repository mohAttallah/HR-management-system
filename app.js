"use strict";

// Function Generate Random Number
function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Constartor Employee
function Employee(id, name, depart, level, img) {
  this.id = id;
  this.fullName = name;
  this.department = depart;
  this.level = level;
  this.image = img;
}

// Salary Genrate
Employee.prototype.Salary = function () {
  if (this.level === "Senior") {
    this.salary = randNumber(1500, 2000);
  } else if (this.level === "Mid-Senior") {
    this.salary = randNumber(1000, 1500);
  } else if (this.level === "Junior") {
    this.salary = randNumber(500, 1000);
  }
};

// net Calculate
Employee.prototype.Net = function () {
  let taxPercent = this.salary / 7.5;
  this.net = parseInt(this.salary - taxPercent);
};

// Render Data DOM
//let tbody = document.querySelector("tbody");
Employee.prototype.render = function () {
  //Create tr
  let tr = document.createElement("tr");

  // Append ID
  let tdId = document.createElement("td");
  tdId.textContent = this.id;
  tr.appendChild(tdId);

  // Append name
  let tdName = document.createElement("td");
  tdName.textContent = this.fullName;
  tr.appendChild(tdName);

  // Append department
  let tdDep = document.createElement("td");
  tdDep.textContent = this.department;
  tr.appendChild(tdDep);

  // Append Level
  let tdLev = document.createElement("td");
  tdLev.textContent = this.level;
  tr.appendChild(tdLev);

  //Append Salary
  this.Salary();
  let tdSalary = document.createElement("td");
  tdSalary.textContent = this.salary;
  tr.appendChild(tdSalary);

  //Append Nat
  this.Net();
  let tdNet = document.createElement("td");
  tdNet.textContent = this.net;
  tr.appendChild(tdNet);

  // Append row
  tbody.appendChild(tr);
};

//test
let gs = new Employee(
  1000,
  "Ghazi Samer",
  "	Administration",
  "Senior",
  "Image URL"
);

let la = new Employee(1001, "Lana Ali", "	Finance", "Senior", "Image URL");
let ta = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "Image URL");
let sa = new Employee(
  1003,
  "	Safi Walid",
  "Administration",
  "Mid-Senior",
  "Image URL"
);

let oz = new Employee(1004, "Omar Zaid", "Development", "Senior", "Image URL");
let ra = new Employee(1005, "	Rana Saleh", "Development", "Junior", "Image URL");
let ha = new Employee(1006, "	Hadi Ahmad", "Finance", "Mid-Senior", "Image URL");

console.log(sa.id);

// Lab 08

// Select All Child Form
let nameBox = document.querySelector("#full-name");
let dep = document.querySelector("#dep");
let level = document.querySelector("#level");
let img = document.querySelector("#img");
let btn = document.querySelector("#btn");

function createIdNumber() {
  const min = 1000; // minimum 4-digit number
  const max = 9999; // maximum 4-digit number
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let id = createIdNumber();
  console.log(nameBox.value);
  let user = new Employee(id, nameBox.value, dep.value, level.value, img.value);

  user.renderLab8();
});

// Rrnder by Event

let cardBox = document.querySelector(".container");
console.log(cardBox);
Employee.prototype.renderLab8 = function () {
  let card = document.createElement("div");
  card.classList.add("card");

  let details = document.createElement("div");
  let divName = document.createElement("div");
  let divDep = document.createElement("div");
  let image = document.createElement("img");

  //Style 
  image.classList.add("img", "cover");
  divName.classList.add("details");
  divDep.classList.add("details");

  image.setAttribute("src", this.image);
  divName.textContent = `Name: ${this.fullName} - ID: ${this.id}`;
  divDep.textContent = `Department: ${this.department} - Level: ${this.level}`;

  details.appendChild(divName, divDep);
  details.appendChild(divDep);
  card.appendChild(image);
  card.appendChild(details);
  cardBox.appendChild(card);
};
