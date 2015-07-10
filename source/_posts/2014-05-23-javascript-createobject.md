---
layout: post
title: JavaScript中的创建对象的几种模式对比
description: Object大法好
category: 前端笔记
tags: [JavaScript]
---

##创建对象

####1. 工厂模式

```javascript
function createShape(x, func) {
    var o = new Object();
    o.x = x;
    o.func = function (){};
    return o;
}

var shape = createShape(x, func);
```
无法进行对象识别（识别对象的类型）

####2. 构造函数模式

```javascript
function Shape(x, func) {
    this.x = x;
    this.func = function() {};
}

var shape = new Shape(x, func);
```
经历的步骤：

1) 创建一个新对象

2) 将构造函数的作用域赋给新对象（this指向这个新对象）

3) 执行构造函数中代码。

4) 返回新对象。

特点：每个构造函数都实例化了一个新的对象。不同实例的同名方法是不相等的。

`alert(a.func == b.func); // false`

可解决方案：将方法func提出到外部作用域，然后`this.func = func;`。但是却使得自定义类失去封装性。

####3. 原型模式

####4. 组合使用构造函数模式和原型模式(recommended)

####5. 动态原型模式

####6. 寄生构造函数模式(not recommended) 不能依赖instanceof来确定对象类型

####7. 稳妥构造函数模式

