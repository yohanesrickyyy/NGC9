function targetTerdekat(arr) {
  let indexOfO = arr.indexOf("o");
  if (arr.indexOf("x") === -1) return 0;

  let leftDistance = Infinity;
  let rightDistance = Infinity;

  for (let i = indexOfO - 1; i >= 0; i--) {
    if (arr[i] === "x") {
      leftDistance = indexOfO - i;
      break;
    }
  }

  for (let i = indexOfO + 1; i < arr.length; i++) {
    if (arr[i] === "x") {
      rightDistance = i - indexOfO;
      break;
    }
  }

  return Math.min(leftDistance, rightDistance);
}

// Test cases
console.log(targetTerdekat(["", "", "o", "", "", "x", "", "x"]));
console.log(targetTerdekat(["o", "", "", "", "x", "x", "x"]));
console.log(targetTerdekat(["x", "", "", "", "x", "x", "o", ""]));
console.log(targetTerdekat(["", "", "o", ""]));
console.log(targetTerdekat(["", "o", "", "x", "x", "", "", "x"]));
