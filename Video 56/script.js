console.log("Hello I am conditional tutorial");

let age = 0
let grace = 2

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

if ((age + grace) > 18) {
    console.log("You can drive")
}

else if (age == 0) {
    console.log("Are you kidding ?")
}

else {
    console.log("You cannot drive")
}
console.log()

/** Assignment Operator
 *      = :     x =  y
 *     += :     x = x + y
 *     -+ :     x = x - y
 *     *= :     x = x * y
 *     /= :     x = x / y
 *     %= :     x = x % y
 *    **= :     x = x ** y
 */

/** Comparison Operator
 *     == : Equal to
 *     != : Not Equal to
 *    === : Equal Value And Type
 *    !== : Not Equal Value Or Not Equal Type
 *      > : Greater Than
 *      < : Less Than
 *     >= : Greater Than Or Equal To
 *     <= : Less Than Or Equal To
 *      ? : Ternary Operator
 */

// Ternary Operator
let a = 6
let b = 8
let c = a > b ? (a - b) : (b - a)

/*
translates to :
if (a > b) {
    let c = a - b
}
else {
    let c = b - a
}
*/

console.log(c)




/** Logical Operator
 * && Logical And Operator
 * || Logical Or Operator
 *  ! Logical Not Operator
 */