# JavaScript ——Atom

## Atom
###  Grammer（语法）

* Literal（字面值）
* Variable（变量）
* Keywords（关键字）
* Whitespace（空白符）
* Line Terminator（换行符）

### Runtime（运行时）

* Types （类型）
* Execution Context（执行上下文）



## type（类型）

* Number

  * 双精度浮点类型

  * IEEE 754 Double Float

    * sign（符号位） => 0 为正 / 1为负
    * Exponent（指数位） => 11
      * 1 0000000000 为基准值
      * 大于基准值为正 
      * 小于基准值为负
    * Fraction（精度位）=> 52
      * 开头会有一个隐藏的1

  * Grammer

    * 十进制

      * 0
      * 0.
      * .2
      * 1e3 => 10^3

      > 0.toString() => 0 .toString();

    * 二进制：0b111

    * 八进制：0o10

    * 十六进制：0xFF

* String

  > 字符如何在计算机中存储

  * Character（字符）

    * ASCII => 127个字符 ： 英文大小写+制表符

    * Unicode （联合编码集）

      > 全世界所有字符，从0000 - FFFF

    *  UCS

      > unicode和另一个合并时产生的字符集：只有0000-ffff

    * GB

      * GB2312
      * GBK（GB130000）
      * GB18030

      > 和unicode会有冲突，和ASCII兼容

    * ISO-8859：无中文编码

    * BIG5

  * Code Point

  * Encoding（编码）

    > GB / Unicode存在编码问题
    >
    > [TextEncode](https://developer.mozilla.org/zh-CN/docs/Web/API/TextEncoder)

    * UTF
      * UTF8
        * 8个比特位
        * 默认用一个字节表示字符
        * 兼容ASCII编码
        * 汉字需要3个字节
      * UTF16
        * 16个比特位

    

* Boolean

* Object

* Null

* Undefined

* Symbol