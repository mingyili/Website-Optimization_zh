## 网站性能优化项目

联系网站优化，项目是在[网站性能优化课程](https://cn.udacity.com/course/website-performance-optimization--ud884/)中学习的技术来优化关键渲染路径并使这个页面尽可能快的渲染。

### 访问

[线上访问路径](https://mingyili.github.io/Website-Optimization_zh/)；
[谷歌测速工具](https://developers.google.com/speed/pagespeed/insights/);

### 完成的优化

1. index.html在 Google pagespeed 测速在95分

* Grunt 自动压缩静态文件（css, js, image）；

```
    //将src目录下的静态文件压缩到dist目录下
    {
    	"grunt-contrib-imagemin": "^1.0.1",  // 压缩图片
    	"grunt-contrib-uglify": "~0.4.0",    // 压缩Js文件  .min.js 和 .map文件 用于线上报错定位
    	"grunt-contrib-cssmin": "^2.2.0"     // 压缩css文件 .min.css
    }
    // grunt 执行命令
    grunt
```

* 字体文件只加载主要的一个（原来是引用了一套外部字体，改成内联引用其中一个）；
* style css 压缩并内联到页面顶部，防止阻塞加载；
* print.css 按需加载；
* analytics.js 文件做了 defer 延迟执行；


2: 优化 pizza.html 的 60FPS 以上

* dom 一次查询并做缓存，避免遍历时候多次查询造成页的面强制重绘；
* 获取dom位置的信息，没必要多次查询的用变量缓存；
* 初始化，事件绑定的执行做了延迟，


### 尝试后失败的优化

* 本想使用 Web Worker，处理Dom循环生成的计算，但是web worker 中不能做dom操作，最后只能放弃。

* dom 循环生成的dom 一次性append到页面中去；
> 这部分做的本打算做的优化是将多次生成的 dom 缓存，遍历完成后一次性 append 到页面中去；
> 但是实际的优化效果并不是很显著，所以就注释了；


### 总结

虽然完成了指定的优化任务，但是代码还是可以进一步规范的，
而且还有更多更复杂的优化方式可以去尝试，比如：

* 图片的延迟加载；
* 还有首屏以下的内容可以延迟实例化；
* 尽可能用css动画代替js动画；

总之，还有很多的优化方法可以去学习，去实践，去提高。