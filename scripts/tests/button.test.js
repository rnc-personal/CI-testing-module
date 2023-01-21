// /**
//  * @jest-environment jsdom
//  */

// const buttonClick = require("../button");

// // beforeAll is a built in Jest function, runs this before anything else
// beforeAll(() => {
//     document.body.innerHTML = "<p id='par'></p>";
//     // Checks if this element is here
// });

// describe("DOM tests", () => {
//     test("Expects content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par")
//             .innerHTML).toEqual("You Clicked");
//             // Testing if the HTMl updates after the buttonClick function is run 
//     });
// });


/**
 * @jest-environment jsdom
 */

// Testing for many DOM elements

const buttonClick = require("../button");

beforeAll(() => {
    let fs = require("fs"); // Node File System function to load files
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

// Instead of checking for one element, load the entire file like a user would

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        // Specify the function you want to run for this test
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
            // Does the HTML content chage?
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
        // Checking how many H1 tags there are
    });
});

// Write as many tests as you need, because the whole DOM is already there.