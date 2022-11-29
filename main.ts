let pomoc = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        for (let i = 0; i <= 4; i++) {
            pomoc = 4 - i
            led.plot(pomoc, 2)
            control.waitMicros(100000)
        }
        for (let k = 0; k <= 4; k++) {
            led.unplot(k, 2)
        }
        control.waitMicros(100000)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        for (let i = 0; i <= 4; i++) {
            led.plot(i, 2)
            control.waitMicros(100000)
        }
        for (let k = 0; k <= 4; k++) {
            led.unplot(k, 2)
        }
        control.waitMicros(100000)
    }
})
basic.forever(function () {
	
})
