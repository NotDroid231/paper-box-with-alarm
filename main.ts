input.onButtonPressed(Button.A, function () {
    button_a += 1
    if (button_a % 2 == 1) {
        let inifinty = 0
        for (let index = 0; index < inifinty; index++) {
        	
        }
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
radio.setGroup(69420)
button_a = 0
loops.everyInterval(60000, function () {
    button_a += -10
})
