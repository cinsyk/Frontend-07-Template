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



## Type（类型）

> 在内存中的表示与存储

### Number

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

### String

* Character（字符）

  * ASCII

    > 127个字符 ： 英文大小写+制表符

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

  > GB / Unicode存在编码问题，通常使用UTF编码
  >
  > [TextEncode](https://developer.mozilla.org/zh-CN/docs/Web/API/TextEncoder)

  * UTF8
    * 8个比特位
    * 默认用一个字节表示字符
    * 兼容ASCII编码
    * 汉字需要3个字节
  * UTF16
    * 16个比特位

  

### Boolean

* true
* false

### Null

* 是关键字
* 有值但是为空

### Undefined

* 是全局变量，不是关键字
* 可以重新赋值，会导致错误
* 没有定义过的值
* 可以使用void 0 来生成undefined

### Symbol

  * 作为object的属性名一种用途

### Object

> 从认知的角度，大概5岁产生对象的概念，object是贴近自然语言的一种表达方式，实际上object在英文中是包罗万象的物体的意思。虽然很早就对对象有概念，但是对对象没有做一个形式化的总结。

  * 对象由唯一标识，状态及行为组成，任何一个对象都是唯一的，状态由对象决定，状态改变的是行为。
  * 对象当成数据载体使用
  * JavaScript是多范式的表达
  * 设计对象的状态和行为时，我们总是遵循行为改变状态的原则

#### Class

>  类是一种常见的描述对象的方式，和类型系统有天然的整合，比较适合严谨的场景

* 分类

  * 将事件万物归为基类，然后从中进行分类
  * 只有一个从属关系
  * 单继承

* 归类

  * 从不同对象中提取共性，然后进行抽象
  * 可以归属多个类
  * 多继承

#### Prototype

  * 更接近人类原始认知的描述对象的方法，采用相似这样的方式去描述对象

  * 照猫画虎

  * 原型选择比较自由

  * Nihilo / Object prototype 是最顶层的原型，在JS中最顶层为Null

  * 适合比较自由的场景

### JS中的Object

> 一个对象是一个属性的集合。属性描述状态及行为，内存地址标识唯一性。支持原型机制，原型的原型不是Null的时候，会继续去找原型的原型

* 属性

  > key可以是string和symbol类型。symbol只能通过变量来访问。实现了权限控制

  * 数据属性
    * 具体存储的值
    * 可以是任意的类型
    * attribute是property的特征值
    * writable 点运算不可更改
    * enumerable 影响foreach / keys的行为
    * configurable 是否可改变
    * 一般描述状态
  * 访问器属性
    * get / set 访问读 / 写的时候调用的属性
    * 一般描述行为
  
* 原型

  * 访问属性时，如果当前对象没有，则会沿着原型找原型对象上是否有属性，而原型对象可能还有原型，因此会有原型链这一说法。

  * 这一算法保证了，每个对象只需要描述自己与原型的区别即可。

* API / Grammar

  * 基本对象机制

    > {} / . / [] / Object.defineProperty

  * 基于原型的对象API

    > Object.create / Object.setPrototypeOf / Object.getPrototypeOf

  * 基于类的对象API

    > new / class / extends

  * 历史包袱,分类及原型的混合

    > new / function / prototype

### 特殊的对象

* function

  > 有[[call]]行为

* Array

* Host

  > 宿主提供的对象

  * [[call]] 定义私有变量，运行时可以调用，但JS不支持