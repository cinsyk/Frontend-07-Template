# 学习笔记

> 学习如何使用语言表达算法

## 三子棋

1. 垂直居中

   ```css
   // 使用vertical-align对行内块及行元素垂直居中对齐
   vertical-align: middle;
   
   // 使用行高对文本进行垂直居中对齐
   height:36px;
   line-height: 36px;
   
   ```

   

2. 三元一次表达式

   ```javascript
   // 使用三元一次表达式来简写多个分支
   value === 1 ? '⭕': 
   value === 2 ? '❌': ''
   ```

3. 使用debugger可以清晰的查看代码的走向

   1. 代码中加入debugger

   ```javascript
   // do something
   debugger;
   // do something
   ```

   2. 调试器中打断点

4. 循环使用let声明变量，可以保留当前索引值，直接使用

   ```javascript
   // 使用let 生成块级作用域，保留当前的i
   for(let i = 0; i < 3; i++){
   	// do something
   	dom.addEventListener('click',() => fn(i))
   }
   ```

   

5. 两个数互相转换时，可以使用它们的和进行减法

   ```javascript
   let num = 1;
   function fn(){
   	num = 3 - num;
   	console.log(num);
   };
   fn(); // 2;
   fn(); // 1
   
   ```

   

6. 

## 异步编程

1. setTimeout

   > 因为js是单线程，所以实现异步，只能依靠setTimeout，但是如果需要多个延时，会形成回调地狱

   ```javascript
   setTimeout(() => {
   	// do something
   	setTimeout(() => {
   	// do something
   	}, 1000);
   }, 1000);
   
   ```

2. Promise

   > promise的出现解决了回调地狱，使代码更加简洁

   ```javascript
   function sleep(time){
   	return new Promise((resolve) => {
           setTimeout(resolve, time);
       })
   }
   
   sleep(1000).then(() => {
       // do something
       return sleep(1000)
   }).then(() => {
       // do something
   })
   ```

   

3. async/await

   > async/await 通过promise实现异步变同步，使得代码进一步的简化

   ```javascript
   async function fn(){
       // do something
       await sleep(1000)
       // do something
       await sleep(1000)
       // do something
   }
   ```

   

4. generator

   > 在async/await出现之前，使用generator来模拟async/await的效果

   ```javascript
   function* go(){
        yield sleep(1000);
        // do something
        console.log(1);
        yield sleep(1000);  
   }
   
   // generator需要调用,所以需要一个函数来调用
   function run(iterator){
    	//  generator会提供iterator.next()回调函数，里面包含了两个状态，一个done代表代码执行结束，value如果返回的是promise，则继续调用本函数.
       const {value, done} = iterator.next();
       if(done)return
       if(value instanceof Promise){
           value.then(() => {
               run(iterator);
           })
       }
   }
   // 通过回调函数的形式传进去
   run(go());
   ```

   

