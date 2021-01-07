class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('GAMESTATE');
    gameStateRef.on("value",function(data){
      gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      GAMESTATE: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('player_count').once('value')

      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val()
       console.log(playerCount)
        player.getCount()
      }
      form = new Form()

      form.display();


    }


    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700, 200)
    car1 = createSprite(100,200)
    car1.addImage(carImg)
    car2.addImage(carImg1)
    car3.addImage(carImg2)
    car4.addImage(carImg3)

    cars = [car1,car2,car3,car4]

    

    
  }

  play() {


    form.hide();

    text("Game started", 120, 100)
    
    Player.getPlayerInfo()

    if (allPlayers !== undefined) {
      background('#c68767')
      image(trackImg ,  0 , - displayHeight * 4 , displayWidth , displayHeight * 5)
      var index = 0;
      var x = 175;
      var y;
      for (var p in allPlayers) {
        index = index + 1;
        x = x + 200
        y = displayHeight - allPlayers[p].distance
        cars[index - 1].x = x;
        cars[index - 1].y = y
        if (index === player.index) {
          cars[index - 1].shapeColor = 'red'
          camera.position.x =  displayWidth / 2
          camera.position.y =  cars[index - 1].y

        }
        

      //console.log('red')
      
      }
    }
    if (keyIsDown(UP_ARROW) && player.index !== null) {
      player.distance = player.distance + 10
      player.update()
    }
    if(player.distance >= 1600){
      gameState = 2


    }
    drawSprites();
  }

  end() {
    console.log("Ended")
  }

  
}
