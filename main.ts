basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        while (input.buttonIsPressed(Button.A)) {
            servos.P0.setRange(70, 110)
            servos.P0.run(-42)
        }
        while (input.buttonIsPressed(Button.B)) {
            servos.P0.run(5)
        }
        servos.P0.stop()
    } else if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        while (input.buttonIsPressed(Button.A)) {
            servos.P1.setRange(70, 110)
            servos.P1.run(-100)
        }
        while (input.buttonIsPressed(Button.B)) {
            servos.P1.run(6)
        }
        servos.P1.stop()
    }
})
