let timeElement = document.createElement("h3")
let dateElement = document.createElement("p")

function checktime(d, h, m, s) {
  if (h < 10) {
    h = "0" + h
  }
  if (m < 10) {
    m = "0" + m
  }
  if (s < 10) {
    s = "0" + s
  }
  if (h < 12)
    sf = "AM"
  else
    sf = "PM"

  timeElement.innerHTML = h + ":" + m + ":" + s + " " + sf
  let timediv = document.getElementById("time")
  timediv.append(timeElement)

  dateElement.innerHTML = d.toDateString()
  timediv.append(dateElement)
}

setInterval(() => {
  let d = new Date()
  let h = d.getHours()
  let m = d.getMinutes()
  let s = d.getSeconds()
  checktime(d, h, m, s)
}, 1000)