const licenses = require("./licenses.js");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let splittedLicense = license.split(" - ")
  let licenseKeyword = splittedLicense[1]
  if(!licenseKeyword){
    return "";
  }
  return `[![License: MIT](https://img.shields.io/badge/License-${licenseKeyword}-yellow.svg)]`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let splittedLicense = license.split(" - ")
  let licenseKeyword = splittedLicense[1]
  if(!licenseKeyword){
    return "";
  }
  return `(https://opensource.org/licenses/${licenseKeyword})`
}

function renderLicenseTableOfContents(license){
  if(license === "None"){
    return "";
  }
  return `* [License](#license)`
}
 



function getLicenseBadge(licenses,licenseName){
  if(licenseName === "None"){
    return "";
  }
  let index = licenses.findIndex( license => license.licenseName == licenseName)
  let licenseBadge = licenses[index].licenseBadge
  return licenseBadge
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None"){
    return "";
  }
  return `## License
  This project is covered under ${license}.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${getLicenseBadge(licenses,data.license)}

## Description 
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseTableOfContents(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}


## Tests
${data.tests}

## Questions
If you have any question, please go checkout my [Github profile](https://github.com/${data.github})
or email me [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
