let osc
let env
let env2
let filter

let frequency = 50
let circle_radius = 0
let circle_x = 0
let circle_y = 0
let noise

function setup() {

	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

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

	// filter = new p5.LowPass()

}


function draw () {
	noStroke()

	fill( map(frequency, 2000, 20, 100, 255) , 228, 237)
	rect(0, 0, width, height)

//things following mouse
	fill(255, 255, 0)
	stroke(0)
	line(0, 0, mouseX, mouseY)
    line(width, 0, mouseX, mouseY)
    line(0, height, mouseX, mouseY)
    line(width, height, mouseX, mouseY)
	ellipse(circle_x, circle_y, circle_radius, circle_radius)

	if (circle_radius > 0 && mouseIsPressed == false) {
		circle_radius -= 4
	}

	push()
	noStroke()
	if (osc.getType() == 'square') {
		fill(0, 255, 0)
	} else {
		fill(0, 0, 255)
	}

	rect(10, 10, 30, 30)
	pop()

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

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

	circle_x = mouseX
	circle_y = mouseY

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

