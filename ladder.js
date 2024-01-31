function ladder(kataKata) {
  let hasil = [];
  for (let i = 0; i < kataKata.length; i++) {
    let line = " ".repeat(i) + kataKata.slice(0, kataKata.length - i);
    hasil.push(line);
  }
  return hasil;
}

let output = ladder("developer");
output.forEach((line) => console.log(line));
