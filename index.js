const inquirer= require('inquirer');
const fs = require ('fs');
const util = require('util');
// array of questions for user
const questions = () => inquirer.prompt(
[{
    type :'input',
    name : 'title',
    message : 'what is the title of this project?',

},
{
    type : 'input',
    name : 'words',
    message : 'what is the title of this project?',

}

]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
questions()
  .then((answers) => writeFileAsync('index.html', generateHTML(answers)))

  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));