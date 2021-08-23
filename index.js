// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

console.log('Hi! Welcome to the README generator!');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'appTitle',
        message: 'What is this app called?\n',
    }, {
        type: 'input',
        name: 'appPurpose',
        message: 'What is this app used for?\n',
    }, {
        type: 'input',
        name: 'appUsage',
        message: 'How does someone use this app?\n',
    }, {
        type: 'input',
        name: 'appInstall',
        message: 'How is this app installed?\n',
    }, {
        type: 'input',
        name: 'appIssues',
        message: 'How does a user report issues?\n',
    }, {
        type: 'input',
        name: 'appContributions',
        message: 'How does a user make contributions to the app?\n',
    }
];

// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
    var readMe = generateMarkdown(answers);
    fs.writeFile('README.md', readMe, (err) => 
        err ? console.error(err) : console.log('Commit logged!'));
});
/*
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
*/