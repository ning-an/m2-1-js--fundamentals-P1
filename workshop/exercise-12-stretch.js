// Q12 - PRIME NUMBER GENERATOR

// Write a program that generates a list of all prime numbers between 1 and 200.

// A prime number is a number that is ONLY divisible by 1 and itself.

// 6 -> NOT prime (2 * 3)
// 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
// 12 -> NOT prime (3 * 4, 2 * 6)
// 37 -> PRIME ()

// NOTE: 1 and 2 are both prime numbers.

// EXPECTED OUTPUT: [1, 2, 3, 5, 7, 11, 13, ...]

let myArray = [1, 2, 3];

for (let num=4; num<=200; num++) {
    let test = false;
    for (let i=1; i<myArray.length; i++) {
        if (num % myArray[i] === 0) {
            test = false;
            break;
        } else {
            test = true;
        }
    }
    
    if (test) {
        myArray.push(num);
    }
}

console.log(myArray);