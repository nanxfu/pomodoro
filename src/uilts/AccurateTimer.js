/**
 * 精准秒数倒计时
 * @param {int} second 倒计时秒数
 * @param {*} callback 倒计时完成后执行的回调,每隔秒执行一次
 * @returns 返回一个对象，start开始计时。stop销毁计时器
 */
export default function (second, callback) {
    let startTime //开始计时时间
    let endTime = startTime; //当次结束计时时间
    let duration = second;
    let timerID;
    let nextTime = 1000;
    let delta = 0;
    return {
        start() {
            let timedown = () => {

                duration--
                // console.log(duration, endTime - startTime)
                endTime = new Date().getTime()
                delta = endTime - startTime - (second - duration) * 1000
                console.log(duration, delta, new Date().getTime() - startTime - (second - duration) * 1000)
                nextTime = 1000 - delta
                if (nextTime < 0) {
                    nextTime = 0;
                }
                if (duration <= 0) {
                    callback(duration, delta, new Date().getTime() - startTime - second * 1000) //依次传入剩余时间,偏差时间,总偏差时间
                    console.log("总误差：",new Date().getTime() - startTime - second * 1000);
                    clearTimeout(timerID)
                    
                } else {
                    callback(duration, delta, new Date().getTime() - startTime - second * 1000) //依次传入剩余时间,偏差时间,总偏差时间
                    timerID = setTimeout(timedown, nextTime) //弥补上一次误差
                }

            }
            startTime = new Date().getTime()
            timerID = setTimeout(timedown, nextTime)
        },
        stop() {
            clearTimeout(timerID)
        },
        continue () {
            timerID = setTimeout(timedown, nextTime)
        }
    }
}