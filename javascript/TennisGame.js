// you can modify this, but keep the arguments
var TennisGame = function(player1Name, player2Name) {
    this.points = [0, 0];
    
    this.players = [player1Name, player2Name];
};

// you should modify but not rename this function
TennisGame.prototype.getScore = function () {

    if (this.isDraw() && this.points[0] >= 3) {

        return "Deuce";

    } else if (this.isEndGameSituation()) {

        return this.advantagePrefix() + " " + this.nameOfBetterPlayer();

    }

    return this.pointName(0) + "-" + this.pointName(1);
};


TennisGame.prototype.isDraw = function () {
    return this.points[0] === this.points[1];
};

TennisGame.prototype.isEndGameSituation = function () {
    return (this.points[0] >= 4 || this.points[1] >= 4);
}

TennisGame.prototype.pointName = function (player_id) {
    if (this.isDraw() && player_id == 1) {
        return "All";
    }
    return ['Love', 'Fifteen', 'Thirty', 'Forty'][this.points[player_id]];
}

TennisGame.prototype.advantagePrefix = function () {
    if ((this.points[0] - this.points[1]) === 1 || (this.points[1] - this.points[0]) === 1) {
        return "Advantage";
    }
    return "Win for"
}

TennisGame.prototype.nameOfBetterPlayer = function () {
    if (this.points[0] > this.points[1]) {
        return this.players[0];
    }
    return this.players[1];
}


TennisGame.prototype.P1Score = function() {
    this.points[0]++;
};

TennisGame.prototype.P2Score = function() {
    this.points[1]++;
};


/////////////////////////////////////////////////////
////// do not modify functions below this line //////
/////////////////////////////////////////////////////


TennisGame.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};


TennisGame.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

// do not modify this function
if (typeof window === "undefined") {
    module.exports = TennisGame;
}
