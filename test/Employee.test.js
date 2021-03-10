// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const person = new Employee();

    expect(person instanceof Employee).toBe(true);

});

test("Can set name via constructor arguments", () => {
    const name = 'Nicole';
    const person = new Employee(name);

    expect(person.name).toBe(name)
});

test("Can set id via constructor argument", () => {
    const testId = '3';
    const person = new Employee ('name', testId, 'email');

    expect(person.id).toBe(testId);
});

test("Can set email via constructor argument", () => {
    const testEmail = 'test@testemail.com';
    const person = new Employee ('name', 'id', testEmail);

    expect(person.email).toBe(testEmail)
});

test("Can get name via getName()", () => {
    const name = 'haleigh';
    const person = new Employee(name);

    expect(person.getName()).toBe(name);
});

test("Can get id via getId()", () => {
    const testI = '3';
    const person = new Employee ('name', testI, 'email');

    expect(person.getId()).toBe(testI);
});

test("Can get email via getEmail()", () => {
    const testE = 'test@testemail.com';
    const person = new Employee ('name', 'id', testE);

    expect(person.getEmail()).toBe(testE);
});

test("getRole() should return \"Employee\"", () => {
    const role = 'Employee'
    const person = new Employee (role)

    
});
