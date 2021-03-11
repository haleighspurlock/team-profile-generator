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
        }
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
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function start () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What role do you play on this team?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
    ]).then((data) => { 
        const questions = employeeQuestions[data.role];
        inquirer.prompt(questions).then((data2) => {
            switch(data.role) {
                case 'Manager' :
                    const manager = new Manager (data2.name, data2.id, data2.email, data2.office);
                    employees.push(manager)
                    break
                case 'Engineer' :
                    const engineer = new Engineer (data2.name, data2.id, data2.email, data2.github);
                    employees.push(engineer)
                    break
                case 'Intern' :
                    const intern = new Intern (data2.name, data2.id, data2.email, data2.school);
                    employees.push(intern)
                    break
            }
            console.log(render(employees));
        })
    })
};

start();



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