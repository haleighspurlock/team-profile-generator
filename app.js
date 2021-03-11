// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const PromptUI = require("inquirer/lib/ui/prompt");
const { resolve } = require("path");
const { rejects } = require("assert");

const employees = [];

const employeeQuestions = {
    'Manager' : [        
        {
            type: 'input',
            message:'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',  
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'office',
        },
    ],
    'Engineer' : [
        {
            type: 'input',
            message:'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',  
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        }
    ],
    'Intern' : [
        {
            type: 'input',
            message:'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'id',  
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school do you go to?',
            name: 'school',
        }
    ],
}

function askManagerQuestion() {
    console.log("Hello Manager!")
    let questions = employeeQuestions['Manager']
    return inquirer.prompt(questions).then((data)=>{
        createEmployee('Manager', data)
    })
}

function getNextEmployeeRole() {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            name: 'options',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish Team Page']
        }
    ])
}

function getEmployeeInfo(role) {
    const questions = employeeQuestions[role];
    return inquirer.prompt(questions)
}

function createEmployee(role, employeeData) {
    switch(role) {
        case 'Manager' :
            const manager = new Manager (employeeData.name, employeeData.id, employeeData.email, employeeData.office);
            employees.push(manager)
            break
        case 'Engineer' :
            const engineer = new Engineer (employeeData.name, employeeData.id, employeeData.email, employeeData.github);
            employees.push(engineer)
            break
        case 'Intern' :
            const intern = new Intern (employeeData.name, employeeData.id, employeeData.email, employeeData.school);
            employees.push(intern)
            break
    }
}

async function createNextEmployee() {
    const data = await getNextEmployeeRole();

    if (data.options != 'Finish Team Page') {
        var role = data.options === 'Add an Engineer' ? 'Engineer' : 'Intern';
        getEmployeeInfo(role).then((employeeInfo) => {
            createEmployee(role, employeeInfo);
            createNextEmployee();
        });
    } else {
        fs.writeFile(outputPath, render(employees), (error) => {
            if (error)
                console.log(error);
        });
    }
}

askManagerQuestion().then(()=>{
    createNextEmployee()
})

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```