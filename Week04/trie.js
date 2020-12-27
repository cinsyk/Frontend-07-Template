class Trie {
  constructor() {
    this.root = Object.create(null);
    this.$ = Symbol('$');
  }

  insert (word) {
    let node = this.root;
    let $ = this.$;
    for (let i = 0; i < word.length; i++) {
      const code = word[i];
      if (!node[code]) {
        node[code] = Object.create(null);
      }
      node = node[code];
    }
    if (!node[$]) {
      node[$] = 0;
    }
    node[$]++;
  }

  most () {
    let max = 0;
    let maxWord = '';
    let $ = this.$;
    const visited = (node, word) => {
      if (node[$] && node[$] > max) {
        max = node[$];
        maxWord = word;
      }
      for (let p in node) {
        visited(node[p], word + p);
      }
    }
    visited(this.root, '');
    console.log(maxWord, max);
  }
}

function randword (len) {
  let s = '';
  for (let i = 0; i < len; i++) {
    // 随机生成26个字母
    s += String.fromCharCode('a'.charCodeAt() + Math.random() * 26);
  }
  return s;
}
const trie = new Trie();
for (let i = 0; i < 10000; i++) {
  trie.insert(randword(4));
}
trie.most();
