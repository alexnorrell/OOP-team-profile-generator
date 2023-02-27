const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(name, ID, email, gitHub){
        super(name, ID, email)
        this.gitHub = gitHub
    }
    getGitHub(){
        return this.gitHub
    }
    getRole(){
        return "Engineer"
    }
}
module.exports= Engineer