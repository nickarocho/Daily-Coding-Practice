// Takes a number, and adds the sum of each digit

function sumDigits(num) {
    // break # into individual digits (123)
        // 1. convert num to string ("123")
        // 2. break string up into array nums = ["1", "2", "3"]
    // Create sum = 0
    // Iterate through array
        // Increment sum by nums[i]
    // return sum
    if (!num) return "Please provide a number"
    let numString = num.toString();
    let nums = numString.split("");
    let sum = 0;
    nums.forEach(function(number){
        sum += parseInt(number);
    })
    return sum
}

// console.log(sumDigits(123))
// console.log(sumDigits(6004))
// console.log(sumDigits())

// RECURSIVE ANSWER

function sumDigitsRec(num) {
    // base case (how the recursive function stops calling itself)
    if (num < 10) return num;
    // recursive step
    return (num%10) + sumDigitsRec(Math.floor(num/10))
}

// console.log(sumDigitsRed(123))
// console.log(sumDigitsRec(6004))

// RECRUSION 101 QUESTION  

function factorial(num) {
    if (num === 1) return num;
    return num * factorial(num-1);
}

// const fct = num => return num === 1 ? num : num * fct(num-1)) // => 1 liner

/*
    const function name = <listOfArgs...> => <function body>
                         ^implicit return
*/

// console.log(factorial(3)) // => 6

// Write a function called combinationSum that accepts two arguments: 
// an array of integers (denoted using C from this point on) and a "target" integer. 
// combinationSum should return the set of all unique combinations from C that sum up 
// to the "target" integer. You may use a given number from C an unlimited number of times.


function combinationSum(C, t) {
    var i = C.forEach(function(i) {

    });
};

// combinationSum([2,3,6,7], 7) //=> [ [2, 2, 3], [7] ]
// combinationSum([1], 3) //=> [ [1,1,1] ]

function fact(num){
    var count = 1;
    for (var c = num; c > 0; c--) {
        count = count * c
    }
    return count
}

// console.log(fact(4));

function uniq(arr) {
    var u = [];
    for (var i = 0; i < arr.length; i++) {
        currentVal = arr[i].Value;
        if (!currentVal === !val) u.push(i);
    }
    val = arr[i].Value;
}

// console.log(uniq([1,1,2,3]))
// // => return ["cat", "apple"]
// console.log(uniq([1,2,3,4,5,5]))
// // => return ["hello", ""]

function squareMap(arr) {
    return arr.map(num => Math.pow(num, 2));
}

// console.log(squareMap([2, 4, 6]))

function map(arr, cb) {
    let mappedArray = [];
    arr.forEach(function(elem) {
        mappedArray.push(cb(elem));
    })
    return mappedArray;
}

const addOne = x => x + 1;

// console.log(map([1,2,3], addOne)); //=> [2,3,4]

const assert = require('assert')

let sample = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 5},
    {startTime: 4, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9, endTime: 10}
]

let expected = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12}
]

function mergeRanges(schedule) {
    return [1,2,3]
}

// assert(mergeRanges(sample) === expected, "mergeRanges fails test");

// ------------------------------------------------------------------------------ //

// --- 2/22 Challenge #1 --- //

        // Write a function called "pythag" that computes the hypotenuse of a tringle
        // "pythag" will be given a + b and should compute c.


function pythag(a, b) {
    return `The hypotenuse of this lovely triangle is ${(Math.sqrt(a*a + b*b))}`
}

// console.log(pythag(3, 4))

// ------------------------------------------------------------------------------ //

// --- 2/22 Challenge #2 --- //

        // Write a function called "filterMerge".
        // This function takes 3 parameters: arr1, arr2, cb (a callback function) that
        // accepts a single argument and returns true / false
        // HINT: Array.prototype.filter

function filterMerge(arr1, arr2, cb) {
    return [...arr1, ...arr2].filter(cb);
}

// console.log(filterMerge([1,2,3], [4,5,6], x => !(x % 2)));

// ------------------------------------------------------------------------------ //

// --- 2/26 Challenge #1 --- //

function range(a, b) {
    if (b > a) {
        return 'First parameter must be smaller than second';
    }
    let c = []
    for (var i = a; i < b; i++) {
        c.push(i);
    }
    return c;
}

// console.log(range(1,5))

// --- 2/26 Challenge #1 --- //
// Write a function that takes two arrays and returns a new array containing any
// duplicate items.

intersection = (arr1, arr2) => arr1.filter(elem => arr2.includes(elem));

// console.log(intersection([101, 203], [101]))

// --- 2/26 Challenge #2 --- //

function isPrime(num) {
    for (i = 2; i<num; i++);
        if (num % 2 === 0) {
            return false
        }
        return true
}

// console.log(isPrime(15485866))

// --- 3/7 FLATTEN --- //

