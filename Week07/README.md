# JS运算符的优先级

> 运算符的优先级会影响语法树的构成，在JavaScript中，使用产生式描述运算符的优先级。以下产生式优先级由高到底

## Member Expressions

* 成员访问

  > a.b / a[b] (支持运行时使用变量)

* foo`string`

* super 

  > super.b / super['b']只能在class的构造函数中使用

* new.target

  * 固定写法

* new Foo()

## New Expressions

> 带括号的new 优先级比不带括号的new更高

* new Foo


 > ### Reference（引用）
 >
 > delete / assign 会用到引用特性
 >
 > * Object
 >
 > * key
 >

## Call Expressions

* foo()
* foo()['b']
* foo().b
* foo()`abc`

## Left handside & Right handside

* left hand才能放到等号左边
* 默认所有不属于lefthand 都属于righthand
* 不能放到等号左边的都属于righthand

## Update Expressions

* a++
* a--
* --a
* ++a

## Unary Expressions

* delete a.b

* void foo()

  > 把后面的任意值都变成undefined

* typeof a

* +a

* -a

* ~a

* !a

* await a

## Exponental Expressions

> 唯一一个右结合

* \**

## Multiplicative Expressions

> 要求左右两边都是Number类型，会发生类型转换

* *
* /
* %

## Additive Expressions

* +
* -

## Shift Expressions

> 要求左右两边都是Number类型，会发生类型转换

* <<
* \>>
* \>>>

## Relationship Expressions

* \<
* \>
* \<=
* \>=
* instanceof in

## Equality Expressions

* ==

  > 类型转换最复杂的一种

* !=

* ===

* !==

## Bitwise Expressions

* & ^ |

## Logical Expressions

> 短路原则

* &&
* ||

## Conditional Expressions

> 短路逻辑
>
> 唯一的三木运算符

* ? :









