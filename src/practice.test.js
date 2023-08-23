const capitalize = require("./practice");

test("returns a string with the first letter capitalized", () => {
    expect(capitalize("programmer")).toBe("Programmer");
});