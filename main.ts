input.onButtonPressed(Button.A, function () {
    while (Parlaklık > 0) {
        Parlaklık += -5
        led.setBrightness(Parlaklık)
        basic.pause(50)
    }
})
input.onButtonPressed(Button.B, function () {
    while (Parlaklık < 255) {
        Parlaklık += 5
        led.setBrightness(Parlaklık)
        basic.pause(50)
    }
})
let Parlaklık = 0
Parlaklık = 255
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
