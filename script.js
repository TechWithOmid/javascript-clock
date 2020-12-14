// Variables
// get clock element
const clock = document.querySelector('#clock')


// Functions
// call the ShowTime every 1 second
setInterval(showTime, 1000)

function showTime() {
    const d = new Date() // create instance of Date object
    
    // getting hour, minute, second
    let hour = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()
    
    if (hour>12) {
        hour -= 12
        am_pm = 'PM'
    }else {
        am_pm = 'AM'   
    }
    
    // we will put time with HH:MM:SS in here
    hour = hour < 10 ? "0" + hour : hour; 
    min = min < 10 ? "0" + min : min; 
    sec = sec < 10 ? "0" + sec : sec; 

    corentTime = `${hour}:${min}:${sec}${am_pm}`
    clock.innerHTML = corentTime
}
