input.onButtonPressed(Button.A, function () {
    button_a += 1
    if (button_a % 2 == 1) {
    	
    } else if (button_a % 2 == 0) {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    button_ab += 1
    if (button_ab % 2 == 1) {
    	
    } else if (button_ab % 2 == 0) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    button_b += 1
    if (button_b % 2 == 1) {
    	
    } else if (button_b % 2 == 0) {
    	
    }
})
let button_b = 0
let button_ab = 0
let button_a = 0
button_a = 0
button_ab = 0
button_b = 0
loops.everyInterval(1, function () {
    basic.pause(360000)
    button_a += -20
    button_ab += -20
    button_b += -20
})
