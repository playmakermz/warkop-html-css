let length = 8

let x = 0
let y = 1

for (let i = 0; i <= length; i++ ){
    console.log(x)
    let sum = x + y
    x = y
    y = sum
}
