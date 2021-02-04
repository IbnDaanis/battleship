class Ship {
  constructor(shipType, position) {
    this.shipType = shipType
    this.position = position
    this.hits = []
  }
  hit(positionHit) {
    this.hits.push(positionHit)
  }
  isSunk() {
    this.position.every(part => this.hits.includes(part))
  }
}

export default Ship
