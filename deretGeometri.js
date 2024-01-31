function tentukanDeretGeometri(arr) {
  let ratio = arr[1] / arr[0];

  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();

    if (second / first !== ratio) {
      return false;
    }
    arr.unshift (second);
  }
  return true
}

//test Case
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]))
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]))
console.log(tentukanDeretGeometri([2, 4, 6, 8]))
console.log(tentukanDeretGeometri([2, 6, 18, 54]))
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]))
