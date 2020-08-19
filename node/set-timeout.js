/**
 * setTimeout is simply like calling the function after delay has finished. Whenever a function is called it is not executed immediately,
 * but queued so that it is executed after all the executing and currently queued eventhandlers finish first.
 * setTimeout(,0) essentially means execute after all current functions in the present queue get executed. No guarantees can be made about how long it could take.
 */

setTimeout(function A() {
  setTimeout(function B() {
    console.log(1)
    setTimeout(function D() {
      console.log(2)
    })
    setTimeout(function E() {
      console.log(3)
    })
  })
  setTimeout(function C() {
    console.log(4)
    setTimeout(function F() {
      console.log(5)
    })
    setTimeout(function G() {
      console.log(6)
    })
  })
})

setTimeout(function timeout() {
  console.log('TIMEOUT FIRED')
}, 0)
