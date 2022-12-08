// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'Enter a description of your project.',
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
        message: 'Include any tests for your project.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ['License 1', 'License 2', 'License 3', 'License 4', 'License 5']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    const userResponses = inquirer.prompt(questions);
}

// Function call to initialize app
init();



