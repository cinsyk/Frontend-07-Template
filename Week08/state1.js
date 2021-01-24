const target = 'ababx';
const len = target.length;
const table = new Array(len).fill(0);
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

let findState = 0;
function findChar (char) {
  let state = start;
  for (const c of char) {
    state = state(c);
  }
  return state === end;
}

function start (c) {
  if (findState > 0) {
    findState = table[findState];
  }
  findState++;
  if (c === 'a') {
    return FoundA;
  }
  return start
}

function end (c) {
  return end
}

function FoundA (c) {
  findState++;
  if (c === 'b') {
    if (findState < len - 2) {
      return FoundB;
    }
    return FoundBX;
  }
  return start(c);
}

function FoundB (c) {
  findState++;
  if (c === 'a') {
    return FoundA
  }
  return start(c);
}

function FoundBX (c) {
  if (c === 'x') {
    return end;
  }
  return start(c);
}

console.log(findChar('abxabababx'));
