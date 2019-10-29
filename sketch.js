let osc
let env
let env2
let filter
let rain
let windowS
let rainsound
let road
let car

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
	// bark = loadSound('bark.mp3')
}

function setup() {

	let canvas = createCanvas(480, 480)
	canvas.parent("p5")
	background(255, 228, 237)

	osc = new p5.Oscillator()
	osc.setType("square")
	// osc.start()
	osc.amp(0)

	noise = new p5.Noise()
	noise.setType("white") // "brown" "pink"
	noise.amp(0)
	

	env = new p5.Envelope()
	env.setADSR(.001, .05, .0, .0)

	env2 = new p5.Envelope()
	env2.setADSR(.01, .2, .05, .03)

	rain.position(340, 50)
	// road.position(340, 50)
	windowS.position(340, 50)


	// filter = new p5.LowPass()

}


function draw () {

	image(road, 30, 230)
	image(car, 6, 40)


}

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight)
// }

function mousePressed() {
	osc.start()
	osc.amp(env)
	env.triggerAttack()

	noise.start()
	noise.amp(env2)
	env2.triggerAttack()

	circle_radius = 100

	circle_x = mouseX
	circle_y = mouseY

	mouseDragged()
}

function mouseReleased() {
	// osc.stop()
	env.triggerRelease()

	// circle_radius = 0
}

function mouseDragged() {

	frequency = map(mouseY, 0, height, 2000, 20)
	osc.freq(frequency)

	// circle_x = mouseX
	// circle_y = mouseY

	// if (mouseX < width/2) {
	// 	osc.setType('sawtooth')
	// } else {
	// 	osc.setType('sine')
	// }


	let pan = map(mouseX, 0, width, -1, 1)
	osc.pan(pan)

}

function mouseClicked() {

	if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {
		print('button clicked')

		if(osc.getType() == 'square') {
			osc.setType('sine')
		} else {
			osc.setType('square')
		}
	}

}

function touchStarted() {
	mousePressed()
	mouseClicked()
}

function touchEnded() {
	mouseReleased()
}

function mouseClicked() {
		print(int(mouseX), int(mouseY))

	}
