const inquirer = require('inquirer')
const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const managerQuestions = [
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
        type:'input', name:'officeNumber', message:'What are your office number?'
    }
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
const engenieerQuestions =[
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
function managerQuestions() {
    inquirer.prompt(managerQuestions).then(function(answers){
        console.log(answers)
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber)
            console.log(manager)
    })
}
function internQuestions() {
    inquirer.prompt(internQuestions).then(function(answers){
        console.log(answers)
    })
}
function engineerQuestions() {
    inquirer.prompt(engineerQuestions).then(function(answers){
        console.log(answers)
    })
}
managerQuestions()
internQuestions()
engineerQuestions()