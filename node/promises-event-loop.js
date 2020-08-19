console.log('start')
setTimeout(function () {
  console.log('timeout finished')
}, 0)
Promise.resolve()
  .then(function () {
    console.log('promise 1')
  })
  .then(function () {
    console.log('promise 2')
  })
console.log('end')
// start
