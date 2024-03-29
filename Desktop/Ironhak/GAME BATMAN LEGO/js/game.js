class Game {
     constructor() {
        this.gameIntro = document.getElementById('game-intro')
        this.gameScreen = document.getElementById("game-screen")
        this.gameOverScreen = document.getElementById('game-end')
        this.width = 1000
        this.height = 500
        this.player 
        this.obstacles = []
        this.intervalId 
        this.currentFrame = 0
        this.lives = 2
        this.gameOver= false
        this.projectiles = []
        this.score = 0
        this.targetScore = 100
        this.shootPressed = false
        
        
         
    }

    start() { 
        this.gameIntro.style.display = 'none'
        this.gameScreen.style.display = 'block'
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`

        this.player = new Player(this.gameScreen)
        this.obstacles.push(new Obstacle(this.gameScreen))
        this.animate()
        

    }
    animate() {
        this.intervalId = setInterval(() => {
            this.currentFrame += 1
            
            if(this.currentFrame % 150 === 0) { this.obstacles.push(new Obstacle(this.gameScreen)) }

         this.player.render()


         const nextObstacles = []
         this.obstacles.forEach(currentObstacle => {
             currentObstacle.render()
             if (this.player.didCollide(currentObstacle)) {
                this.lives -= 1
                currentObstacle.element.remove() 
                if (this.lives < 0) {
                    this.gameOver = true
                }
             } else if (currentObstacle.top < this.gameScreen.clientHeight) {
                 nextObstacles.push(currentObstacle)
                }else{
                    this.score += 10
                    currentObstacle.element.remove()
                }
            })
        this.obstacles = nextObstacles

    

        this.projectiles = this.projectiles.filter(projectile => {
            projectile.render();
            const collidedObstacle = this.obstacles.find(obstacle => projectile.didCollide(obstacle));
            if (collidedObstacle ) {
                collidedObstacle.element.remove();
                projectile.element.remove()
                this.score += 10;
                return false; 
            }
            return projectile.left < this.gameScreen.clientWidth

        })
        


        document.getElementById('score').innerText = this.score
        document.getElementById('lives').innerText = this.lives

        if (this.score >= this.targetScore) {
            this.win();
        }
        if (this.gameOver){
            this.player.element.remove()
            this.obstacles.forEach(currentObstacle => {
                currentObstacle.element.remove()
            })
            this.gameScreen.style.display = 'none'
            this.gameOverScreen.style.display = 'block'
            clearInterval(this.intervalId)
        }
        


         }, 1000 / 60)
        
    }
    shoot() {
        if(this.shootPressed) {
            this.shootPressed = false
            const projectile = new Projectile(this.gameScreen, this.player.top)
            this.projectiles.push(projectile)
        }
    }
    win() {
     
        alert("Congratulations! YOU IN !");
        clearInterval(this.intervalId);
     this.restart(); 
}
// restart the game when the player wins
restart() {
   
    if (this.player && this.player.element) {
        this.player.element.remove();
    }
    this.lives = 2;
    this.gameOver = false;
    this.score = 0;
    this.objectsHit = 0;
    this.gameOverScreen.style.display = 'none';
    this.start();
}


        
}
