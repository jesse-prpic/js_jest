const {niceLogger} = require("../src/niceLogger.js");

test("niceLogger returns Hello World", () => {
    // Test happens here
    //the reason why we create this is to build up expectations to do something
    // exportAllDeclaration(sth).toBe(sth);

    // lets make a test
    expect(niceLogger()).toBe("Hello World.");
    // expect(what()).tobe(who);
});






// test("jesseIsCool returns Jesse is the coolest", () => {

//     expect(true).toBe(true);
// });