# 性能分析

## 概述

性能分析是一个用于检查在Effekseer中播放的特效的负载的工具。

它对系统的总CPU和GPU负载，以及每个特效的播放计数和GPU负载进行了可视化。

![](../../img/Reference/Profiler/Profiler_Overview_En.png)

## 使用方法

### Editor标签页

以折线图的形式实时显示在编辑器中运行的特效的CPU和GPU负载。

- 点击 `清除数据` 按钮以清除记录的数据。

### Target标签页

![](../../img/Reference/Profiler/Profiler_Target_En.png)

以折线图的形式实时显示在游戏或应用程序中运行的特效的CPU和GPU负载，以及每个特效的播放计数和GPU负载。

按如下方式使用此功能：

1. 配置[网络](network.md)面板并连接到目标。
2. 返回性能分析面板并确认状态为已连接。
3. 点击开始分析按钮。
