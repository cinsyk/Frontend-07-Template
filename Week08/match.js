function findCharAB (str) {
  let p1 = 0;
  let p2 = 1;
  while (p2 < str.length) {
    if (str[p1] === 'a' && str[p2] === 'b') {
      return true;
    } else {
      p1++;
      p2++;
    }
  }
}

function findCharABCDEF (str) {
  let p1 = 0;
  let p2 = 0;
  let target = 'abcdef';
  while (p2 < str.length) {
    if (str[p1] === target[p2]) {
      p1++;
      p2++;
    } else {
      p2 = 0;
      p1++;
    }
    if (p1 === target.length) {
      return true;
    }
  }
  return false;
}

console.log(findCharAB('acsjabede'));
console.log(findCharABCDEF('abcsjedefabcdef'));
