const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const fs = require('fs')
const managerQuestions = [
    {
        type:'input', name:'name', message:'What is your name?',
    },
    {
        type:'input', name:'ID', message:'What is your employee ID?' ,
    },
    {
        type:'input', name:'email', message:'What are your email adress?',
    },    
    {
        type:'input', name:'officeNumber', message:'What are your office number?',
    },
]
const internQuestions = [
    {
        type:'input', name:'name', message:'What is your name?'
    },
    {
        type:'input', name:'ID', message:'What is your employee ID?' 
    },
    {
        type:'input', name:'email', message:'What are your email adress?'
    },    
    {
        type:'input', name:'school', message:'What school did you attend?'
    }
]
const engineerQuestions =[
    {
        type:'input', name:'name', message:'What is your name?'
    },
    {
        type:'input', name:'ID', message:'What is your employee ID?' 
    },
    {
        type:'input', name:'email', message:'What are your email adress?'
    },    
    {
        type:'input', name:'github', message:'What is your git hub user name?'
    }
]
let employeeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OOP</title>
    <link href="style.css" rel="stylesheet" type="text/css">
</head>
<body>
    <div>
       <header class="header">
        <h2>My Team</h2>
        </header>
    </div>
    <div class="grid">`
function managerPrompts() {
    inquirer.prompt(managerQuestions).then(function(answers){
       
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber)
           employeeHtml +=` 
           <div class="grid-item">
           <div class="card">
               <div class="card-content">
                  <h1 class="card-header"> ${manager.getName()}</h1>
                  <p class="card-text"> email: <a href="mailto:${manager.getEmail}">${manager.getEmail ()}</a></p>
                  <p class="card-text"> ID: ${manager.getID()}</p>
                  <p class="card-text"> Office Number: ${manager.getOfficeNumber()}</p>
               </div>
           </div>
       </div> `;
       initialPrompt();
    })
}
function internPrompts() {
    inquirer.prompt(internQuestions).then(function(answers){
        const intern = new Intern(answers.name, answers.ID, answers.email, answers.school)
        employeeHtml +=` 
        <div class="grid-item">
        <div class="card">
            <div class="card-content">
               <h1 class="card-header">${intern.getName()}</h1>
               <p class="card-text"> email: <a href="mailto:${intern.getEmail}">${intern.getEmail()}</a></p>
               <p class="card-text"> ID: ${intern.getID()}</p>
               <p class="card-text"> School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div> `;
    initialPrompt();
    })
}
function engineerPrompts() {
    inquirer.prompt(engineerQuestions).then(function(answers){
        const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.gitHub)
        employeeHtml +=` 
        <div class="grid-item">
        <div class="card">
            <div class="card-content">
               <h1 class="card-header">${engineer.getName()}</h1>
               <p class="card-text"> email: <a href="mailto:${engineer.getEmail}">${engineer.getEmail()}</a></p>
               <p class="card-text"> ID: ${engineer.getID()}</p>
               <p class="card-text"> GitHub: <a${engineer.getGitHub}">https://github.com/${engineer.getGitHub()}</a></p>
            </div>
        </div>
    </div> `;
    initialPrompt();
    })

}

function initialPrompt(){
    inquirer.prompt([
        {
            type: 'list', 
            message: 'What kind of employeewould you like to add?', 
            name: 'employeeChoice', 
            choices: ['Manager', 'Engineer', 'Intern', 'Quit']
        }
    ]).then(userChoices => {
        if (userChoices.employeeChoice === 'Manager'){
            managerPrompts()
            // initialPrompt()
        }
        if (userChoices.employeeChoice === 'Engineer'){
            engineerPrompts()
            // initialPrompt()
        }
        if (userChoices.employeeChoice === 'Intern'){
            internPrompts()
            // initialPrompt()
        }
        if(userChoices.employeeChoice === 'Quit'){
            pageHTML();
        }

    })
}

function pageHTML(){
    employeeHtml +=`    </div>
    </body>
    </html>`
    fs.writeFile('dist/page.html', employeeHtml, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}


// managerPrompts()
// internPrompts()
// engineerPrompts()

initialPrompt()