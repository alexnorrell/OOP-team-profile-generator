const Engineer = require('./lib/Engineer.js')

test('Make sure role is Engineer', () => {
    const Temployee = new Engineer(12, 'Tom', 'tom@tom.com')
    expect(Temployee.getRole()).toEqual('Engineer');
})