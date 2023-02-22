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

