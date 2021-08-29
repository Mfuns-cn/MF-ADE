# MFuns 高级弹幕引擎

MF-ADE (MFuns Advanced Danmaku Engine) 高级弹幕引擎

## 特性

经支持以下弹幕效果:

- 贝塞尔曲线
- 静止放置
- 3d 移动
- 3d 旋转
- 缩放
- 并行动画
- 串行动画
- 重复动画
- 透明度动画
- 图片弹幕
- 滤镜
- 渐变
- 大部分 CSS 属性

更多的效果还在不断的添加和完善中

如果使用过程中存在 bug ,欢迎提交 issue 反馈

当前版本: `1.6.1 Beta` ，更新日期：`2021/8/29`

## 弹幕实验室

弹幕实验室目前已经搭建完成 地址: [https://lab.meogirl.ml](https://lab.meogirl.ml)

## 使用文档

### 下载 & 安装

下载 lib/mfunsAdvanceDanmaku.js 文件
使用 script 标记导入到 html 中

npm 方式：

从 1.5.5 版本开始 弹幕引擎已支持 使用 npm 安装
安装

```
npm install mf-ade --save
```

导入

```js
import { MFADE } from "mf-ade";
```

### 基本使用

导入弹幕模块，并进行实例化的操作

```js
// var danmaku = new MfunsDanMaku({  //从1.4.0版本开始 此名称已被废弃
var danmaku = new MFADE({
  //挂载的容器，要求传入一个HTMLElement对象，详见“容器”
  containers: document.getElementById("danmaku"),
  //获取弹幕的接口，详见“弹幕接口”
  danmaku: (send) => {
    /*
        获取弹幕,调用回调函数，将弹幕数组传进去
        */
    send(["json....", "json...."]);
  },
});
```

### 容器

containers 容器接受一个 html 元素,但并不会对元素的大小和位置进行设置，所以需要在外部完成对元素进行大小以及位置的设置

### 弹幕接口

由于弹幕引擎为了更好的可扩展性，内部并无任何网络请求的实现，
所以需要在这里进行相应的操作，获取弹幕当获取弹幕完成，调用 `send(string[])` 回调函数，由于弹幕可能有很多条，所以回调函数接受一个 json 字符串数组

### 弹幕引擎的控制方法

#### pause()

暂停弹幕

#### start()

开始播放

> 注意：如果获取弹幕进行使用网络进行异步请求，当网络缓慢时，弹幕极有可能没有加载完成，如果此时调用播放，那么弹幕将不会被加载

#### skip(time:number)

跳转到指定位置，该方法要求传入一个单位为毫秒的数字

#### time():number

获取弹幕引擎的内部时间，返回一个单位为毫秒的数字

#### reset()

重置弹幕引擎

> 该操作会重新调用初始化传入的`danmaku`接口，如果接口中存在网络请求，当网络请求缓慢，可能会发生一些意想不到的 BUG

> 如果不希望重新获取弹幕，请使用 `skip(0)` 进行跳转

#### resize()

重新计算弹幕容器尺寸

一般情况下，浏览器窗口大小变化时，会自动更新尺寸

但是也存在一些边缘情况导致舞台尺寸无法正常更新，请调用此函数

#### listenerEvent(event: DanmakuEventType, callback: (data:any) => void)

> `1.5.0` 更新
> 监听弹幕事件

- event 事件类型

目前已有的事件类型

```js
/**
 * 弹幕字符串无效
 */
(DANMAKU_JSON_INVALID = "DANMAKU_JSON_INVALID"),
  /**
   * 单条弹幕格式错误
   */
  (DANMAKU_FORMAT_ERROR = "DANMAKU_FORMAT_ERROR"),
  /**
   * 弹幕开始加载
   */
  (DANMAKU_LOAD_START = "DANMAKU_LOAD_START"),
  /**
   * 弹幕加载完成
   */
  (DANMAKU_LOAD_DONE = "DANMAKU_LOAD_DONE"),
  /**
   * 弹幕舞台重置
   */
  (DANMAKU_STAGE_RESET = "DANMAKU_STAGE_RESET");
```

- callback 回调函数

## 相关链接

- [弹幕文档](https://meogirl.ml/2021/06/11/danmaku/Mfuns%E5%BC%B9%E5%B9%95%E6%89%8B%E5%86%8C/)
- [弹幕实验室](https://lab.meogirl.ml) [已停止维护]
- [弹幕实验室 v2](https://labv2.meogirl.ml)

## 未实现清单

- 路径动画 offset-path
- svg 属性变换动画
- 内容遮罩
- 滤镜和渐变动画
