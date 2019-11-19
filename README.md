# vue-adaptive-hooks

> 🚈 基于实验性的浏览器 API，提供最适合用户设备和网络限制的体验

本项目基于 [vue-hooks](https://www.npmjs.com/package/vue-hooks)，提供了一系列访问设备和网络信息的钩子用于自适应加载，以改善不同环境下用户的使用体验。

支持以下浏览器 API:

-   [数据保存首选项](https://developer.mozilla.org/zh-CN/docs/Web/API/Performance/memory)
-   [电量信息与电池状态](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/getBattery)
-   [设备 RAM 存储容量](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/deviceMemory)
-   [设备网络连接信息](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/connection)
-   [可用 CPU 核心数](https://developer.mozilla.org/zh-CN/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency)

## 用途

更容易针对低端设备进行优化，同时逐步添加仅限高端设备的功能。使用这些 hooks 可以为用户提供最适合其设备和网络约束的良好体验。
例如，当大型的在线应用运行卡顿或不能运行时，应当提供具有简单样式和功能的见面呈现给用户使用。再例如，最典型的使用场景是视频网站的自动画质。

## 安装

```bash
npm i react-adaptive-hooks --save
```

## 使用方法

首先需要您在项目中加载本库中的钩子

```
import { useNetworkStatus } from 'vue-adaptive-hooks/network';
import { useSaveData } from 'vue-adaptive-hooks/save-data';
import { useHardwareConcurrency } from 'vue-adaptive-hooks/hardware-concurrency';
import { useMemoryStatus } from 'vue-adaptive-hooks/memory';
import { useBatteryStatus } from 'vue-adaptive-hooks/battery';
```

## License

Licensed under the [Apache-2.0](https://opensource.org/licenses/apache-2.0) license.

Copyright (c) 2019-present, [gylidian](https://github.com/gylidian)
