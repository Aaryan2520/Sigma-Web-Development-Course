console.log("I am a tutorial on loops")

let a = 1
for (let i = 0; i < 10; i++) {
    console.log(i + a)
}

console.log()

let obj = {
    Name: "Harry",
    Role: "Programmer",
    Company: "CodeWithHarry"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

console.log()

for (const key in obj) {
    console.log(key)
}

console.log()

for (const ch of "object") {
    console.log(ch)
}

console.log()

let m = 0
while (m < 10) {
    console.log(m)
    m++
}

console.log()

let n = 100;
do {
    console.log(n)
    n++
} while (n < 10);


// -----------------------------------------------------------------------------------------------------------
console.log("Fresh Start")
a = 1;
for (let i = 1; i < 10; i++) {
    console.log(a+i)
}

let Avg = {
    Name: "Stark",
    Role: "CEO",
    Company: "Stark's Industry"
}

for (const key in Avg) {
        const element = Avg[key];
        
        console.log()
        console.log(key)

        console.log()
        console.log(element)
        
        console.log()
        console.log(key+":",element)
    }




    for (const Ch of "The quick brown fox jumps over the lazy dog") {
        console.log(Ch)
    }

console.log()
    for (const Aph of "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
        console.log(Aph)
    }
console.log()

let i=1
while (i<6) {
    console.log(i)
    i++
}

console.log()
j=10;
do {
    console.log(j)
    j++
} while (j<6);