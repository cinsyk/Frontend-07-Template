# toy-browser

 * HTML标准里面有80个状态，标准是写给浏览器的实现者去看的，直接将伪代码翻译即可。

 * 主要标签有：开始标签，结束标签和自封闭标签

 * 状态机中除了状态迁移，还要加入业务逻辑

 * 属性分为双引号 单引号及无引号三种类型

 * 使用栈就可以进行HTML的词法分析树

 * 带前括号的是tag，背后代表的东西是element

 * 遇到开始标签时入栈，结束标签时出栈。

 * 栈顶元素是当前元素的父元素

 * slice不传参数时，会默认复制原数组

 * 因为首先获取的是当前元素，所以匹配顺序是从内向外的。

