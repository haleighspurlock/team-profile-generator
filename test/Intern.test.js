// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testSchool = 'school';
    const person = new Intern('name', 3, 'email', testSchool);

    expect(person.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
    const testR = 'Intern';
    const person = new Intern('name', 3, 'email', 'school');

    expect(person.getRole()).toBe(testR);
});

test("Can get school via getSchool()", () => {
    const getSchool = 'school';
    const person = new Intern('name', 3, 'email', getSchool);

    expect(person.getSchool()).toBe(getSchool);
});
