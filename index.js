// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Enter a description of your project.',
    'How do you install the project?',
    'How do you use your project?',
    'How can someone contribute to your project?',
    'Include any tests for your project.',
    'Choose a license.'
];

// TODO: Create a function to write README file
const writeToFile = ({title, description, installation, usage, contributing, tests, license}) =>
    `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [Tests](#tests)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

Have questions? [Email Me!](mailto: thewillkim@icloud.com)

`;

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contributing',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'tests',
                message: questions[5],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
                choices: ['License 1', 'License 2', 'License 3', 'License 4', 'License 5']
            },
        ])
        .then((answers) => {
            const readmeContent = writeToFile(answers);

            fs.writeFile('README.md', readmeContent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
        });
}

// Function call to initialize app
init();



