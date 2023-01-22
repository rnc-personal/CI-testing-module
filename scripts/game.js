let game = {
    currentGame : [],
    score: 0,
    playerMoves: [],
    choices: ["button1","button2","button3","button4"],
}

function newGame() {
    game.score = 0
    game.currentGame = []
    game.playerMoves = []
    // set score to 0 and empty the moves arrays
    showScore()
    addTurn()
}

function addTurn() {
    game.playerMoves = []
    game.currentGame.push(game.choices[(Math.floor(Math.random() * game.choices.length))])
    
    // showTurns()
}

function showScore() {
    document.getElementById("score").innerText = game.score
}
    
function lightsActivated(circ) {
    document.getElementById(circ).classList.add("light")
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light")
    }, 400)
}

module.exports = { game, newGame, showScore, addTurn, lightsActivated}
// Use curly braces where more than one export is needed