input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.clearScreen()
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        # . . . #
        . . . . .
        . # # # .
        . . . . .
        `)
})
