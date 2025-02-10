class Solution {
  // Function to count all digits in n

  countDigit(n) {
    if (n === 0) return 1;
    let count = Math.floor(Math.log10(n) + 1);
    return count;
  }
}

// Input number
let n = 0;

/* Creating an instance of
  Solution class */
let sol = new Solution();

// Function call to get count of digits in n
let ans = sol.countDigit(n);
console.log("The count of digits in the given number is: " + ans);
