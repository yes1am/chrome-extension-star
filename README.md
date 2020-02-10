A chrome extension, `star` page and save in github issue.  

## 使用

- 进入 chrome 扩展程序页面，`chrome://extensions`
- 开启开发者模式，加载 `{extension}/dist` 目录的内容
- 右键该插件 icon, 进入**选项**页,配置 token （github token，用于请求 github）
- 在想要 **star** 的页面，鼠标右键，选择 **star**

## TODO

- 当前的方式是，将最后一次加载的页面，作为最终发送的页面，而并非是**右键操作**发送的页面，需要优化。
- 看是否能利用 background 与 content-script 的消息传递，将 background 中 **发送成功**的消息，更好的传递到 content-script 来。

## 参考文档

1. [【干货】Chrome插件(扩展)开发全攻略](http://blog.haoji.me/chrome-plugin-develop.html#popup-he-background)