function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("Harry")

function sum(a, b) {
    // console.log(a + b)
    return a + b
}
sum(1, 2)

result = sum(12, 88)
console.log("The sum of there numbers is : ", result)



function sumopt(a, b, c = 5) {
    // console.log(a + b + c)
    return a + b + c
}
result1=sumopt(3,2)
result2=sumopt(7,5)
result3=sumopt(3,13,17)

console.log("The sum of there numbers is : ", result1)
console.log("The sum of there numbers is : ", result2)
console.log("The sum of there numbers is : ", result3)



const func1=(x)=>{
    console.log("I am an arrow function",x)
}

func1(34)
func1(66)
func1(84)