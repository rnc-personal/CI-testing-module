/**
 * @jest-environment jsdom
 */

// const { test } = require("picomatch")
// const { describe } = require("yargs")

const { game, newGame, showScore, addTurn, lightsActivated } = require("../game")

// Opening the HTML file
beforeAll(() => {
    let fs = require("fs")
    let fileContents = fs.readFileSync("simon.html", "utf-8")
    document.open()
    document.write(fileContents)
    document.close()
})

describe(" game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true)
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("check for a move within the computers move array", () => {
        expect(game.currentGame.length).toBe(1)
    })
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ID's", () => {
        expect(game.choices).toEqual(["button1","button2","button3","button4"]);
    });
})

describe("new game test", () => {
    beforeAll(() => {
        game.score = 42
        game.playerMoves = ["button1", "button2"]
        game.currentGame = ["button1", "button2"]
        document.getElementById("score").innerText = "42"
        newGame()
        showScore()
        // This is the test data to pass in when the test is run

    })
    test("Score should be 0", () => {
        expect(game.score).toEqual(0)
    })
    test("Choices should be empty", () => {
        expect(game.currentGame.length).toEqual(0)
    })
    test("should be 0", () => {
        expect(game.playerMoves.length).toEqual(0)
    })
    test("Check text value of the score", () => {
        expect(document.getElementById("score").innerText).toEqual(0)
    })
})

describe("gameplay works correctly", () => {
    beforeEach (() => {
        game.score = 0
        game.currentGame = []
        game.playerMoves = []
        addTurn()
    })
    afterEach(() => {
        game.score = 0
        game.currentGame = []
        game.playerMoves = []
    })
    test("addTurn add a new turn to the game", () => {
        addTurn()
        expect(game.currentGame.length).toBe(2)
    })
    test("has the correct class been added to the element to light it up?", () => {
        let button = document.getElementById(game.currentGame[0])
        lightsActivated(game.currentGame[0])
        expect(button.classList).toContain("light")
    })
})