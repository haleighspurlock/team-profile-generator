// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set GitHUb account via constructor", () => {
    const githubTest = 'github';
    const person = new Engineer('name', 3, 'email', githubTest);

    expect(person.github).toBe(githubTest);
});

test("getRole() should return \"Engineer\"", () => {
    const testR = 'Engineer';
    const person = new Engineer ('name', 3, 'email', 'github')

    expect(person.getRole()).toBe(testR);
});

test("Can get GitHub username via getGithub()", () => {
    const githubName = 'github';
    const person = new Engineer ('name', 3, 'email', githubName);

    expect(person.getGithub()).toBe(githubName);
});
