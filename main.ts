namespace TimeEvents {
    //% block="set up clock with|total seconds $total_seconds|chunk size $chunk_size"
    //% total_seconds.min=1 total_seconds.max=600 total_seconds.defl=60
    //% chunk_size.min=1 chunk_size.max=60 chunk_size.defl=6
    export function setUpClock(total_seconds: number, chunk_size: number) {
        started = false
        seconds = 0
        millis_limit = total_seconds * 1000
        time_chunk_size = chunk_size * 1000
        next_millis_target = time_chunk_size
        time_units_left = 10
    }
    //% block
    export function startClock() {
        started = true
        start_millis = control.millis()
    }

    //% block="on chunk elapsed"
    export function onChunkElapsed(handler: () => void) {
        control.onEvent(700, 1, handler)
    }

    //% block="on time elapsed"
    export function onTimeElapsed(handler: () => void) {
        control.onEvent(700, 2, handler)
    }


    let clock_done = false
    let clock_run_time = 0
    let time_units_left = 0
    let next_millis_target = 0
    let time_chunk_size = 0
    let millis_limit = 0
    let seconds = 0
    let start_millis = 0
    let started = false
    basic.forever(function () {
        if (started) {
            clock_run_time = control.millis() - start_millis
            if (clock_run_time >= next_millis_target) {
                next_millis_target += time_chunk_size
                control.raiseEvent(
                    700,
                    1
                )
            } else if (clock_run_time >= millis_limit) {
                started = false
                clock_done = true
                control.raiseEvent(
                    700,
                    2
                )
            }
        }
    })

}
