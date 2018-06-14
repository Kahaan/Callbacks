// class Clock {
//   constructor() {
//     let currentDate = new Date()
//     this.hours = currentDate.getHours()
//     this.minutes = currentDate.getMinutes()
//     this.seconds = currentDate.getSeconds()
//     // 2. Store the hours, minutes, and seconds.
//     // 3. Call printTime.
//     // 4. Schedule the tick at 1 second intervals.
//   }
//
//   printTime() {
//     // Format the time in HH:MM:SS
//     // Use console.log to print it.
//   }
//
//   _tick() {
//     // 1. Increment the time by one second.
//     // 2. Call printTime.
//   }
// }
//
// const clock = new Clock()

const readline = require('readline')
reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    return completionCallback(sum)
  } else {
    console.log(`this is sum before adding: ${sum}`)
    reader.question("what number?", function xyz(ans) {sum += ans})
    addNumbers(sum, numsLeft - 1, completionCallback)
  }

  // if (numsLeft > 0) {
  //   reader.question("what number?", function xyz(ans) {sum += ans})
  //   console.log(`${sum}`)
  //   numsLeft -= 1
  // } else {
  //   completionCallback(sum)
  // }

}


addNumbers(0,3, sum => console.log(`Total Sum: ${sum}`))
