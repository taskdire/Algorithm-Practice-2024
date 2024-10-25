/*function binarytodec(binary) {
  let decimal = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}

// 0101
// 0401 = 5

console.log(binarytodec("10011"));

*/
function dectob(dec) {
  let b = [];

  for (let i = 0; i < dec; i++) {
    if (dec % 2 === "0") {
      b = b.push("0");
    } else b = b.push("1");
  }
  return b;
}

console.log(dectob("2"));
