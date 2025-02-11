class Solution {
  // Function to count all digits in n

  countDigit(n) {
    let cnt = 0;
    while (n > 0) {
      let ld = Math.floor(n % 10);
      if (ld % 2 != 0) {
        cnt++;
      }
      n = Math.floor(n / 10);
    }
    return cnt;
  }
}

// Input number
let n = 2222;

/* Creating an instance of
  Solution class */
let sol = new Solution();

// Function call to get count of digits in n
let ans = sol.countDigit(n);
console.log("The count of odd digits in the given number is: " + ans);
