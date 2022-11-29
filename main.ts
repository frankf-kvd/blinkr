let pomoc = 0
input.onButtonPressed(Button.A, function () {
    for (let n = 0; n <= 4; n++) {
        for (let k = 0; k <= 4; k++) {
            led.unplot(n, k)
        }
    }
    for (let index = 0; index < 3; index++) {
        for (let i = 0; i <= 4; i++) {
            pomoc = 4 - i
            led.plot(pomoc, 2)
            basic.pause(100)
        }
        for (let k = 0; k <= 4; k++) {
            led.unplot(k, 2)
        }
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    for (let n = 0; n <= 4; n++) {
        for (let k = 0; k <= 4; k++) {
            led.unplot(n, k)
        }
    }
    for (let index = 0; index < 3; index++) {
        for (let m = 0; m <= 4; m++) {
            led.plot(m, 2)
            basic.pause(100)
        }
        for (let n = 0; n <= 4; n++) {
            led.unplot(n, 2)
        }
        basic.pause(100)
    }
})
