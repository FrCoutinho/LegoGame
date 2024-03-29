class Projectile {
    constructor(gameScreen, playerY) {
        this.gameScreen = gameScreen;
        this.width = 50
        this.height = 40
        this.score = 1
        this.top = playerY
        this.left = 50
        this.directionY = 0
        this.directionX = 10
        this.speed = 10
        this.element = document.createElement('img')
        

        this.element.src = '../imagens/projectil.png'
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
        this.element.style.position = 'absolute'


        this.gameScreen.appendChild(this.element)
    }
    render() {
        this.move()
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
    }
    
    move() {
    this.left += 5

}
didCollide(obstacle) {
    const projectileRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    return (
      projectileRect.left < obstacleRect.right &&
      projectileRect.right > obstacleRect.left &&
      projectileRect.top < obstacleRect.bottom &&
      projectileRect.bottom > obstacleRect.top
    ) 
  
  }

}
