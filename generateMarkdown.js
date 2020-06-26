// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Badges
  
  ![badmath](https://img.shields.io/github/forks/${data.username}/${data.repo}?style=social)
  
  ## Description
  
  ${data.description}
  
  ---
  
  ## Table of Contents 

  ${data.tableOfContents}
  
  ---

  ## Installation 
  
  ${data.installation}
  
  ---

  ## Usage
  
  ${data.usage} 
  
  ---

  ## License
  
  ${data.licensing}
  
  ---

  ## Contributing
  
  ${data.contributing}
  
  ---

  ## Tests
  
  ${data.tests}
  
  ---

  ## Contact

  [Please check out my github portfolio here](https://github.com/${data.username})
  

  [For further questions, please contact me at ${data.email}.](mailto:${data.email}) 
  
  ---
  © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

`;
}

module.exports = generateMarkdown;
