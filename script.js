class Player {
    constructor(name) {
        this.name = name;
        this.wins = 0;
        this.lose = 0;
        this.pieces;
        this.obj = ["scisors", "rock", "paper"];

    }
    randomTurn() {
       let turn = Math.floor(Math.random() * 3);
       this.pieces = this.obj[turn];
       console.log(this.pieces);
       return turn;
    }
}

let game = {
 thisWinner: "",
 previousWinner: ""
}


let Peter = new Player("Peter");
let Ivan = new Player("Ivan");

let gameStart = () => {
     let chek1 = Peter.randomTurn();
     let chek2 = Ivan.randomTurn();
    if(Peter.pieces === Ivan.pieces){
        Peter.lose = 0;
        Ivan.lose = 0;
    } else if (Peter.pieces == "scisors" && Ivan.pieces == "paper" ||  Peter.pieces == "paper" && Ivan.pieces == "rock") {
        Peter.wins += 1;
        Ivan.lose += 1;
    } else if (Peter.pieces == "paper" && Ivan.pieces == "scisors" ||  Peter.pieces == "rock" && Ivan.pieces == "paper"){ // not working
        Peter.lose += 1;
        Ivan.win += 1;
    }
    console.log(`
    Peter: ${Peter.pieces}, wins ${Peter.wins}
    Ivan: ${Ivan.pieces},  wins ${Ivan.wins}
    `)


    // TODO:  compare two Player.obj
    // choose winner
    //


}
gameStart();