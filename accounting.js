"use strict";
// Departments
let marketing = ["Markiting"];
let administration = ["Administration"];
let development = ["Development"];
let finance = ["Finance"];
let total = ["Total"];

let dataEmp = [];
function getData() {
  if (localStorage.length > 0) {
    let keyIteam = 0;
    for (let i = 0; i < localStorage.length; i++) {
      keyIteam = localStorage.key(i);
      console.log(JSON.parse(localStorage.getItem(i)));
      dataEmp.push(JSON.parse(localStorage.getItem(keyIteam)));
    }
    // render Data from LocalStorage
    // for (let i = 0; i < user.length; i++) {
    //   user[i].renderLab8();
    // }
    console.log(dataEmp);
  }
}

function employeeNum(dataEmp) {
  let countFin = 0;
  let countMar = 0;
  let countDev = 0;
  let countAdm = 0;

  for (let i = 0; i < dataEmp.length; i++) {
    if (dataEmp[i][2] === "Marketing") {
      ++countMar;
    } else if (dataEmp[i][2] === "Finance") {
      ++countFin;
    } else if (dataEmp[i][2] === "Administration") {
      ++countAdm;
    } else if (dataEmp[i][2] === "Development") {
      ++countDev;
    }
  }

  marketing.push(countMar);
  administration.push(countAdm);
  finance.push(countFin);
  development.push(countDev);
  total.push(countMar + countAdm + countFin + countDev);
}

function avarageDepartment(dataEmp) {
  // total Salary Each Department
  let totMar = 0;
  let totAdm = 0;
  let totFin = 0;
  let totDev = 0;

  for (let i = 0; i < dataEmp.length; i++) {
    if (dataEmp[i][2] === "Marketing") {
      totMar += dataEmp[i][5];
    } else if (dataEmp[i][2] === "Finance") {
      totFin += dataEmp[i][5];
    } else if (dataEmp[i][2] === "Administration") {
      totAdm += dataEmp[i][5];
    } else if (dataEmp[i][2] === "Development") {
      totDev += dataEmp[i][5];
    }
  }
  // push Avarage Department  to Array
    
    marketing.push(totMar / marketing[1]);
    administration.push(totAdm / administration[1]);
    finance.push(totFin / finance[1]);
    development.push(totDev / development[1]);
    
  total.push(
    totMar / marketing[1] +
      totAdm / administration[1] +
      totFin / finance[1] +
      totDev / development[1]
    );
    
  // Total Salary For each Deparment
    marketing.push(totMar);
    administration.push(totAdm);
    finance.push(totFin);
    development.push(totDev);
    total.push(totMar + totAdm + totFin + totDev);
}

function renderTable() {
  let tbody = document.querySelector("tbody");
  let rowMarkiting = document.createElement("tr");
  // Render For Each Department
  //Markting
  for (let i = 0; i < marketing.length; i++) {
    let cell = document.createElement("td");
    cell.textContent = marketing[i];
    rowMarkiting.appendChild(cell);
  }
  tbody.appendChild(rowMarkiting);

  // Finance
  let rowFinance = document.createElement("tr");
  // Render For Each Department
  //Markting
  for (let i = 0; i < finance.length; i++) {
    let cell = document.createElement("td");
    cell.textContent = finance[i];
    rowFinance.appendChild(cell);
  }
  tbody.appendChild(rowFinance);

  // Adminstration
  let rowAdmin = document.createElement("tr");
  for (let i = 0; i < administration.length; i++) {
    let cell = document.createElement("td");
    cell.textContent = administration[i];
    rowAdmin.appendChild(cell);
  }
  tbody.appendChild(rowAdmin);

  //Development
  let rowDev = document.createElement("tr");
  for (let i = 0; i < development.length; i++) {
    let cell = document.createElement("td");
    cell.textContent = development[i];
    rowDev.appendChild(cell);
  }
    tbody.appendChild(rowDev);
    
  //Table 
    let rowTotal = document.createElement("tr");
    for (let i = 0; i < total.length; i++) {
      let cell = document.createElement("td");
      cell.textContent = total[i];
      rowTotal.appendChild(cell);
    }
    let tFoot = document.querySelector("tfoot");
    tFoot.appendChild(rowTotal);
}

function totalSalary() {}

getData();
console.log("Makiting : "+ marketing);
employeeNum(dataEmp);
console.log("Makiting : " + marketing);
avarageDepartment(dataEmp);
console.log("Makiting : " + marketing);
renderTable();
console.log(finance);





