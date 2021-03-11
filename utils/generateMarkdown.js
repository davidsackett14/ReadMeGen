//badges
const badge= function(license){
switch(`${license}`) {
  case 'MIT':
    licenseBadge = '![License](https://img.shields.io/badge/license-MIT-green)'
    break;
  case 'Apache2':
    licenseBadge = '![License](https://img.shields.io/badge/license-Apache2.0-green)'
    break;
  case 'GPLv3':
    licenseBadge = '![License](https://img.shields.io/badge/license-GPLv3-green)'
    break;
  case 'JRL':
    licenseBadge = '![License](https://img.shields.io/badge/license-JRL-red)'
    break;
}
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${badge(data.license)}
  ---
  # ${data.title}

  ## Description
  
  ${data.description}
  
  
  ## Table of Contents (Optional)
  ---
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  
  ## Usage 
  
  ${data.usage}
  
  
  ## Credits
  
  ${data.credits}
  
  
  ## License
  
  ${data.License}
  
  
  ## Languages Used

  ${data.languages}

  ## Features
  
  ${data.features}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
 
`;
}

module.exports = generateMarkdown;
