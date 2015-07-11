---
layout: post
title: JavaScript中的函数式编程
description: 函数表达式的特征，JavaScript特有的概念，闭包定义私有变量
category: 前端笔记
tags: [JavaScript]
---

##函数表达式

####一些简单的概念：

#####1. **函数声明提升**：指在执行函数之前会读取函数声明，意味着可以把函数声明放在调用它的语句之后。

然而，lambda函数却不是这样。

```javascript
EPM(); // 导致错误，函数不存在。
var EPM = function() {
    alert("God!");
}
```

#####2. 递归。

```javascript
function factorial (num) {
    if (num <= 1) {
        reuturn 1;
    } else {
        return num * factorial(num-1);
    }
}

var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4));  //error
```

**TypeError: factorial is not a function**

**arguments.calee 指向正在执行的函数指针**。可以代替实现函数的递归调用。

问题待研究：在严格模式下，arguments.callee，访问这个属性却会失效导致错误，为什么？[参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)

另外，可以对lambda函数创建命名来解决严格模式下的问题。

#####3. 闭包 ： 指有权访问另一个函数作用域（外部？）中的变量的函数。一些其他解释：

是由函数和与其相关的参照环境组合而成的实体。閉包只需有擴充變量的作用範圍即可，而無需有其它函數存在。

闭包是一种捕获了环境中自由变量的引用的函数，同时这个自由变量同函数一起存在。

换言之，使用闭包创建的函数可以「记住」它被创建时所处的环境。

闭包就是打入敌人内部的间谍，通过他你可以接触敌人对外封锁的信息。 

[MDN上的官方解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript#.E9.97.AD.E5.8C.85)

[stackoverflow上关于闭包的介绍](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

一些可供参考的博文/问答：

<http://www.zhihu.com/question/20963006>  : setTimeout 的参数用了字符串的形式，它最终会在全局作用域下运行?

<http://zora.ghost.io/tan-tan-bi-bao-yu-lambda/>

<http://www.zhihu.com/question/19554716>

<https://blog.mozilla.org/luke/2012/10/02/optimizing-javascript-variable-access/>
#####4. 内存泄露 ，使用闭包可能会导致的坏处

[MDN上的解释](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript#.E5.86.85.E5.AD.98.E6.B3.84.E9.9C.B2)

[内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
