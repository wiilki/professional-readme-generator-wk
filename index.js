// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Include any tests for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['Apache_2.0', 'GPLv3', 'MIT']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email:',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    return userResponses = inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(userInput => {
        return generateMarkdown(userInput);
    })
    .then(inputInfo => {
        writeToFile('README.md', inputInfo);
    })
    .catch(err => {
        console.log(err);
    })
