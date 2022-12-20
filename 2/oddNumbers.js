
// 2. Write a function that takes a minimum number and a maximum number, and using a for loop, 
// log out all odd numbers between the min and the max, NOT including the min or max themselves.


function logOddNumbers(min, max) {
    for (i = min + 1; i < max; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

logOddNumbers(5, 13);