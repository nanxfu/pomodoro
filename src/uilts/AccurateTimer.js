/**
 * 精准秒数倒计时
 * @param {int} second 倒计时秒数，若 direction 参数为 'forward' 则此参数忽略
 * @param {*} callback 每秒执行一次
 * @param {string} direction 正向计时还是倒计时,默认倒计时.取值为'forward' 'backward'
 * @returns 返回一个对象，start开始计时。stop销毁计时器
 */
export default function (direction = 'backward', callback, second) {
    let startTime //开始计时时间
    let duration;
    let timerID;
    let start;
    let nextTime = 1000;
    let method = {
        stop() {
            clearTimeout(timerID)
        },
        continue () {
            timerID = setTimeout(Timing, nextTime)
        },
        start
    }
    let direction_ = direction == 'backward'
    method.start = () => {
        let Timing = () => {
            direction_ ? duration-- : duration++
            nextTime = fixTimeDeltaPeerSecond(startTime, direction_ ? second - duration : duration)
            console.log("nextTime", nextTime)
            if (duration <= 0) {
                console.log("总误差：", new Date().getTime() - startTime - second * 1000);
                clearTimeout(timerID)

            } else {
                callback(duration) //剩余时间 或 已经过时间
                timerID = setTimeout(Timing, nextTime) //弥补上一次误差
            }
            callback(duration) //剩余时间 或 已经过时间
        }
        duration = direction_ ? second : 0
        startTime = new Date().getTime()
        timerID = setTimeout(Timing, nextTime)
    }
    return method

}
/**
 * @param {Date} starttime 输入开始时间
 * @param {int} duration 已经过的秒数
 * @returns {int} 输出下一次执行的时间
 */
function fixTimeDeltaPeerSecond(starttime, elapsed) {
    let preTime = new Date().getTime()
    let Difference = preTime - starttime - elapsed * 1000
    console.log("Difference", Difference, 'preTime - starttime', preTime - starttime, 'elapsed*1000', elapsed * 1000)

    if(Difference > 0){
        return 1000 - Difference < 0 ? 0 : 1000 - Difference
    }
    return 1000
}