## 网站性能优化项目

联系网站优化，项目是在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

### 访问

[线上访问路径](https://mingyili.github.io/Website-Optimization_zh/)；
[谷歌测速工具](https://developers.google.com/speed/pagespeed/insights/);

### 完成

1. index.html在 Google pagespeed 测速在95分

* Grunt 自动压缩静态文件（css, js, image）；
* 字体文件只加载主要的一个（原来是引用了一套外部字体，改成内联引用其中一个）；
* style css 内联到页面顶部，防止阻塞加载；
* print.css 按需加载；
* analytics.js 文件做了 defer 延迟执行；


2: 优化 pizza.html 的 60FPS 以上

* 循环的dom选择

### 总结

本想使用Web Worker，循环计算