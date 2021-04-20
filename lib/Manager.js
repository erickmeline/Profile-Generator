const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, department) {
    super(name, id, email)
    this.department = department;
  }
  getofficeNumber() {
    return this.department;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
