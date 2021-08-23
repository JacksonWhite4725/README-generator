// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.appTitle}\n\n
  ## Application Description\n\n
  ${data.appPurpose}\n\n
  ## Table of Contents\n\n
  * How to Use Application\n
  * How to Install Application\n
  * How to Report Application Issues\n
  * How to Contribute to Application\n\n
  ## How to Use Application\n\n
  ${data.appUsage}\n\n
  ## How to Install Application\n\n
  ${data.appInstall}\n\n
  ## How to Report Application Issues\n\n
  ${data.appIssues}\n\n
  ## How to Contribute to Application\n\n
  ${data.appContributions}\n\n
`;
}

module.exports = generateMarkdown;
