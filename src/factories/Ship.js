class Ship {
  constructor(shipType, location) {
    this.shipType = shipType
    this.location = location
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
