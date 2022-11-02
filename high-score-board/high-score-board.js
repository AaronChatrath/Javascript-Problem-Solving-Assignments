//https://exercism.org/tracks/javascript/exercises/high-score-board

/*
High Score Board
1. Create a new high score board
2. Add players to a score board
3. Remove players from a score board
4. Increase a player's score
5. Apply Monday bonus points
6. Normalize a high score
*/

//1. Create a new high score board
function createScoreBoard() {
    let scoreBoard = {
        'The Best Ever': 1000000
    };
    return scoreBoard;
}

console.log(createScoreBoard());


//2. Add players to a score board
function addPlayer(scoreboard, newEntryName, score) {
    scoreboard[newEntryName] = score;
    return scoreboard;
}

console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373));


//3. Remove players from a score board
function removePlayers(existingScoreboard, player){
    delete existingScoreboard[player];
    return existingScoreboard;
}

//4. Increase a player's score
function updateScore(existingScoreBoard, player, points) {
    existingScoreBoard[player] += points;
    return existingScoreBoard;
}

//5. Apply Monday bonus points
function applyMondayBonus(scoreBoard) {
    for (let player of scoreBoard){
        updateScore(scoreBoard,player,100);
    }
    return scoreBoard
}

function normalise(score) {
    return 2 * score + 10;
}

//6. Normalize a high score (using the above normalise function)
function normaliseScore(params){
        newScore = params.normaliseFunction(params.score);
        return newScore;
}

const paramss = { score: 400, normaliseFunction: normalise };
console.log(normaliseScore(paramss));