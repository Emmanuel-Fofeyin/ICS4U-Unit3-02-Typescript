/*
* This program calculates the factorial of a number.
*
* @author  Emmanuel FN
* @version 1.0
* @since   2024-05-11
*/

import { createPrompt } from 'bun-promptx'

function factorial(someInt: number): number {
  /*
  * This function calculates the factorial using recursion.
  */
  if (someInt < 0) {
    return -1
  } else {
    if (someInt <= 1) {
      return 1
    } else {
      return (someInt * factorial(someInt - 1))
    }
  }
}

const userInput = createPrompt(`Entered = `)
const someInt = parseInt(userInput.value)
let factorialOfInt = factorial(someInt)
console.log(`Returned = ${factorialOfInt}`)

console.log(`\nDone.`)
