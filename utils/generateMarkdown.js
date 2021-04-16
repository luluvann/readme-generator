// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return "";
  }
  return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)]`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return "";
  }
  return `(https://opensource.org/licenses/${license})`
}

function renderLicenseTableOfContents(license){
  if(!license){
    return "";
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return "";
  }
  return `## License
  This project is under the ${license} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

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
`;
}

module.exports = generateMarkdown;
