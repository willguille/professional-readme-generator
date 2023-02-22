const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
{
    type: 'input',
    name: 'title',
    message: "What is your project's title?",
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a brief description of your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide usage instructions for your project:',
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL'],
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines for your project:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions for running tests on your project:',
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: function (input) {
        // check if email is valid
        return /\S+@\S+\.\S+/.test(input) ? true : 'Please enter a valid email address';
      }
},