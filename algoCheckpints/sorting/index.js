//Simple sorting
let bubbleSort = (inputArr) => {
    let len = inputArr.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j]
                inputArr[j] = inputArr[j + 1]
                inputArr[j + 1] = tmp
            }
        }
    }
    return inputArr
}
// Iteration 0 (unsorted array): [5,3,1,4,6]
// Iteration 1, key is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]
// Iteration 2, key is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]
// Iteration 3, key is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]
// Iteration 4, key is 6 (was at index 4): [1,3,4,5,6] → [1,3,4,5,6] — because 6
let insertionSort = (inputArr) => {
    let length = inputArr.length
    for (let i = 1; i < length; i++) {
        let key = inputArr[i]
        let j = i - 1
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j]
            j = j - 1
        }
        inputArr[j + 1] = key
    }
    return inputArr
}

let selectionSort = (arr) => {
    let len = arr.length
    for (let i = 0; i < len; i++) {
        let min = i
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        if (min !== i) {
            let tmp = arr[i]
            arr[i] = arr[min]
            arr[min] = tmp
        }
    }
    return arr
}

const binarySearch = (array, target) => {
    // Define Start and End Index
    let startIndex = 0
    let endIndex = array.length - 1
    // While Start Index is less than or equal to End Index
    while(startIndex <= endIndex) {
      // Define Middle Index (This will change when comparing )
      let middleIndex = Math.floor((startIndex + endIndex) / 2)
      // Compare Middle Index with Target for match
      if(target === array[middleIndex]) {
        return console.log("Target was found at index " + middleIndex)
      }
      // Search Right Side Of Array
      if(target > array[middleIndex]) {
        console.log("Searching the right side of Array")
        // Assign Start Index and increase the Index by 1 to narrow search
        startIndex = middleIndex + 1
      }
      // Search Left Side Of Array
      if(target < array[middleIndex]) {
        // Assign End Index and increase the Index by 1 to narrow search
        console.log("Searching the left side of array")
        endIndex = middleIndex - 1
      }
      // Not found in this iteration of the loop. Looping again.
      else {
        console.log("Not Found this loop iteration. Looping another iteration.")
      }
    }
    // If Target Is Not Found
    console.log("Target value not found in array")
  }