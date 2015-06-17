---
layout: post
title: "解决goagent下youtube飞墙视频无法播放的记录"
description: "解决goagent下youtube飞墙视频无法播放的记录"
category: notes
tags: [goagent,youtube]
---

在[果壳MOOC学院](http://mooc.guokr.com/)fork了一些课程。觉得自己应该利用业余时间拓展一些知识。特别是英文授课的内容。

现今主要关注了CS方面、未来技能方面和English Writing方面的课程。国外各大名校的教授水平应该不低。

在[udacity](https://www.udacity.com/)和[edX](https://www.edx.org/)都需要使用youtube进行视频播放。    
遇到一个问题：   
youtube网页能正常打开，但视频却是undefined无法播放。
上goagent的谷歌code处查找到了相关的解决办法：   
SwitchySharp Options添加一条rule:*://*.googlevideo.com/*。。
Mission complete!

……
