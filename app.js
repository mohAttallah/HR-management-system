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
let empGs = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
let empLa = new Employee(
  1001,
  "Lana Ali",
  "	Finance",
  "Senior",
  "https://www.pngfind.com/pngs/m/538-5388823_png-file-svg-personal-information-girl-icon-transparent.png"
);
let empTa = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "https://www.pngfind.com/pngs/m/538-5388823_png-file-svg-personal-information-girl-icon-transparent.png"
);
let empSa = new Employee(
  1003,
  "	Safi Walid",
  "Administration",
  "Mid-Senior",
  "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);

let empOz = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "https://images.pexels.com/photos/2182974/pexels-photo-2182974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
let empRa = new Employee(
  1005,
  "	Rana Saleh",
  "Development",
  "Junior",
  "https://www.pngfind.com/pngs/m/538-5388823_png-file-svg-personal-information-girl-icon-transparent.png"
);
let empHa = new Employee(
  1006,
  "	Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
);
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
  let user = new Employee(id, nameBox.value, dep.value, level.value, img.value);

  user.renderLab8();
});

// Rrnder by Event

let cardBox = document.querySelector(".container");

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

  // Set Data to Local Storage
  this.Salary();
  let data = [this.id, this.fullName, this.department, this.level, this.image, this.salary];
  setData(data);
};



// lab 09 (Local Storage)
// if local Storage has Data Render here
let numPerson = 0;
function setData(data) {
  numPerson++;
  localStorage.setItem(numPerson, JSON.stringify(data));
}

// get Data from localStorage
function getData() {
  let user = [];
  if (localStorage.length > 0) {
    let keyIteam = 0;
    for (let i = 0; i < localStorage.length; i++) {
      keyIteam = localStorage.key(i);
      console.log(JSON.parse(localStorage.getItem(i)));
      user.push(
        new Employee(...JSON.parse(localStorage.getItem(keyIteam)))
      );
    }
    // render Data from LocalStorage 
    for (let i = 0; i < user.length; i++){
      user[i].renderLab8();
    }
  }
}
// previous employees

empGs.renderLab8();
empHa.renderLab8();
empLa.renderLab8();
empOz.renderLab8();
empRa.renderLab8();
empSa.renderLab8();
empTa.renderLab8();


// getData();
