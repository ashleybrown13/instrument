let osc
let env
let env2
let filter
let rain
let windowS
let rainsound
let road
let car
let reverb

let frequency = 50
let circle_radius = 0
let circle_x = 0
let circle_y = 0
let noise

function preload() {
	rain = createImg("rain.gif")
	windowS = createImg('windowS.png')
	road = loadImage('road copy.png')
	car = loadImage('car2.png')
	cloud = loadImage('clouds.png')
	rainsound = loadSound('rainlong.mp3')
	tree = loadImage('tree.png')
	doe = loadImage('deer.png')
	fog = loadImage('fogS.png')
	birds = loadImage('birds.png')
	ground = loadImage('grassF.png')
	sky = loadImage('sky.jpg')
	rustle = loadSound('bushes.mp3')
	carSound = loadSound('driving-2.mp3')
	trunk = loadSound('woodtap.mp3')
	birdSound = loadSound('Geese.mp3')
	doeSound  = loadSound('FawnBleat.mp3')
	// grassSound 
	lightning = loadSound('thunder.mp3')
	glasstap = loadSound('windowtap.mp3')
	}

function setup() {

	let canvas = createCanvas(480, 480)
	canvas.parent("p5")
	background(255, 228, 237)

	rainsound.setVolume(0.2);

	// reverb = new p5.Reverb()
	// bark.disconnect()
	// reverb.process(bark, 3, 2)

	rain.position(340, 50)
	
	windowS.position(340, 50)

}


function draw () {
push()
	tint(255, 30)
	image(sky, 0, 0, 480, 400)
pop()
	image(ground, 20, 170, 768, 300)
	image(road, 30, 230)
	image(car, 6, 40)
	image(cloud, 0, -80, 480, 200)
	image(tree, 51, 110, 170, 210)
	image(doe, 151, 279, 30, 20)
	image(fog, 0, 350)
push()
	tint(255, 50)
	image(birds, 41, 30)
pop()

}


function mousePressed() {

}

function mouseReleased() {

}


// function keyTyped() {

// 	print('i typed the key ' + key)

// 	if (key == 'k') {

// 	}
// }


function mouseClicked() {

		rainsound.play()

	//TREE RUSTLE
	if (mouseX > 106 && mouseX < 171 && mouseY > 137 && mouseY < 244) {
		print('tree clicked')
		rustle.play()
	}

	if (mouseX > 285 && mouseX < 445 && mouseY > 265 && mouseY < 424) {
		print('car clicked')
		carSound.play()
	}

	if (mouseX > 131 && mouseX < 143 && mouseY > 243 && mouseY < 293) {
		print('trunk')
		trunk.play()
	}

	if (mouseX > 149 && mouseX < 183 && mouseY > 281 && mouseY < 298) {
		print('doe')
		doeSound.play()
	}

	if (mouseX > 118 && mouseX < 440 && mouseY > 64 && mouseY < 127) {
		print('geese')
		birdSound.play()
	}

	if (mouseX > 37 && mouseX < 444 && mouseY > 19 && mouseY < 63) {
		print('lightning')
		lightning.play()
	}

	if (mouseX > 35 && mouseX < 107 && mouseY > 66 && mouseY < 417) {
		print('window')
		glasstap.play()
	}

		print(int(mouseX), int(mouseY))
}

function touchStarted() {
	mousePressed()
	mouseClicked()
}

function touchEnded() {
	mouseReleased()
}

