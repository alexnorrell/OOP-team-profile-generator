const inquirer = require('inquirer')
const questions = [
    {
        type:'input', name:'name', message:'What is your name?'
    },
    {
        type:'input', name:'ID', message:'What is your employe ID?' 
    },
    {
        type:'input', name:'email', message:'What are your email adress?'
    },    
    {
        type:'input', name:'officeNumber', message:'What are your office number?'
    }
]
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers)
    })
}

        init()