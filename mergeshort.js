const mergeSort = (arr) => {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }
    
    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
    
    // Recursively sort the halves
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);
    
    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
}

// Helper function to merge two sorted arrays
const merge = (leftArr, rightArr) => {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    
    // Compare elements from both arrays and push the smaller one to the result array
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    
    // Push remaining elements from left array
    while (leftIndex < leftArr.length) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
    }
    
    // Push remaining elements from right array
    while (rightIndex < rightArr.length) {
        result.push(rightArr[rightIndex]);
        rightIndex++;
    }
    
    return result;
}

// Test cases
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]