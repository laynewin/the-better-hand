input.onButtonPressed(Button.A, function () {
    servos.P0.setRange(70, 110)
    servos.P0.run(44)
    basic.pause(1000)
    servos.P0.stop()
    basic.pause(1000)
    servos.P0.run(-77)
    basic.pause(1000)
    servos.P0.stop()
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
