let game_time = 0
let time_단위 = 0
let white_time = 0
let black_time = 0
let last_pressed_button = 0
basic.clearScreen()
let game_start = 0
pins.analogWritePin(AnalogPin.P1, 1023)
loops.everyInterval(1000, function () {
    if (game_start == 1) {
        // 1 -> 현재 흑 차례
        // 2 -> 현재 백 차례
        if (last_pressed_button == 1) {
            black_time += -1
        } else if (last_pressed_button == 2) {
            white_time += -1
        }
        if (white_time != 0 && white_time <= time_단위 * 1) {
            led.unplot(0, 1)
        } else if (white_time <= time_단위 * 2) {
            led.unplot(0, 2)
        } else if (white_time <= time_단위 * 3) {
            led.unplot(0, 3)
        } else if (white_time <= time_단위 * 4) {
            led.unplot(0, 4)
        } else if (white_time <= time_단위 * 5) {
            led.unplot(1, 0)
        } else if (white_time <= time_단위 * 6) {
            led.unplot(1, 1)
        } else if (white_time <= time_단위 * 7) {
            led.unplot(1, 2)
        } else if (white_time <= time_단위 * 8) {
            led.unplot(1, 3)
        } else if (white_time <= time_단위 * 9) {
            led.unplot(1, 4)
        }
        if (black_time <= time_단위 * 1) {
            led.unplot(4, 1)
        } else if (black_time <= time_단위 * 2) {
            led.unplot(4, 2)
        } else if (black_time <= time_단위 * 3) {
            led.unplot(4, 3)
        } else if (black_time <= time_단위 * 4) {
            led.unplot(4, 4)
        } else if (black_time <= time_단위 * 5) {
            led.unplot(3, 0)
        } else if (black_time <= time_단위 * 6) {
            led.unplot(3, 1)
        } else if (black_time <= time_단위 * 7) {
            led.unplot(3, 2)
        } else if (black_time <= time_단위 * 8) {
            led.unplot(3, 3)
        } else if (black_time <= time_단위 * 9) {
            led.unplot(3, 4)
        }
        if (white_time == 0) {
            basic.showArrow(ArrowNames.East)
        } else if (black_time == 0) {
            basic.showArrow(ArrowNames.West)
        }
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) < 10) {
        // 백에서 흑으로 차례가 넘어감
        last_pressed_button = 1
        led.unplot(2, 0)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(2, 4)
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 80) {
        // 흑에서 백으로 차례가 넘어감
        last_pressed_button = 2
        led.unplot(2, 4)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(2, 0)
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 120) {
        if (game_start == 0) {
            basic.showLeds(`
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                `)
            game_time = 60
            time_단위 = 6
            white_time = game_time
            black_time = game_time
            game_start = 1
        }
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 160) {
        if (game_start == 0) {
            basic.showLeds(`
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                `)
            game_time = 300
            time_단위 = 30
            white_time = game_time
            black_time = game_time
            game_start = 1
        }
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) < 600) {
        if (game_start == 0) {
            basic.showLeds(`
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                # # . # #
                `)
            game_time = 600
            time_단위 = 60
            white_time = game_time
            black_time = game_time
            game_start = 1
        }
    } else if (pins.analogReadPin(AnalogReadWritePin.P1) == 1023) {
    	
    }
})
