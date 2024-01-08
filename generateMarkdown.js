// Function that returns a license badge based on the license checkmarked
function renderLicenseBadge(license) {
    if (license !== 'none') {
        return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
    }
    return '';
}


//Creating a function that returns the license link
function renderLicenseLink(license) {
    if (license !== 'none') {
        return `\n* [License](#license)\n`;
    }
    return '';
}




// Creating a function that returns the license section of README
function renderLicenseSection(license) {
    if (license !== 'none') {
        return `## License


        Liscensed under the ${license} license.`;
    }
    return '';
}


// Creating a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    by ${data.name}
    ${renderLicenseBadge(data.license)}

    ## Table of Contents
    • [Description](#description)
    • [Installation](#installation)
    • [Usage](#usage)
    • [Contribution Guidelines](#contributions)
    • [Questions](#questions)
    • [Tests](#tests)
    ${renderLicenseLink(data.license)}
    ## Description
    ${data.description}
    ## Installation
    ${data.installation}
    ## Usage
    ${data.usage}
    ## Contribution Guidelines
    ${data.contributionGuidelines}
    ## Questions
    • Name - ${data.name}
    • Email - ${data.email}
    • Github - [${data.github}](https://github.com/${data.github}/)
    ## Tests
    \'\'\'
    ${data.tests}
    \'\'\'
    ${renderLicenseSection(data.license)}
    `;
}


module.exports = generateMarkdown;