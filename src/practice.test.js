const reverseString = require("./practice");

// test("returns a string with the first letter capitalized", () => {
//     expect(capitalize("programmer")).toBe("Programmer");
// });

test("return the input string reversed", () => {
    expect(reverseString("the car is so fast")).toBe("tsaf os si rac eht");
});