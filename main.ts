input.onButtonPressed(Button.A, function () {
    basic.showString("" + (c))
    c += 1
})
input.onButtonPressed(Button.AB, function () {
    while (c >= 1) {
        basic.showString("" + (c))
        c += -1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (c))
    c += 10
})
let c = 0
c = 0
