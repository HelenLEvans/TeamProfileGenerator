teamMembers = [];
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const {
  managerQuestions,
  appMenu,
  engineerQuestions,
  internQuestions,
} = require("./questions");

console.log("Welcome to the Team Profile Generator!");
async function init() {
  try {
    const answers = await inquirer.prompt(managerQuestions);
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOfficeNumber
    );
    teamMembers.push(manager);
    menuChoice();
  } catch (err) {
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
  } catch (err) {
    console.log(err);
  }
}
async function engineerMenu() {
  try {
    const answers = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    teamMembers.push(engineer);
    menuChoice();
  } catch (err) {
    console.log(err);
  }
}
async function internMenu() {
  try {
    const answers = await inquirer.prompt(internQuestions);
    const intern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(intern);
    menuChoice();
  } catch (err) {
    console.log(err);
  }
}

init();
