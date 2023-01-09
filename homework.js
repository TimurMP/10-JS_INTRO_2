const numbers = [25, 15, 11, 1, 7, 2, 3, 5, 4, 1, 11]

bubbleSort(numbers);
printArray(numbers)

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}

function printArray(arr) {
    for (let i in arr) {
        console.log(arr[i])
    }
}



console.log("=================PART II ================")
const numbers2 = [25, 15, 11, 1, 7, 2, 3, 5, 4, 1, 11]
const strings2 = ["aaaa", "aaa", "a", "aa", "aaaaaaaa", "a"]

bubbleSort2(numbers2, numComparator);
printArray(numbers2);

bubbleSort2(strings2, stringLengthComparator);
printArray(strings2);


function bubbleSort2(arr, comparator) {
    for (let i = 0; i < arr.length - 1; i++) {
            comparator(i, arr)
    }

}

function numComparator(i, arr) {
    for (let j = 0; j < arr.length - 1; j++){
        if (arr[j] > arr[j + 1]) {
            let t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
    }
}

function stringLengthComparator(i, arr) {
    for (let j = 0; j < arr.length - 1; j++){
        if (arr[j].length > arr[j + 1].length) {
            let t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
    }
}

