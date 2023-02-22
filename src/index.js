teamMembers = [
]
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?",
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }

    }, {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID?",
        validate: managerIdInput => {
            if (managerIdInput) {
                return true;
            } else {
                console.log("Please enter the manager's ID!");
                return false;
            }
        }
    },

    {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email?",
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log("Please enter the manager's email!");
                return false;

            }
        }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is the manager's office number?",
        validate: managerOfficeNumberInput => {
            if (managerOfficeNumberInput) {
                return true;
            } else {
                console.log("Please enter the manager's office number!");
                return false;
            }
        }

    }



]
const appMenu = [
    {
        type: "list",
        name: "menuChoice",
        message: "Which type of employee would you like to add?",
        choices: [
            "Engineer",
            "Intern",
            "I don't want to add any more team members"]
    }
]

const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?",
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!");
                return false;

            }

        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "What is the engineer's ID?",
        validate: engineerIdInput => {
            if (engineerIdInput) {
                return true;
            } else {
                console.log("Please enter the engineer's ID!");
                return false;

            }
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineer's email?",
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log("Please enter the engineer's email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the engineer's GitHub username?",
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log("Please enter the engineer's GitHub username!");
                return false;

            }
        }
    },

]
const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!");
                return false;

            }
        }
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's ID?",
        validate: internIdInput => {
            if (internIdInput) {
                return true;
            } else {
                console.log("Please enter the intern's ID!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email?",
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log("Please enter the intern's email!");
                return false;

            }
        }
    },
    {
        type: "input",
        name: "internSchool",
        message: "What is the intern's school?",
        validate: internSchoolInput => {
            if (internSchoolInput) {
                return true;
            } else {
                console.log("Please enter the intern's school!");
                return false;
            }
        }

    }

]
console.log("Welcome to the Team Profile Generator!");
async function init() {
    try {
      const answers = await inquirer.prompt(managerQuestions);
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamMembers.push(manager);
      menuChoice();

    }
    catch (err) {
        console.log(err);
    }

}

async function menuChoice() {
    try {
        const answers = await inquirer.prompt(appMenu);
        switch (answers.menuChoice) {
            case "Engineer":
                await engineerMenu();
                break;
            case "Intern":
                await internMenu();
                break;
            case "I don't want to add any more team members":
                console.log(teamMembers);
                console.log("Goodbye!");
                break;
            default:
                console.log("Please enter a valid option!");
                break;
        }
    }
    catch (err) {
        console.log(err);
    }
}
async function engineerMenu() {
    try {
        const answers = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        menuChoice();
    }
    catch (err) {
        console.log(err);
    }
}
async function internMenu() {
    try {
        const answers = await inquirer.prompt(internQuestions);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        menuChoice();
    }
    catch (err) {
        console.log(err);
    }
}


init();
