# 寻路算法的演化
> 如何在最短时间内找到一条到达目的地路径最短的路线

```图```  ```BFS``` ```DFS```
## 广（宽）度优先算法
> 盲目搜索，全部顶点标记

* 从开顶顶点为起点，访问其相邻结点
* 不断重复，直到找到目标点未知。

```javascript
function find(start,end){
    const queue = [start];
    while(queue.length){
    	// 拿到开始顶点
        cosnt point = queue.shift();
        // 判断是否是目标点，是则返回
        // 不是目标点则寻找目标点周围点
        inset(point);
        ...
    }
}

function inset(point){
    //获取point周边的点
   	// 判断是否有标记,有则返回
    // 没有则进行标记，反正重复查找
}
```

## Dijkstra 算法
> 盲目搜索，最短路径
* Dijkstra 算法基于宽度优先算法进行改进，把当前看起来最短的边加入最短路径树中 ，利用贪心算法计算并最终能够产生最优结果的算法
* https://blog.csdn.net/sinat_36521655/article/details/82085936

## 贪婪最佳优先算法
> 有效搜索，路径不是最优
* https://www.ituring.com.cn/article/497664

## A*算法
> 路径最短，效率最优
* https://www.cnblogs.com/technology/archive/2011/05/26/2058842.html

## B*算法
> 效率比A*更快
* https://blog.csdn.net/qq_43461641/article/details/100711157

## 参考文章
* [让游戏角色快速找到最优路线：详解寻路算法的演进](https://gameinstitute.qq.com/community/detail/119033) 

