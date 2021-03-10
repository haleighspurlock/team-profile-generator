// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumTest = '1';
    const person = new Manager('name', 3, 'email', officeNumTest);

    expect(person.officeNumber).toBe(officeNumTest);
});

test('getRole() should return "Manager"', () => {
    const testR = 'Manager';
    const person = new Manager('name', 3, 'email', 1);

    expect(person.getRole()).toBe(testR);
});

test("Can get office number via getOffice()", () => {
    const getOfficeNum = '1';
    const person = new Manager('name', 3, 'email', getOfficeNum);

    expect(person.getOfficeNumber()).toBe(getOfficeNum);
});
