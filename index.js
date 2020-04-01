
let DAYS = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}
let MONTH = {}

function today(){
  let d = new Date()
  let day = d.getDay()
  let mon = d.getMonth()
  console.log(DAYS[day])
  console.log(mon)
}

today()