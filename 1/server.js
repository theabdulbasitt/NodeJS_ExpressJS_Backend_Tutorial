// How NodeJS differs from Vanilla JS
// 1) Node runs on server - not in browser
// 2) The console is the terminal window
console.log('Hello world')
// 3) global object instead of widow object
//console.log(global)
// 4) has common core modules
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS apis like fetch


const os = require('os')
const path = require('path')
const {add, mul, div, sub } = require('./func')

console.log(add(3,5))
console.log(mul(3,5))
console.log(div(3,5))
console.log(sub(3,5))


// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log()
// console.log(path.parse(__filename))




