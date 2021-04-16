// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    "Provide your project Title:",
    "Provide your project General description of the project:",
    "Provide your project Installation instructions:",
    "Provide your project Usage information:",
    "Provide your project Contribution Guidelines:",
    "Provide your project Test Instructions:",
    "Select your project Licence:",
    "Provide your Github username",
    "Provide your email address",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./generated-readme/${fileName}.md`, generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log(
          "README file has been generated! Check out in README.md in the folder 'generated-readme' to see the output!"
        );
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

writeToFile("README",{title:"new title"})