function flatten(arr) {
    let notArr = [];
    let isArr = [];
    function iterateArray(arr) {
        for(var i=0; i<arr.length; i++) {
            if (typeof i === 'object') {
                notArr.push(i);
            } else isArr.push;
        }
    } 
    return isArr.length;
}

// function flatten(arr) {
//     const flatArray = [];
//     for (let elem of arr) {
//         if (Array.isArray(elem)) {
//             flatten(elem);
//         } else {
//             flatArray.push(elem);
//         }
//     }
//     return flatArray;
// }

function flatten(arr) {
    let flat = [];
    for (let i=0; i<arr.length; i++) {
        let elem = arr[i];

        if (Array.isArray(elem)) {
            //recursively call flatten
            flat = flat.concat(flatten(elem));
        } else {
            flat.push(elem)
        }
    }
    return flat
}

// console.log(flatten([ 1, [2, [3, [4]], 5] ]));

function isNumber(a) {
    let arr = []
    if (typeof a === 'number') {
        arr.push(a)
    }
    return arr
}

// console.log(isNumber(1));

function hammingDistance(num1, num2) {
    let count = 0;
    let [x, y] = [(num1).toString(2), (num2).toString(2)];
    let bitStringLength = x.length < y.length ? y.length : x.length;
    [x, y] = [x.padStart(bitStringLength, "0"), y.padStart(bitStringLength, "0")];

    for (let i=0; i<bitStringLength; i++) {
        if (x[i] !== y[i]) {
            count+=1;
        }
    }
    return count
}

// MAP

// Write a function called map that accepts two parameters: a collection (a collection is either an array or an object in this context) and a callback function. The callback function should itself accept two parameters:

// The first parameter should correspond to each element or each value in the aforementioned collection
// The second parameter should correspond to the index or key of each element, depending on whether the collection passed to map is an array or object
// Here is a description of maps function signature as well as its callback's function signature.

// map(arr, cb) //=> should return an Array

// /* AND */

// cb(elem or value, index OR key) //=> should return a single value (any data type in JS)
// The callback function provided to map should be applied to each element in the array or each value in the object and should return a new array of the resulting "transformed" values.

// This function is based off of Underscore's map function.

function map(collection, cb) {
    let mapped = [];
    if (Array.isArray(collection)) {
        collection.forEach(function(elem) {
            mapped.push(cb(elem))
        })
    } else {
        for (let elem in collection) {
            mapped.push(cb(collection[elem]))
        }
    }
    return mapped;
}

let a = map([1,2,3], x => x + 1); //=> [2,3,4]
let b = map(["cat", "dog", "bird"], function(animal, index) { //=> ['I like cute cats', 'I like cute dogs', 'I like cute birds']
    return `I like cute ${animal}s`;
});
let c = map({ a: 1, b: 2, c: 4}, function(value, key) { //=> [2, 3, 5]
    return value + 1;
});

// console.log(a);
// console.log(b);
// console.log(c);

// ----------- ISOGRAM ----------- //

// console.log(hammingDistance(1, 4))

function isogram(s) {
    let splitString = s.split("");
    let dashesAndSpaces = ("-" && " ")
    function remove(arr, elem) {
        return arr.filter(e => e !== elem)
    };
    let result = remove(splitString, dashesAndSpaces);
    return (new Set(result)).size !== result.length
}

// function isogram(str) {
//     str = str.replace(/ /g, "");
//     str = str.replace(/ /g, "");
//     let count = {};
//     str.split("").forEach(elem => count[elem] = 0);
//     str.split("").forEach(elem => count[elem] += 1);

//     for (let key in count) {
//         if (count[key] > 1) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isogram("abc"))


// -------- DECIMAL to BINARY -------- //

function decimalToBinary(dec) {
    let binNum = [];
    while (dec > 0) {
        binNum.push(dec % 2);
        dec = Math.floor(dec/2);
    }
    return binNum.reverse();
}

// console.log(decimalToBinary(4))

function sumDigits(a) {
    if (a<10) {
        return a;
    }
    return (a%10) + sumDigits(Math.floor(a/10))
}

// console.log(sumDigits(651))

// function bubbleSort(arr) {
//     let sorted = [arr]
//     arr.sort(function(a, b) {
//         return a - b;
//     });
//     return sorted
// }

function bubbleSort(lst) {
    lst.forEach(function(i, idx) {
        lst.forEach(function(j, jdx) {
            if (lst[jdx] > lst[jdx+1]) {
                let tmp = j;
                lst[jdx] = lst[jdx+1]
                lst[jdx+1] = j;
            }
        })
    })
    return lst;
}

// console.log(bubbleSort([2,4,5,1,3,7]))

function insertionSort(arr) {
    for (i = 1; i<arr.length - 1; i++) {
        elem = arr[i];
        j = i;
        while (j > 0 && arr[j - 1] > elem) {
            arr[j] = arr[j - 1];
            j = j - 1;
        }
        arr[j] = elem
    }
    return arr
}

console.log(insertionSort([2,4,5,1,3,7]))