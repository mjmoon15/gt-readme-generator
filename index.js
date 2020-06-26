const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");



// array of questions for user
const questions = [
    {
        type: "input",
        message: "What title do you want to use?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is the name of your github repo?",
        name: "repo"
    },
    {
        type: "input",
        message: "Give a short description:",
        name: "description"
    },
    {
        type: "checkbox",
        message: "Table of contents:",
        name: "tableOfContents",
        choices: ["[Installation](#installation)", "\n", "[Usage](#usage)", "\n", "[License](#license)", "\n", "[Contributing](#contributing)", "\n", "[Tests](#tests)", "\n", "[Contact](#contact)"   
        ]
    },
    {
        type: "input",
        message: "Describe the installation process:",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe how to use the app:",
        name: "usage"
    },
    {
        type: "list",
        message: "What type of license would you like to use?",
        choices: ["GNU AGPLv3", new inquirer.Separator(), "Mozilla Public License 2.0", new inquirer.Separator(), "Apache License 2.0", new inquirer.Separator(), "MIT License", new inquirer.Separator(), "Boost Software License 1.0"],
        name: "licensing"
    },
    {
        type: "input",
        message: "Describe the process for contributing",
        name: "contributing"
    },
    {
        type: "input",
        message: "Describe how to test",
        name: "tests"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    fs.writeFile("generatedREADME.md", data, function(err){
        if (err){
            throw err;
        }
        console.log(data)
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data)
    const markDown = generateMarkdown(data);
    writeToFile("generatedREADME.md", markDown)
    });


};

// function call to initialize program
init();
