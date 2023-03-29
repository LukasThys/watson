input.onButtonPressed(Button.A, function () {
    if (bootX > 0) {
        led.unplot(bootX, bootY)
        bootX += -1
        led.plot(bootX, bootY)
    }
})
input.onButtonPressed(Button.B, function () {
    if (bootX < 4) {
        led.unplot(bootX, bootY)
        bootX += 1
        led.plot(bootX, bootY)
    }
})
let manX = 0
let manY = 0
let bootX = 0
let bootY = 0
let score = 0
let game2 = 1
bootY = 4
bootX = 3
led.plot(bootX, bootY)
basic.forever(function () {
    while (game2 == 1) {
        manY = 0
        manX = randint(0, 4)
        while (manY < 4) {
            led.plot(manX, manY)
            basic.pause(500)
            led.unplot(manX, manY)
            manY += 1
        }
        if (!(bootX == manX)) {
            game.setScore(score)
            game.gameOver()
            game2 = 0
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            control.reset()
        } else {
            score += 1
        }
    }
})
