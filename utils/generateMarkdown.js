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
  let splittedLicense = license.split(" - ")
  let licenseKeyword = splittedLicense[1]
  if(!licenseKeyword){
    return "";
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let splittedLicense = license.split(" - ")
  let licenseName = splittedLicense[0]
  let licenseKeyword = splittedLicense[1]
  if(!license){
    return "";
  }
  return `## License
  This project is under the ${licenseName} license.`
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
