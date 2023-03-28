input.onButtonPressed(Button.A, function () {
    servos.P0.setRange(70, 110)
    servos.P0.run(29)
    basic.pause(1000)
    servos.P0.stop()
    basic.pause(1000)
    servos.P0.run(-60)
    basic.pause(1000)
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setRange(70, 110)
    servos.P1.run(26)
    basic.pause(1000)
    servos.P1.stop()
    basic.pause(5000)
    basic.pause(2000)
    servos.P1.run(-52)
    basic.pause(1000)
    servos.P1.stop()
})
basic.forever(function () {
    images.createBigImage(`
        . . . . # . . . . .
        . . . # . # . . . .
        . . # . . . # . . .
        . # . . . . . # . .
        # . . . . . . . # .
        `).scrollImage(1, 90)
})
