function sittingArrangement(orang, kursi) {
  if (kursi < 1) {
    return "Invalid number";
  }
  let hasil = [];
  let index = 0;

  for (let i = 0; i < Math.ceil(orang.length / kursi); i++) {
    let row = [];
    for (let j = 0; j < kursi; j++) {
      if (index < orang.length) {
        row.push(orang[index]);
        index++;
      } else {
        row.push("Kursi Kosong");
      }
    }
    hasil.push(row);
  }

  return hasil;
}

// Test cases
console.log(sittingArrangement(["A", "B", "C"], 0));
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2));
console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3));
console.log(
  sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
);
