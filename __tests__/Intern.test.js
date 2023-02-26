const Intern = require('./lib/Intern.js')

test('Make sure role is Intern', () => {
    const Temployee = new Intern(12, 'Tom', 'tom@tom.com')
    expect(Temployee.getRole()).toEqual('Intern');
})