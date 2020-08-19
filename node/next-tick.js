/**
 * nextTick callbacks, however, are always fired immediately after the current code is done executing and BEFORE going back to the event loop.
 * In the nextTick example, we end up executing all the nextTick callbacks before ever returning to the event loop.
 * Since setTimeout's callback will be called from the event loop, the text 'TIMEOUT FIRED' will not be output until we're done with every nextTick callback.
 * Thats one of the reason why you should never call nextTick recursively if you want to process IO operations.
 */
process.nextTick(function A() {
  process.nextTick(function B() {
    console.log(1)
    process.nextTick(function D() {
      console.log(2)
    })
    process.nextTick(function E() {
      console.log(3)
    })
  })
  process.nextTick(function C() {
    console.log(4)
    process.nextTick(function F() {
      console.log(5)
    })
    process.nextTick(function G() {
      console.log(6)
    })
  })
})

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED')
}, 0)
