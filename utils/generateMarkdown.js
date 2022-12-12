const fs = require('fs');

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'none') {
    return ``;
  } else {
    return `![${license}](https://img.shields.io/badge/License-${license}-green.svg)`;
  };
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'none') {
    return ``;
  } else {
    if (license === 'Apache_2.0') {
      return `https://www.apache.org/licenses/LICENSE-2.0.txt`;
    };
    if (license === 'GPLv3') {
      return `https://www.gnu.org/licenses/gpl-3.0.txt`;
    };
    if (license === 'MIT') {
      return `https://www.mit.edu/~amini/LICENSE.md`;
    };
  };
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'none') {
    return ``;
  } else {
    return `\n## Licenses    
    \n${renderLicenseLink(license)}
    
    ## Badges
    \n${renderLicenseBadge(license)}    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Tests](#tests)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  Have questions? [Email Me!](mailto:${data.email})`;
}

module.exports = generateMarkdown;
