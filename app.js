function customFilter(arr, callback) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const numbers = [1, 2, 3, 4, 5];
const filteredNumbers = customFilter(numbers, num => num % 2 === 0);
console.log(filteredNumbers);