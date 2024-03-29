window.addEventListener('load', () => {
    const startButton = document.getElementById('button-start');
    const restartButton = document.getElementById('restart-button');
    let game;

 function startGame() {
     console.log('Game started!')
     game= new Game();
     game.start()
 }

 startButton.addEventListener('click', function() {
    startGame()

restartButton.addEventListener('click', function() {
    window.location.reload()
})


})

document.addEventListener('keydown', event => {
    if (event.code === 'KeyW') {
        game.player.directionY = -game.player.speed
        
       
    }
    if (event.code === 'KeyS') {
        game.player.directionY = game.player.speed
       
        
    }
    if(event.code === 'KeyB') {
        game.shootPressed= true
        game.shoot()
    }

    

})
document.addEventListener('keyup', event => {
    if (event.code === 'KeyW') {
        game.player.directionY = 0
    }
    if (event.code === 'KeyS') {
        game.player.directionY = 0 
        
    }
    if(event.code === 'KeyB') {
        game.shootPressed = false;
    }
    
   

});
});