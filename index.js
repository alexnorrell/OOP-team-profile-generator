const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
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
let employeeHtml = ''
function managerPrompts() {
    inquirer.prompt(managerQuestions).then(function(answers){
       
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber)
           employeeHtml +=` 
           <div class="grid-item">
           <div class="card">
               <div class="card-content">
                  <h1 class="card-header">${manager.getName()}</h1>
                  <p class="card-text"> email: ${manager.getEmail()}</p>
                  <p class="card-text"> ID: ${manager.getID()}</p>
                  <p class="card-text"> Office Number: ${manager.getOfficeNumber()}</p>
               </div>
           </div>
       </div> `;
       console.log(employeeHtml)
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
               <p class="card-text"> email: ${intern.getEmail()}</p>
               <p class="card-text"> ID: ${intern.getID()}</p>
               <p class="card-text"> School: ${intern.getSchool()}</p>
            </div>
        </div>
    </div> `;
    console.log(employeeHtml)
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
               <p class="card-text"> email: ${engineer.getEmail()}</p>
               <p class="card-text"> ID: ${engineer.getID()}</p>
               <p class="card-text"> School: ${engineer.getGitHub()}</p>
            </div>
        </div>
    </div> `;
    console.log(employeeHtml)
    })

}
// managerPrompts()
// internPrompts()
engineerPrompts()