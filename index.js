// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
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
    choices: [
      "Apache license 2.0 - apache-2.0",
      "Boost Software License 1.0 - bsl-1.0",
      'BSD 2-clause "Simplified" license - bsd-2-clause',
      'BSD 3-clause "New" or "Revised" license - bsd-3-clause',
      "Creative Commons Zero v1.0 Universal - cc0-1.0",
      "Eclipse Public License 2.0 - epl-2.0",
      "GNU Affero General Public License v3.0 - agpl-3.0",
      "GNU General Public License v2.0 - gpl-2.0",
      "GNU General Public License v3.0 - gpl-3.0",
      "GNU Lesser General Public License v2.1 - lgpl-2.1",
      "MIT - mit",
      "Mozilla Public License 2.0 - mpl-2.0",
      "The Unlicense - unlicense",
    ],
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

/* writeToFile("README", { title: "new title", license: "MIT" }); */
