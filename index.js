
let DAYS = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'}
let MONTH = { 0: 'January', 
              1: 'February', 
              2: 'March', 
              3: 'April', 
              4: 'May', 
              5: 'June', 
              6: 'July', 
              7: 'August', 
              8: 'September', 
              9: 'October',
              10: 'November',
              11: 'December' }



function today(){
  let d = new Date()
  let day = d.getDay()
  let mon = d.getMonth()
  let year = d.getFullYear()
  let num = d.getDate()

  let tag = document.getElementById('date')
  tag.innerHTML = `Today is ${DAYS[day]},&nbsp  ${MONTH[mon]} ${num},&nbsp ${year} `
}

today()