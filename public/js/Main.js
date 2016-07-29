var game = new Phaser.Game(800, 800, Phaser.auto, 'game-space', {
	preload: preload, create: create, update: update
});

function preload() {}

function create() {
	var circle = game.add.graphics(0, 0);
	circle.beginFill(0xFF0000, 1);
	for(var i = 0; i < 4; i++) {
		var circle_sprite = game.add.sprite(200, 200, circle)
	  var center = game.width/2;
	  console.log(center)
	  if (i == 0 ) {
		  circle.drawCircle(center - 100, center, 100)
	  } else if (i == 1) {
	  	circle.drawCircle(center, center + 100, 100)
	  } else if (i == 2) {
	  	circle.drawCircle(center + 100, center, 100)
	  } else {
	  	circle.drawCircle(center, center - 100, 100)
	  }
	  // trying to get the click to work!!!!!!
	  // circle.events.onInputDown.add(listener, circle);
		// circle.downPoint()
		// circle_sprite.input.event.downPoint(spit(), this)
	}
}

function spit() {
		console.log('it worked')
}
function moveCircle(pointer) {
	// circleX = circle.x
	// circleY = circle.y
	// this.x += 20;
	// if (circleX != game.width / 2 - 10 && )
}
function listener () {

    // counter++;
    // text.text = "You clicked " + counter + " times!";
    console.log(this)

}
// Add a function to find position along circle circumferances line

function update() {}
