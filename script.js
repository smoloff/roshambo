const MoveTypes = {
    Scissors: "Scissors",
    Rock: "Rock",
    Paper: "Paper",
}

class Move {
    constructor() {
        let index = Math.floor(Math.random() * Object.keys(MoveTypes).length);
        this.type = Object.keys(MoveTypes)[index];
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.winsCount = 0;
        this.loseCount = 0;
    }

    isWinChamp() {
        return this.winsCount === 5; // true / false
    }

    win() {
        console.log(`${this.name} wins with count ${this.winsCount}`);
        this.winsCount++;
    }

    lose() {
        this.loseCount++;
    }

    getMove() {
        return new Move();
    }
}

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;

        this.isGameOver = false;
    }

    start() {
        while(!this.isGameOver) {
            // debugger;

            let player1Turn = this.player1.getMove();
            let player2Turn = this.player2.getMove();

            if(player1Turn.type === player2Turn.type) {
                continue;

            } else if (
                (player1Turn.type === MoveTypes.Scissors && player2Turn.type === MoveTypes.Paper) ||
                (player1Turn.type === MoveTypes.Paper && player2Turn.type === MoveTypes.Rock)
            ) {
                this.player1.win();
                this.player2.lose();
            } else {
                this.player1.lose();
                this.player2.win();
            }

            if(this.player1.isWinChamp() || this.player2.isWinChamp()) {
                this.isGameOver = true;
            }
        }

        this.gameOver();
    }

    // method to tell the players that they are win/lose
    gameOver() {
        console.log(`
            Game over
            
            Player1 score: ${this.player1.winsCount}
            Player2 score: ${this.player2.winsCount}
        `)
    }
}

let roshambo = new Game(new Player("Peter"), new Player("Ivan"))
roshambo.start();