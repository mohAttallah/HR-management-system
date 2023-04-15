
// Function Generate Random Number
function randNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//Constartor Employee
function Employee(id, name, depart, level, img) {
  this.id = id;
  this.fullName = name;
  this.department = depart;
  this.level = level.toLowerCase();
  this.image = img;
}
// Salary Genrate
Employee.prototype.Salary = function () {
  if (this.level === "senior") {
    this.salary = randNumber(1500, 2000);
  } else if (this.level === "mid-senior") {
    this.salary = randNumber(1000, 1500);
  } else if (this.level === "junior") {
    this.salary = randNumber(500, 1000);
  }
};

// nat Calculate
Employee.prototype.Nat = function () {
  let taxPercent = this.salary / 7.5;
  return parseInt( this.salary - taxPercent);
};

//test
let moh = new Employee(1, "Mohammad", "Administration", "Senior", "Image URL");
moh.Salary();
console.log(moh.salary);
console.log(moh.Nat());
