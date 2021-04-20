const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, department, email, id) {
    super(name, id, email)
    this.department = department;
  }
  getDepartment() {
    return this.department;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
