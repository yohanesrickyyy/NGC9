function kelompokAngka(arr) {
  let hasil = [[], [], []];

  for (let i = 0; i < arr.length; i++) {
    let angka = arr[i];

    if (angka % 2 === 0){
    hasil[0].push(angka)
  }
    else if (angka % 2 !== 0) {
      hasil[1].push(angka)
    }
    else if (angka % 3 == 0){
      hasil[2].push(angka)
    }
  }
  return hasil;
}
// test cases
console.log(kelompokAngka([2, 4, 6]));
console.log(kelompokAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(kelompokAngka([100, 151, 122, 99, 111]));
console.log(kelompokAngka([]));
