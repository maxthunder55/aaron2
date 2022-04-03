input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
}
