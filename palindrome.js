const isPalindrome = function(x) {
    // Convert the number to a string
    const str = x.toString();

    // Initializing
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        // If the characters at the left and right pointers are not the same, return false
        if (str[left] !== str[right]) {
            return false;
        }
        // Move the left pointer to the right and the right pointer to the left
        left++;
        right--;
    }
    // If the loop completes without returning false, the string is a palindrome, so return true
    return true;
};


console.log(isPalindrome(121));
console.log(isPalindrome(-121));
