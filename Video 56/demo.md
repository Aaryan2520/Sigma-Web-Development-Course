# Hello I am conditional tutorial

```bash
let age = 0
let grace = 2

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)
```

## Conditional Statement

```bash
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
```

## Assignment Operator

`=` x = y,
`+=` x = x + y

`-=` x = x - y

`*=` x = x \* y

`/=` x = x / y

`%` x = x % y

`**` x = x \*\* y

## Comparison Operator

`==` Equal to

`!=` Not Equal to

`===` Equal Value And Type

`!==` Not Equal Value Or Not Equal Type

`>` Greater Than

`<` Less Than

`>=` Greater Than Or Equal To

`<=` Less Than Or Equal To

`?` Ternary Operator

## Ternary Operator

```bash
let a = 6
let b = 8
let c = a > b ? (a - b) : (b - a)
```

`let c = a > b ? (a - b) : (b - a)`
This Means

```bash
if (a > b) {
    let c = a - b
}
else {
    let c = b - a
}
```
