let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valIntNumber = Number(score)
console.log(valIntNumber)
console.log(typeof valIntNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 ; false = 0

let someNum = 2
let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof stringNum);

// Operations

let value = 4
let negValue = -value
console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "Hello"
let str2 = "Sehaj"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")

console.log("1" + 2 + 3)
console.log(1 + "2" + 3)
console.log(1 + 2 + "3")

console.log("1" + "2" + 3)
console.log(1 + "2" + "3")
console.log("1" + 2 + "3")

console.log("1" + "2" + "3")

console.log((3 + 4) * 5 % 3);

console.log(+true)
console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1);
console.log(num2);
console.log(num3);


let gameCount = 100
++gameCount
console.log(gameCount)