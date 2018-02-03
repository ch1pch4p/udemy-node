const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if(res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it('should add square a number', () => {
    var res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
});

it('should verify first and last names are set', () => {
   var user = {};
   user.age = 18;
   user.location = 'Dallas';
   var result = utils.setName(user, "Jimmy Loggins");
   expect(result).toInclude({
       firstName: "Jimmy",
       lastName: "Loggins"
   })
});