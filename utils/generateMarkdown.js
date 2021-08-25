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
  return `# ${data.appTitle}\n
  ## ${data.appTitle} Description\n
  ${data.appPurpose}\n
  ## Table of Contents\n
  * How to Use ${data.appTitle}
  * How to Install ${data.appTitle}
  * How to Report ${data.appTitle} Issues
  * How to Contribute to ${data.appTitle}\n
  ## How to Use ${data.appTitle}\n
  ${data.appUsage}\n
  ## How to Install ${data.appTitle}\n
  ${data.appInstall}\n
  ## How to Report ${data.appTitle} Issues\n
  ${data.appIssues}\n
  ## How to Contribute to ${data.appTitle}\n
  ${data.appContributions}\n
`;
}

module.exports = generateMarkdown;
