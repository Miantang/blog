---
layout: post
title: Ubuntu下遇到的find指令不存在的问题
description: oldfind和find的区别
category: 技术问题
tags: [JavaScript]
---

最近，在我的工作机器上，不知道出于何种原因，find指令出其地不存在？！导致不能新安装任何包。

```
dpkg: warning: 'find' not found in PATH or not executable
dpkg: error: 1 expected program not found in PATH or not executable
Note: root's PATH should usually contain /usr/local/sbin, /usr/sbin and /sbin
E: Sub-process /usr/bin/dpkg returned an error code (2)
```

这还不是find的权限或者$PATH的问题。<http://stackoverflow.com/questions/16597344/debian-aptitude-install-find-not-found-in-path-or-not-executable>
搜了很多都没有找到相应的解决方案。

每次使用apt-get时候，都需要依靠find指令。然而我在寻找解决方案的过程中，而无论是使用，`apt-get install findutils --reinstall`还是直接安装
[findutils_4.4.2-9build1_i386.deb](https://launchpad.net/ubuntu/wily/i386/findutils/4.4.2-9build1)都绕不开用到自身的find指令。要安装自己却要用到自己，这不是悖论吗？

就在我打算想办法用source code自行编译的时候，我无意中看到了这个指令"oldfind"，输入了，这个指令还真存在。。于是一句`ln -s /usr/bin/oldfind /usr/bin/find`死马当作活马医。

没想到，问题就这么解决了。。长时间受此煎熬，到现在我只想说一句：wpcap！

到底，还是太嫩。
