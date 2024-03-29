class Obstacle {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.width = 120
        this.height = 120
        this.top = Math.round(Math.random() * (this.gameScreen.clientHeight - this.height - 100)) +100
        this.left = 1250
        this.right = - this.width
        this.directionY = 0
        this.directionX = 0
        this.speed = 5
        this.element = document.createElement('img')

        this.element.src = '../imagens/joker.png'
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.top}px`
        this.element.style.right = `${this.right}px`
        this.element.style.position = 'absolute'


        this.gameScreen.appendChild(this.element)
    }
    render() {
        this.move()
        this.element.style.top = `${this.top}px`
        this.element.style.right = `${this.right}px`
    }
    move() {
    this.right += 5

}
}
