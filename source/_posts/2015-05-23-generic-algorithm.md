---
layout: post
title: C++标准库算法遇到的一些问题
description: 需要深入理解“泛型”的思想，体会标准库是如何通过算法和数据结构的分离来实现泛型，迭代器是如何在这两者之间架起的桥梁。
category: notes
tags: [编程学习]
---

什么是**泛型编程**：

简而言之，就是 **用不变的代码实现可变的算法**。

一般有以下几种应用：

1. 模板
2. RTTI（typeid, dynamic_cast, type_info）
3. 虚函数

理解C++泛型算法我注意的几点内容：

####1. 除了algorithm中的一百多种算法， 头文件numeric中也定义了一组数值型泛型算法。

####2. 标准库算法不会改变它们操作的容器的大小，但是back_inserter却不然，原因是：

严格来说，**标准库算法根本不知道“容器”这个东西**，它们只接受迭代器参数，运行于这些迭代器之上，通过迭代器访问元素。

当传递给算法普通迭代器时，普通的算法可以读取元素，改变元素值，移动元素，但是无法增加元素，删除元素。

但是传递给算法插入器的时候，（如back_inserter）,这类迭代器可以调用下层容器的操作来向容器插入元素，造成了增加元素的效果。

因此，问题的关键点是：标准库算法操作迭代器而间接访问容器，能不能增删元素，不在于算法，而在于传递给它们的迭代器是否具备这样的能力。

####3. lambda中，`-> (return type)`的作用？

假如lambda函数体内是单一的return语句，返回类型可以推断出来，无需指定。

假如lambda函数体内包含单一return语句之外的内容，且未指定返回类型，则返回void。

**假如，非单一return且未指定返回类型，但是返回了void之外的其他类型，会产生编译错误。**

```c++
    //错误：不能推断lambda返回类型。
    transform(v.begin(), v.end(), v.begin(), [](int i) { if(i < 0) return -i; else return i;});
    //正确：
    transform(v.begin(), v.end(), v.begin(), [](int i) -> int { if(i < 0) return -i; else return i;});
```
    
**然而，我[这段程序](https://github.com/Miantang/PAT/blob/master/NowCoder-Practice/1002-2.cpp)不管指定int,bool,或者不指定，都不报错但报warning，原因？**
    
> warning: control reaches end of non-void function [-Wreturn-type]

[对应的相关题目](http://www.nowcoder.com/pat/1/problem/4015)

经过[EPM God](https://blog.a-kar.in/legacy-mode8-projects/)的提点，我这个warning是因为 int 的遍历不全。
（虽然跟C++ Primer上说的，会报错但是实际没报错，不知道是不是编译器(MinGW 4.8.1)的关系
    

####4. lambda中的捕获，

捕获列表只用于局部非static变量，lambda可以直接使用局部static变量和所在函数之外声明的名字。

为避免潜在的捕获导致的问题，可能的话，应该避免捕获指针和引用。

\[=\] ： 隐式捕获，引用捕获。

\[&, a, b...\] : `a,b`表示这些变量采用值捕获，而其他任何隐式捕获采用引用捕获。

\[=, a, b...\] : `a,b`表示这些变量采用引用捕获，而其他任何隐式捕获采用值捕获。
