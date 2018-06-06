1、简易运动框架：
简易的运动框架可以用来控制长宽高、位置、透明度，结合定时器可以实现简单的动画。
http://www.mamicode.com/info-detail-1612909.html    参考网址

2、获取元素的样式：
 因为obj.style.xx,但是这个方法只能获取行内样式
 所以运用currentStyle（IE）方法和getComputedStyle方法

   定义一个获取元素样式的通用函数：

  function getStyle(obj,attr){
     return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
  };

  3、doMove(obj,attr,dir,target,endFn)

obj是要进行操作的对象

attr是要操作的属性

dir是要改变元素属性的速度（在一段时间内改变多少）

target属性改变的目标值

endFn是回调函数

首先，我们先要判断dir的正负，如果元素现在的属性值要是小于目标值则attr为正，否则为负数

注意：用getStyle()函数返回的是字符串，所以要用parseInt转换为数字

  
      