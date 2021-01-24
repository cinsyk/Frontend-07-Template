let target = '';
let len = 0;
let table = [];

function getPattern (pattern) {
  target = pattern.split('');
  len = pattern.length;
  table = new Array(len).fill(0);
  // 双指针
  {
    let i = 1;
    let j = 0;
    while (i < len) {
      // 判断指针j的值是否等于指针i的值
      if (target[i] === target[j]) {
        //相等则i和j都往前走，并记录下j的值;
        i++;
        j++;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          i++;
        }
      }
    }
  }
}

let findState = 0;
function findChar (char, pattern) {
  getPattern(pattern);
  let state = start;
  for (const c of char) {
    state = state(c);
  }
  return state === end;
}

function start (c) {
  let fn = start;
  if (findState > 0) {
    findState = table[findState];
  }
  if (c === target[findState]) {
    findState++;
    fn = FoundX;
  }
  return fn
}

function FoundX (c) {
  let fn = null;
  if (c === target[findState]) {
    findState++;
    fn = FoundX;
    if (findState === len) {
      fn = end;
    }
  }
  return fn ? fn : start(c);
}

function end (c) {
  return end
}

console.log(findChar('abxababab', 'abxabx'));
