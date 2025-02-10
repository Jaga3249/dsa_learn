class Solution {
  // Function to count all digits in n

  countDigit(n) {
    if (n === 0) return 1;
    let cnt = 0;
    while (n > 0) {
      n = Math.floor(n / 10);
      cnt++;
    }
    return cnt;
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
