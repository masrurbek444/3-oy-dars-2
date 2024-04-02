function customFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}


const numbers = [10, 20, 30, 40, 50];
const foundNumber = customFind(numbers, num => num > 25);