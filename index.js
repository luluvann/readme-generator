// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenses = require("./utils/licenses.js");
// TODO: Create an array of questions for user input

let LicensesNameList = generateLicensesNameList(licenses)

const questions = [
  { type: "input", name: "title", message: "Provide your project Title:" },
  {
    type: "input",
    name: "description",
    message: "Provide your project General description of the project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide your project Installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide your project Usage information:",
  },
  {
    type: "input",
    name: "credits",
    message: "Provide your project Credits:",
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide your project Contribution Guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide your project Test Instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Select your project Licence:",
    choices: [...LicensesNameList],
  },
  {
    type: "input",
    name: "github",
    message: "Provide your Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Provide your email address:",
  },
];

function generateLicensesNameList(licenses){
  licensesNameList = []
  licenses.forEach(license => {
    licensesNameList.push(license.licenseName)
  })
  return licensesNameList
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(
    `./generated-readme/${fileName}.md`,
    generateMarkdown(data),
    (err) => {
      if (err) throw err;
      console.log(
        "README file has been generated! Check out in README.md in the folder 'generated-readme' to see the output!"
      );
    }
  );
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt([...questions]);
}

// Function call to initialize app
init()
.then((data) => {
  writeToFile("README",data)
});


