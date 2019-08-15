function runSimpleClock() {
  
  var now = new Date()
  
  var hour = now.getHours() % 12
  var min  = now.getMinutes()
  var sec  = now.getSeconds()
  var ms   = now.getMilliseconds()
  
  var clock = document.querySelector("div.clock")
  var hourMain = clock.querySelector("div.hour")
  var minMain  = clock.querySelector("div.minute")
  var secMain  = clock.querySelector("div.second")
  
  var hourRotation = 30 * hour + (0.5 * min)
  var minRotation = 6 * min + (0.1 * sec)
  var secRotation = 6 * sec + 0.006 * ms
  
  hourMain.style.transform = "rotate(" + hourRotation + "deg)"
  minMain.style.transform = "rotate(" + minRotation + "deg)"
  secMain.style.transform = "rotate(" + secRotation + "deg)"
  
  requestAnimationFrame(runSimpleClock)
}

runSimpleClock()
