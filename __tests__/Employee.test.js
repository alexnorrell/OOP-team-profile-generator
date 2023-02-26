const Employee = require('./lib/Employee.js')

describe("Employee Class", () => {
    describe("Employee name", () => {
        it('should show name as Tom, email as tom@tom.com and id as 12.', () => {
            const Temployee = new Employee (12, 'tom@tom.com', 'Tom');
            expect(Temployee.getName()).toEqual('Tom');
            expect(Temployee.getEmail()).toEqual('tom@tom.com');
            expect(Temployee.getID()).toEqual(12);
        })
    }) 
});