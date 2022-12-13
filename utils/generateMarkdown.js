const fs = require('fs');

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return ``;
  } else {
    return `\n![${license}](https://img.shields.io/badge/License-${license}-green.svg)`;
  };
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
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
function renderLicenseSection(license, userName) {
  const year = new Date().getFullYear() 
  if (!license || license === 'None') {
    return ``;
  } else {
    return `\n## License 
    
    Copyright ${year} ${license.userName}

    Licensed under the ${license} License;
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

    ${renderLicenseLink(license)}

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
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
