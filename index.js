const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the Title of your project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Please provide a Description about your project."
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide installation instructions:"
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide Usage information:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0']
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
      },
      {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address:'
      }
    ]).then(answers => {
    fs.writeFile('README.md', generateMarkdown(answers), (err) => {
        if (err) throw err;
        console.log('README file has been created!')
    });
});