---
layout: post
title: Github+Jekyll博客环境的搭建遇到的问题
description: 遇到一个jekyll的libyaml库版本过低的问题，依然无解。虽然是warning并不会一下。
category: 技术问题
tags: [css]
---

- **1.git简易指南**

[http://www.bootcss.com/p/git-guide/](http://www.bootcss.com/p/git-guide/ "http://www.bootcss.com/p/git-guide/")

**2.git简单实用教程**

[http://wuyuans.com/2012/05/github-simple-tutorial/](http://wuyuans.com/2012/05/github-simple-tutorial/ "http://wuyuans.com/2012/05/github-simple-tutorial/")

**3.使用github+jekyll搭建blog环境，完美替代wordpress**
[http://www.heiniuhaha.com/lessons/2012/08/09/use-jekyll-build-blog/](http://www.heiniuhaha.com/lessons/2012/08/09/use-jekyll-build-blog/ "http://www.heiniuhaha.com/lessons/2012/08/09/use-jekyll-build-blog/")     

   在进行jekyll serve(按提示--server指令已经过时，需要使用serve)这一步时，
遇到的情况是，libyaml版本低于0.1.5，需要升级成0.1.6。可以参考   
[https://www.ruby-lang.org/en/news/2014/03/29/heap-overflow-in-yaml-uri-escape-parsing-cve-2014-2525/](https://www.ruby-lang.org/en/news/2014/03/29/heap-overflow-in-yaml-uri-escape-parsing-cve-2014-2525/ "https://www.ruby-lang.org/en/news/2014/03/29/heap-overflow-in-yaml-uri-escape-parsing-cve-2014-2525/")   
我安装的是ruby193版本。（考虑到稳定性等因素，没有搭建2.1.1版本及以上，这也是官网推荐的稳定版本）
   
      SafeYAML Warning   
      
    You appear to have an outdated version of libyaml (0.1.5) installed on your system.   
    Prior to 0.1.6, libyaml is vulnerable to a heap overflow exploit from malicious YAML payloads.
    For more info, see:  
      *https://www.ruby-lang.org/en/news/2014/03/29/heap-overflow-in-yaml-uri-escape-parsing-cve-2014-2525/*   
    
      The easiest thing to do right now is probably to update Psych to the  latest version and enable the 'bundled-libyaml' option, which will  install a vendored libyaml with the vulnerability patched:   
    
      **gem install psych -- --enable-bundled-libyaml**

这里提到gem install psych -- --enable-bundled-libyaml这一步，提交指令之后依然是此问题不能解决。
然后参考了   
[http://jonforums.github.io/ruby/2012/02/24/hacking-a-gem.html ](http://jonforums.github.io/ruby/2012/02/24/hacking-a-gem.html  "http://jonforums.github.io/ruby/2012/02/24/hacking-a-gem.html ")  
均无解。。。   
最后发现这是warning。。暂时放弃解决。
同时发现了另外一个bug，关于中文GBK文字无法显示的bug。   
终于在这找到了答案：
[http://changfengmingzhi.blog.163.com/blog/static/16710528820131013103511364/](http://changfengmingzhi.blog.163.com/blog/static/16710528820131013103511364/ "http://changfengmingzhi.blog.163.com/blog/static/16710528820131013103511364/")
#####Jekyll 本地调试之若干问题
[http://chxt6896.github.io/blog/2012/02/13/blog-jekyll-native.html](http://chxt6896.github.io/blog/2012/02/13/blog-jekyll-native.html "http://chxt6896.github.io/blog/2012/02/13/blog-jekyll-native.html")

######http://beiyuu.com/

####http://blog.fens.me/jekyll-bootstarp-github/
