var game = new Phaser.Game(800, 800, Phaser.auto, 'game-space', {
	preload: preload, create: create, update: update
});

function preload() {}

function create() {
	for(var i = 0; i < 4; i++) {
	  var circle = game.add.graphics(0, 0);
	  circle.beginFill(0xFF0000, 1);
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

	}
}

function moveCircle(pointer) {
	circleX = circle.x
	circleY = circle.y
	this.x += 20;
	// if (circleX != game.width / 2 - 10 && )
}

// Add a function to find position along circle circumferances line

function update() {}
