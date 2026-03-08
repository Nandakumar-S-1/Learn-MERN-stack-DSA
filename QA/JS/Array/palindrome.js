// let arr = [5, 0, 6, 0, 5, 3, 19, 5, 5, 6, 1, 7, 8, 5, 16, 11, 9, 5, 0, 0, 4, 12]
let arr = [1, 2, 3, 3, 2, 1]

function p(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        else {
            left++;
            right--;
        }
    }
    return true
}
console.log(p(arr))
