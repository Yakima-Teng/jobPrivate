# 基于howlerjs的简易音频播放器

### 介绍
支持连续播放的简易 MP3/Wav 音频播放器，基于 howler.js 实现

### 效果示意

见地址：https://zhangxinxu.gitee.io/howlerjs-player/

### 使用说明

引入 ui-audio.js

```html
<script type="module" src="./src/ui-audio.js"></script>
```

此时就可以使用 <code>&lt;ui-audio&gt;</code> 元素进行音频播放处理了。

```html
<ui-audio src="your.mp3" controls></ui-audio>
```

### API文档

支持几乎所有 HTML &lt;audio&gt; 元素支持的 API。


#### HTML 属性

<dl>
    <dt>loop</dt>
    <dd>支持值 0, 1, 2，分别表示顺序播放，随机播放和循环播放。如果不设置，音频播放完毕即停止，也不会显示播放顺序设置按钮。</dd>
    <dt>muted</dt>
    <dd>布尔属性值，表示是否静音。</dd>
    <dt>controls</dt>
    <dd>是否显示音频控制器。</dd>
    <dt>src</dt>
    <dd>当前播放的音频地址。</dd>
    <dt>prevsrc</dt>
    <dd>上一个播放的音频地址。如果不设置，不显示上一个播放按钮，如果是空字符串或者是 'none'，上一个播放按钮则禁用。</dd>
    <dt>nextvsrc</dt>
    <dd>下一个播放的音频地址。如果不设置，不显示下一个播放按钮，如果是空字符串或者是 'none'，下一个播放按钮则禁用。</dd>
    <dt>type</dt>
    <dd>音频播放的类型。和原生的 type 属性不同，这里只需要后缀名称即可，无需指定mime type，一般用在 src 地址没有暴露音频文件后缀的场景下。</dd>
    <dt>label</dt>
    <dd>标签提示信息，一般用来显示当前播放音频的名称或者描述。如果不设置，则不显示对应元素。</dd>
    <dt>mode</dt>
    <dd>当前播放的音频模式，支持 'webapi' 和 'html5' 两种方式，默认是 webapi，如果希望使用 html5 播放，可以设置 mode="html5"，一般音频文件比较大，或者希望音频边下载边播放的时候使用 html5 模式。</dd>
</dl>

#### JS 属性

以上 HTML 属性均可以直接从 DOM 对象上设置或获取，例如：

```js
const audio = document.querySelector('ui-audio');
// 获取
console.log(audio.loop);
// 设置
audio.muted = false;
```

而下面这些属性只能通过 DOM 对象进行设置。

<dl>
    <dt>currentTime</dt>
    <dd>当前播放的时间。</dd>
    <dt>volume</dt>
    <dd>当前的音量，范围0-1。</dd>
    <dt>playbackRate</dt>
    <dd>用来设置或获取当前媒体文件的播放速率，值为数值。</dd>
    <dt>paused</dt>
    <dd>当前音频是否暂停中。</dd>
</dl>

#### 方法

<dl>
    <dt>play()</dt>
    <dd>音频播放。</dd>
    <dt>pause()</dt>
    <dd>音频暂停。</dd>
    <dt>stop()</dt>
    <dd>音频停止，播放点会回到 0。</dd>
    <dt>prev()</dt>
    <dd>播放前一个音频。</dd>
    <dt>next()</dt>
    <dd>播放下一个音频。</dd>
    <dt>state()</dt>
    <dd>返回当前音频的状态，值包括：'unready', 'unloaded', 'loading', 'loaded'</dd>
    <dt>load()</dt>
    <dd>触发音频文件的加载。</dd>
    <dt>unload()</dt>
    <dd>音频文件的卸载，会停止播放音频，并释放内存。</dd>
</dl>


#### 事件

<dl>
    <dt>play</dt>
    <dd>播放时触发。</dd>
    <dt>pause</dt>
    <dd>暂停时触发。</dd>
    <dt>load</dt>
    <dd>加载完毕触发。</dd>
    <dt>end</dt>
    <dd>播放完毕触发，如果是单曲循环，则每次播放结束都会执行一次。</dd>
    <dt>stop</dt>
    <dd>播放停止触发。</dd>
    <dt>seek</dt>
    <dd>改变播放的位置时候触发，例如点击或拖动进度条。</dd>
    <dt>playing</dt>
    <dd>当前正在播放的时候触发，每秒执行约 60 次。</dd>
    <dt>error</dt>
    <dd>加载或播放错误的时候触发，错误类型通过 event.detail 获取。</dd>
</dl>

```js
audio.addEventListener('pause', function () {
    // 暂停啦...
});
```

更多信息参见：https://www.zhangxinxu.com/wordpress/?p=10349
