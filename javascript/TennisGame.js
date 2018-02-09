// you can modify this, but keep the arguments
var TennisGame = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.pointNames = ["Love", "Fifteen", "Thirty", "Forty"];
    
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

// you should modify the internals of this function
TennisGame.prototype.getScore = function() {

    if (this.isWinSituation()) {
        return "Win for " + this.nameOfBetterPlayer();
    } else if (this.isLongGameSituation()) {
        return this.scoreOfLongGameSituation();
    }

    return this.point1Name() + "-" + this.point2Name();
};


TennisGame.prototype.isWinSituation = function() {
    return this.highestPoint() >= 4 && this.pointDiff() >= 2;
}

TennisGame.prototype.isLongGameSituation = function() {
    return this.lowestPoint() >= 3 && this.pointDiff() < 2;
}

TennisGame.prototype.scoreOfLongGameSituation = function() {
    if (this.pointDiff() == 0) {
        score = "Deuce";
    } else {
        score = "Advantage " + this.nameOfBetterPlayer();
    }
    return score;
}

TennisGame.prototype.highestPoint = function() {
    return Math.max(this.P1point, this.P2point);
}

TennisGame.prototype.lowestPoint = function() {
    return Math.min(this.P1point, this.P2point);
}

TennisGame.prototype.pointDiff = function() {
    return Math.abs(this.P1point - this.P2point);
}

TennisGame.prototype.point1Name = function() {
    return this.pointNames[this.P1point];
}

TennisGame.prototype.point2Name = function() {
    if (this.pointDiff() == 0) {
        return "All";
    }
    return this.pointNames[this.P2point];
}

TennisGame.prototype.nameOfBetterPlayer = function() {
    return this.P1point > this.P2point ? this.player1Name : this.player2Name;
}

TennisGame.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame.prototype.P2Score = function() {
    this.P2point++;
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


if (typeof window === "undefined") {
    module.exports = TennisGame;
}
