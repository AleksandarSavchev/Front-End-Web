let arr = [10, 5, 13, 18, 51];

for (i in arr) {
    console.log(arr[i]);
}

function timesTwo(arr) {
    return arr.map(x => x * 2);
}
let arr2 = timesTwo(arr);
console.log(arr2);

function filterEven(arr) {
    return arr.filter(x => {return x % 2 === 0 ? true : false});
}
let arr3 = filterEven(arr);
console.log(arr3);

function lowerThan10(arr) {
    for (i in arr) {
        if (arr[i] < 10) return true;
    }
    return false;
}

function filter3(arr) {
    return arr.filter(x => {return x % 3 === 0 ? true : false});
}
let arr4 = filter3(arr);
console.log(arr4);

console.log(arr.reduce((acc, x) => {return acc + x;}));

let arr5 = arr.slice(3);
console.log(arr5);