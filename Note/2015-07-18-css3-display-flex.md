---
layout: post
title: "关于CSS3中display的flex"
description: "flex除却IE9(包括)以下不支持，其他大部分浏览器都已经实现了支持。（部分需要使用前缀），用flex可以实现大量复杂的布局"
category: 前端笔记
tags: [CSS]
---

FlexBox是一种CSS3新添加的布局模式。用来解决更为复杂的布局需求。

```html
    <div class="flex-container">
        <div class="flex-item">flex item 1</div>
        <div class="flex-item">flex item 2</div>
    </div>
```

```css
    .flex-container {
        display: -webkit-flex;
        display: flex;
        width: 300px;
        height: 240px;
        background-color: Silver;
    }

    .flex-item {
        background-color: DeepSkyBlue;
        width: 100px;
        height: 100px;
        margin: 5px;
    }
```

一个flexbox默认只有一条flex-line，其子元素flex-tiems都是依据flex-line来定位

<https://bocoup.com/weblog/dive-into-flexbox/>