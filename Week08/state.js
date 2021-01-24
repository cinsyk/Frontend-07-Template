function findChar (char) {
  let state = start;
  for (const c of char) {
    state = state(c);
  }
  return state === end;
}

function start (c) {
  if (c === 'a') {
    return FoundA;
  }
  return start
}

function end (c) {
  return end
}

function FoundA (c) {
  return c === 'b' ? FoundB : start(c);
}

function FoundB (c) {
  return c === 'c' ? FoundC : start(c);
}

function FoundC (c) {
  return c === 'a' ? FoundA2 : start(c);
}

function FoundA2 (c) {
  return c === 'b' ? FoundB2 : start(c);
}

function FoundB2 (c) {
  return c === 'x' ? end : start(c);
}

console.log(findChar('abxabdabcabx'));
