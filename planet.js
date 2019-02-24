class Planet {
  constructor(radius, distance, orbitSpeed) {
    this.radius = radius
    this.angle = random(TWO_PI)
    this.distance = distance
    this.orbitSpeed = orbitSpeed
    this.planets = []
  }

  show(color, moons) {
    push()
    fill(color)
    rotate(this.angle)
    translate(this.distance, 0)
    ellipse(0,0, this.radius)
    pop()
  }

  orbit() {
    this.angle += this.orbitSpeed
  }

}
