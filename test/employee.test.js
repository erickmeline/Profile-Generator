const Employee = require('../lib/Employee.js');
console.log('ok');
describe('employee', () => {
    it('Can instantiate Employee instance', () => {
        const e = new Employee();
        expect(typeof e).toBe('object');
    });

    it('Can set name via constructor arguments', () => {
        const name = 'Erick';
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it('Can set id via constructor argument', () => {
        const testValue = 100;
        const e = new Employee('Erick', testValue);
        expect(e.id).toBe(testValue);
    });

    it('Can set email via constructor argument', () => {
        const testValue = 'test@test.com';
        const e = new Employee('Erick', 1, testValue);
        expect(e.email).toBe(testValue);
    });

    it('Can get name via getName()', () => {
        const testValue = 'Erick';
        const e = new Employee(testValue);
        expect(e.getName()).toBe(testValue);
    });

    it('Can get id via getId()', () => {
        const testValue = 100;
        const e = new Employee('Erick', testValue);
        expect(e.getId()).toBe(testValue);
    });

    it('Can get email via getEmail()', () => {
        const testValue = 'test@test.com';
        const e = new Employee('Erick', 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });

    it('getRole() should return "Employee"', () => {
        const testValue = 'Employee';
        const e = new Employee('Erick', 1, 'test@test.com');
        expect(e.getRole()).toBe(testValue);
    });
});
