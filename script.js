
// 1. Sum of first n numbers

let n = 5;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum + i;
}
console.log("Sum:", sum);


// 2. Multiplication Table

for (let i = 1; i <= n; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}


// Given Number

let num = 153;


// 3. Check Prime Number

let count = 0;

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        count++;
    }
}

if (count == 2) {
    console.log("Prime Number: Yes");
} else {
    console.log("Prime Number: No");
}


// 4. Print Factors

console.log("Factors:");

for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}


// 5. Sum of Digits

let digit = num;
let total = 0;

while (digit > 0) {
    let rem = digit % 10;
    total = total + rem;
    digit = Math.floor(digit / 10);
}

console.log("Sum of digits:", total);


// 6. Armstrong Number

let temp = num;
let result = 0;

while (temp > 0) {
    let rem = temp % 10;
    result = result + rem * rem * rem;
    temp = Math.floor(temp / 10);
}

if (result == num) {
    console.log("Armstrong Number: Yes");
} else {
    console.log("Armstrong Number: No");
}
