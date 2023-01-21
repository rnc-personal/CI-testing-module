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
}

function showScore() {
    document.getElementById("score").innerText = game.score
}
    


module.exports = { game, newGame, showScore }
// Use curly braces where more than one export is needed