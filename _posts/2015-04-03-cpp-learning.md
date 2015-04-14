---
layout: post
title: Does C support function overloading like C++?
description: 二叉树作为一种十分重要的数据结构，基本的遍历方式有三种，先序，中序，后序。一般可以用递归的形式来遍历。而非递归则需要采用堆栈俩模拟，其中先序和中序较好实现，但后序相对会难点。
category: notes
tags: [编程学习]
---

{% include JB/setup %}    

If you consider theprintf() function in C, that may lead you to think that C supports function overloading. Because, in C you can have `printf("%d", aDecimal)` and `printf("%f", aFloat)`. This looks a lot like function overloading, because we are using the same function name, but the function is accepting different parameter types – which is one of the ways we can overload functions.


###A Variable Argument List is not Function Overloading

Actually, this is not a case of function overloading – the printf function is just using a feature of C known as variable argument lists. This should not be confused with function overloading. So, to answer the question, Standard C does not support function overloading.


As an interesting side note, C++ doesn’t really have function overloading. What it does have is a means of faking it: the C++ compiler actually ‘mangles’ (or changes) function names according to the function’s parameters. So, functions that share the same name but have different numbers or types of parameters can be differentiated when invoked. Also, since the ‘mangling’ of function names is not standardized, it’s usually difficult to link object files compiled by different C++ compilers.
 

 [.](http://www.programmerinterview.com/index.php/c-cplusplus/function-overloading/)