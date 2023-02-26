const Manager = require('./lib/Manager.js')

test('Make sure role is Manager', () => {
    const Temployee = new Manager(12, 'Tom', 'tom@tom.com')
    expect(Temployee.getRole()).toEqual('Manager');
})