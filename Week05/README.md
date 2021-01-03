# Proxy与拖拽

## Proxy的基础应用

``` javascript
new Proxy(object,config);
```

* 应用Proxy的代码，预期性会变差，所以不建议在业务代码中使用，是专门为底层库设计的特性
* Javascript中对象属性被设置是一个不可被监听的事件，通过Proxy代理，可以使监听对象的事件
* Proxy比get / set更强大，可以监听object原来没有的值
* Proxy对内置或原生的操作都可以做拦截或改变



## Effect的基础实现

* 获取函数调用了对象的哪些属性（收集依赖关系）

## Reactivty 响应式对象

* 半成品的双向绑定，负责数据到dom的单线监听
* 不需要使用代码即可做到双向绑定
* 避免各种update事件

> 经典案例：调色盘

## 拖拽事件

* 性能及逻辑上，在mouseDown里面去监听mousemove和mouseup。
* 在document上监听鼠标事件，防止拖拽中断事件

## CSSOM

> CSSOM:CSS Object Model ,CSS对象模型.有关的文献:https://www.w3.org/TR/cssom-1/.主要内容是媒体查询和各种CSS API(例如:CSSStyleDeclaration,CSSStyleRule,CSSRule等).

*  getBoundingClientRect()：getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
  
  ```javascript
  // 会随着界面变化而变化
  {
      top: '元素顶部相对于视口顶部的距离',
      bottom: '元素底部相对于视口顶部的距离',
      left: '元素左边相对于视口左边的距离',
      right: '元素右边相对于视口左边的距离',
      height: '元素高度',
      width: '元素宽度'
  }
  ```


## Range API 

> Range是一种fragment（HTML片断），它包含了节点或文本节点的一部分。 可以通过document.createRange()或[selection](http://www.cnblogs.com/rainman/archive/2011/02/27/1966482.html)象的getRangeAt()方法获得。
>
> createRange()是在2级DOM里定义的一个方法，它属于document对象。IE是不支持此方法的，因此需要检测浏览器的支持性。


* setStart(node, offset)和setEnd(node, offset)

  > setStart：设置起点的位置，node是对startContainer的引用，偏移则是startOffset；
  > setEnd：设置结束点的位置，node是对endContainer的引用，偏移则是startOffset；

* insertNode

  >可以插入一个节点到Range中，注意会插入到Range的“起点”。