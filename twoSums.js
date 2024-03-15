const twoSum = function(nums, target) {
    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) {
        // Loop through each element after the current element
        for (let j = i + 1; j < nums.length; j++) {
            // Check if the sum of the current element and the other element equals the target
            if (nums[i] + nums[j] === target) {
                // Return the indices of the two numbers
                return [i, j];
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));