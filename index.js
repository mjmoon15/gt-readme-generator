const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const inquirer = require("inquirer");



// array of questions for user
const questions = [
    {
        type: "input",
        message: "What title do you want to use?",
        name: "Title"
    },
    {
        type: "input",
        message: "Give a short description:",
        name: "Description"
    },
    {
        type: "input",
        message: "Table of contents:",
        name: "Table of Contents"
    },
    {
        type: "input",
        message: "Describe the installation process:",
        name: "Installation"
    },
    {
        type: "input",
        message: "Describe how to use the app:",
        name: "Usage"
    },
    {
        type: "list",
        message: "What type of license would you like to use?",
        choices: ["GNU AGPLv3", new inquirer.Separator(), "Mozilla Public License 2.0", new inquirer.Separator(), "Apache License 2.0", new inquirer.Separator(), "MIT License", new inquirer.Separator(), "Boost Software License 1.0"],
        name: "Licensing"
    },
    {
        type: "input",
        message: "Describe the process for contributing",
        name: "Contributing"
    },
    {
        type: "input",
        message: "Describe how to test",
        name: "Tests"
    },
    {
        type: "input",
        message: "If you have any questions, please contact me at ...",
        name: "Questions"
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
