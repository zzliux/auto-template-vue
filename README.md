# 说明
该 demo 由 molysama 大佬的 [auto-template-html](https://github.com/molysama/auto-template-html) 修改而来

# auto-template-vue
@auto.pro 的 Vue 模板, UI 使用 Vant, 自己可以改成别的

# Usage

首次安装

```
npm i
```

生成 build 文件夹并监听 src 的变化

```
npm run start
```

个人建议使用模拟器编写时使用模拟器自带的**文件共享**功能，将脚本放到共享的路径中，模拟器端可直接执行项目，使用npm start自动生成了 index.html, web.js, auto.js 三个文件，入口为 auto.js, 直接运行项目会

## Vue 相关
- 调试  
    执行`npm run start`，使用浏览器打开 `dist/index.html` 后可调试前端代码，若需要调试通信相关需自行实现 mock 代码
- 编译  
    执行`npm run build`，会同时编译 auto 的代码和 html 代码，在`dist`目录下生成编译文件

## 通讯
### web 向 auto 发送事件
webview 可以自定义浏览器事件，因此我们可以拦截一些不常用事件，通过魔改这些事件来传值和执行安卓代码，这就是所谓的 JsBridge。在本项目里使用的是`prompt`事件来传递。
- web 端 使用 AutoWeb 的例子见 `src/template/pages/Home.vue`
- auto 端接收 web 端发来的事件并处理后返回结果的例子见 `./src/index.js`

### auto 向 html 发送事件
auto 执行 html 的代码原理就很简单了，直接通过 webview 来执行一段代码
```javascript
import { effect$ } from "@auto.pro/core"
import { run } from "@auto.pro/webview"

const webview = run("file://" + files.path("dist/index.html"))
effect$.subscribe(() => {
    // 在html里执行document.title，获取到标题并返回
    webview.runHtmlJS("document.title").subscribe((value) => {
        toastLog(`title是${value}`)
    })

    // 在html里执行run，并传递两个参数
    webview.runHtmlFunction("run", "hello", "world").subscribe((value) => {})
})
```

# LICENSE
MIT
