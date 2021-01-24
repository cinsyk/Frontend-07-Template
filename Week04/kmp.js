function KMP (source, pattern) {
  // 计算table
  const table = new Array(pattern.length).fill(0);
  // 双指针
  {
    let i = 1;
    let j = 0;
    while (i < pattern.length) {
      // 判断指针j的值是否等于指针i的值
      if (pattern[i] === pattern[j]) {
        //相等则i和j都往前走，并记录下j的值;
        ++i;
        ++j;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
  }
  console.log(table);

  // 匹配
  {
    let i = 0; // source的索引
    let j = 0; // pattern的索引
    while (i < source.length) {
      if (j === pattern.length - 1) {
        return true
      }
      // 判断指针j的值是否等于指针i的值
      if (source[i] === pattern[j]) {
        //相等则i和j都往前走，并记录下j的值;
        ++i;
        ++j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
    return false;
  }

}
console.log(KMP('abababababx', 'abababx'));
