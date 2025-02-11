class Solution {
  // Function to count all digits in n

  reverseDigit(n) {
    let res = 0;
    while (n > 0) {
      let ld = n % 10;
      res = 10 * res + ld;
      n = Math.floor(n / 10);
    }
    return res;
  }
}

// Input number
let n = 1234;

/* Creating an instance of
  Solution class */
let sol = new Solution();

// Function call to get count of digits in n
let ans = sol.reverseDigit(n);
console.log("The count of digits in the given number is: " + ans);
