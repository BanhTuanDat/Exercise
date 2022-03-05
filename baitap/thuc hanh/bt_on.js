let a = [1, -6, 3, -6, 5];

function average(arr){
    let sum = 0;
    let length = arr.length; // length = 5
    for (let i = 1; i < length; i = i + 2) {
        sum += arr[i];
    }
    /*
    i = 0: sum = 1;
    i = 1: sum = 3;
    i = 2: sum = 6;
    i = 3: sum = 0;
    i = 4: sum = 3;
    */
    return sum/length;
}

console.log("Gia tri trung binh cong: ", average(a));

function countNeg(arr) {
    let count = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] < 0){
            count += 1;
        }
    }
    return count;
}

console.log("So luong so am: ", countNeg(a));

function max(arr) {
    let max = -Infinity;
    let length = arr.length;
    for (let i= 0; i < length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Gia tri max: ", max(a));

// let a = [1, -6, 3, -6, 5];
function locate(arr,x) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if (arr[i] === x) {
           return i;
        }
    }
}

console.log("Vi tri tim thay: ", locate(a, -6));

// let a = [1, -6, 3, -6, 5];
function locate2(arr,x) {
    let length = arr.length;
    let pos = [];
    let j = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] === x) {
           pos[j] = i;
           j++;
        }
    }
    return pos;
}

console.log(locate2(a,-6));

let b = [5];
b[2] = 4;
console.log(b[9]); // out of range
