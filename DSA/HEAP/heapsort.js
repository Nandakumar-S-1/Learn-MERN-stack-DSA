function heapSort(arr) {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    hepify(arr, i, n);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    hepify(arr, 0, i);
  }
  return arr;
}

function hepify(arr, index, size) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    hepify(arr, largest, size);
  }
}

let arr = [11, 2, 5, 7, 4, 33, 88];

console.log(heapSort(arr));
