let osc
let frequency = 50

function setup() {

	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

	osc = new p5.Oscillator()
	osc.setType("square + sawtooth")
	osc.amp(1)

}


function draw () {
	noStroke()

	fill( map(frequency, 2000, 20, 0, 255) , 0, 0)
	rect(0, 0, width, height)

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
	osc.start()

	mouseDragged()
}

function mouseReleased() {
	osc.stop()

}

function mouseDragged() {

	frequency = map(mouseY, 0, height, 2000, 20)
	osc.freq(frequency)

	if (mouseX < width/2) {
		osc.setType('sine')
	} else {
		osc.setType('square')
	}


	let pan = map(mouseX, 0, width, -1, 1)
	osc.pan(pan)

}

