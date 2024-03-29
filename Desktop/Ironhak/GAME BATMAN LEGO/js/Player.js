class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 200
        this.height = 200
        this.score = 1
        this.top = 400 
        this.left = 50
        this.directionY = 0
        this.speed = 10
        this.element = document.createElement('img')
        

        this.element.src = '../imagens/Batman.png'
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
    if (this.top >= 0 && this.top <= this.gameScreen.clientHeight - this.height) {
   this.top += this.directionY
    }
    if (this.top <= 0) {
        this.top = 0
    }
    if (this.top >= this.gameScreen.clientHeight - this.height) {
        this.top = this.gameScreen.clientHeight - this.height
    }
}


 
didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    return (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) 
  
  }
}
