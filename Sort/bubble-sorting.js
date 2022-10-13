const unsortedNumbers = [7, 2, 9, 3, 6, 5, 4];

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                swap(arr, i, j)
            }
        }
    }

    return arr;
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp
}

bubbleSort(unsortedNumbers) // [2,3,4,5,6,7,9]

// Time complexity is O(n2) because there is two nested for loop.
// Space complexity O(1) we are only modifying array itself.