class Gameboard {
  constructor() {
    this.board = this.createBoard()
  }
  createBoard() {
    for (let i = 0; i < 100; i++) {
      this.board.push({ ship: false, shot: false })
    }
  }
  receiveAttack(position) {
    this.board[position].shot = true
  }
  isShipHit(position) {
    return this.board[position].ship
  }
}
