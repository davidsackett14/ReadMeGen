const inquirer= require('inquirer');
const fs = require ('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = () => inquirer.prompt(
[{
    type :'input',
    name : 'title',
    message : 'what is the title of this project?',

},
{
    type : 'input',
    name : 'description',
    message : 'Please give a description of this project',

},
{
    type :'input',
    name : 'installation',
    message : 'How is this program installed or ran by the end user?',

},
{
    type :'input',
    name : 'usage',
    message : 'list usage examples',

},
{
    type :'input',
    name : 'credits',
    message : 'what resources were used to create this project?',

},
{
    type :'rawlist',
    name : 'license',
    message : 'please select the license type for this project',
    choices: ['MIT', 'Apache2.0', 'GPLv3','JRL'],

},
{
    type :'input',
    name : 'languages',
    message : 'what programming languages were used in this project',

},
{
    type :'input',
    name : 'features',
    message : 'what are teh features of this application',

},
{
    type :'input',
    name : 'contributing',
    message : 'how can people contribute to this project?',

},
{
    type :'input',
    name : 'tests',
    message : 'what are tests to run to check for correct operation of app',

},

]);

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
questions()
  .then((data) => writeFileAsync('readMe.md', generateMarkdown(data)))

  .then(() => console.log('Successfully wrote to readMe.md'))
  .catch((err) => console.error(err));