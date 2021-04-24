const inquirer = require('inquirer');
const fs = require('fs');


const questions = [
    { type: 'input', name: 'title', message: 'What is the name of your project?'},
    { type: 'input', name: 'description', message: 'Write a brief description of your project:'},
    { type: 'input', name: 'installation', default: 'npm install'},
    { type: 'input', name: 'usage', message: 'What information is needed for usage?'},
    { type: 'input', name: 'contribution', message: 'Who contributed to this project?'},
    { type: 'input', name: 'test', message: 'What command would you like to use to run tests?'},
    { type: 'list', name: 'license', choices: ['GNU', 'MIT', 'BSD', 'GPL', 'N/A']},
    { type: 'input', name: 'github', message: 'Enter your github link:'},
    { type: 'input', name: 'email', message: 'Enter your email:'}
];

// inquirer
//    .prompt([

//    ])
//    .then(answers=> {

//    })
//    .catch(err => {
//        if(err.isTtyError) {

//        } else {

//        }
//    })


function init () {
    inquirer.prompt(questions)
    .then((info) => {
        console.log(info);
    
    let readmeInfo = 
`
# Title: ${info.title}

## Table of Contents:
* [Description: ](#description)
* [Installation:](#installation)
* [Usage: ](#usage)
* [Contribution: ](#contribution)
* [Test: ](#test)
* [License: ](#license)
* [GitHub: ](#github)
* [Email: ](#email)
    
## Description
${info.description}

## Installation
${info.installation}

## Usage
${info.usage}

## Contribution
${info.contribution}

## Test
${info.test}

## License
${info.license}

## GitHub
${info.github}

## Email
${info.email}
    
`
    console.log(readmeInfo);

    fs.writeFileSync('README.MD', readmeInfo, err => {
        if(err){
            console.log(err);
        } else{
            console.log('Success');
        }
        });
    
    });
};

init();

