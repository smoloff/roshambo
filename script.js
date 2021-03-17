class Player {
    constructor(name) {
        this.name = name;
        this.wins;
        this.lose;
        this.pieces = [];
        this.obj = ["scisors", "rock", "paper"];

    }
    randomTurn() {
       let turn = Math.floor(Math.random() * 3);
       this.pieces.push(this.obj[turn]);
       return turn;
        console.log(this.obj);
    }
}

let game = {
 thisWinner: "",
 previousWinner: ""
}


let Peter = new Player("Peter");
let Ivan = new Player("Ivan");

let gameStart = () => {
    // let chek1 = player1.randomTurn();
    // let chek2 = player2.randomTurn();
    // console.log(player1.pieces)
    // TODO:  compare two Player.obj
    // choose winner
    //


}
gameStart();