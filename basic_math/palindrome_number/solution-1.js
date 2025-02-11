class Solution {
  // Function to count all digits in n

  reverseDigit(n) {
    let res = 0;
    let temp = n;
    while (temp > 0) {
      let ld = temp % 10;
      res = 10 * res + ld;
      temp = Math.floor(temp / 10);
    }
    return res === n;
  }
}

// Input number
let n = 434;

/* Creating an instance of
    Solution class */
let sol = new Solution();

// Function call to get count of digits in n
let ans = sol.reverseDigit(n);
console.log("The given number is: " + ans);
