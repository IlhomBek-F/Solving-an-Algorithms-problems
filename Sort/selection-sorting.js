const unsortedNumbers = [7, 2, 9, 3, 6, 5, 4];

function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }

        if (min !== i) {
            swap(arr, i, min)
        }
    }

    return arr
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2]
    arr[index2] = temp
}

selectionSort(unsortedNumbers) // [2, 3, 4, 5, 6, 7, 9]

// Time complexity O(n2)
// Space Complexity O(1)
// The time complexity for selection sort is still O(n2) because of the nested loop
