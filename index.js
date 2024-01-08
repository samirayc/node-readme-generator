const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

//Questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the name of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the purpose and functionality of the project.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license applicable to this project.',
        choices: ['MIT', 'GPLv2', 'GPLv3', 'Apache', 'AGPLv3', 'LGPLv3', 'BSD2', 'BSD3', 'Unlicense', 'None', 'Other'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give instructions on how to install this project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please state the languages or technologies used with this project.',
    },
    {
        type: 'input',
        name: 'name',
        message: 'State your first and last name.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please give any guidelines for making contributions to the project.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a valid email where you can be reached with additional questions.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instuctions or a walkthrough if possible of required tests.',
    },
];


// Creating README file
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating professional README.md file...');
        writeToFile('./README.md', generateMarkdown({ ...responses }));
    });
}
init();