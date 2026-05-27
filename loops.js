let numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
let x = 5
while (x >= 1) {
    console.log(x);
    x--;
}

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }
}

let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}
console.log(" The sum of the numbers is: " + sum)
