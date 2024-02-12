# 渲染 - 轨迹

## 概述

这里我们解释在渲染设置窗口中选择了“轨迹”时，影响渲染的参数。

在选择了“轨迹”时，特效将沿着一条连续轨迹渲染。

轨迹将节点的所有子粒子按照顺序连成一条粗线，而不是单独渲染每个子粒子。例如，粒子1, 2, 3是粒子0的子粒子，则会在1, 2, 3之间绘制一条轨迹。这个轨迹是通过连接各个粒子的点形成的。与丝带不同，轨迹不会受到粒子的旋转和缩放的影响，它永远面向摄像机。

![](../../img/Reference/renderTrack.png)

## 参数
<div align="center">
<img src="../../img/Reference/Render/panel_track_en.png">
<p>“渲染设置”窗口</p>
</div>

### UV类型

设置UV重复的图案。

#### 拉伸

整个轨迹使用一张图片。适用于拉长的的粒子，例如激光。

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/track_uvtype_strech.efkefc' class='effect'></iframe>

#### 瓦片

它在轨迹中重复一张图片。它适用于有重复图案的粒子，例如链条。
还可以设置为不只重复边缘，而是在设置的循环区域内重复。

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/track_uvtype_tile.efkefc' class='effect'></iframe>

### 平滑

平滑急转弯处。

### 颜色时间来源

当设置颜色随时间的变化时，使用什么的时间。

#### 组

使用整个轨迹的生存时间。

#### 第一个粒子

使用第一个粒子的生存时间。
主要用于兼容旧版本。

### 样条细分的数量

通过细分轨迹让形状更为平滑。视觉效果更好，但性能消耗也更大。

<table>

<tbody>

<tr>

<td>

细分：1

</td>

<td>

细分：8

</td>

</tr>

<tr>

<td><img src="../../img/Reference/ribbon_track_division_1.png"/></td>

<td><img src="../../img/Reference/ribbon_track_division_8.png"/></td>

</tr>

</tbody>

</table>

### 前侧尺寸

设置轨迹前侧的宽度。

### 中间尺寸

设置轨迹中间的宽度。

### 后侧尺寸

设置轨迹后侧的宽度。

### 颜色・左侧前后

设置轨迹左前侧和左后侧的颜色。

### 颜色・左侧中间

设置轨迹左侧的中间部位的颜色。

### 颜色・中间前后

设置轨迹中间的前侧和后侧的颜色。

### 颜色・中间中间

设置轨迹中间的中间部位的颜色。

### 颜色・右侧前后

设置轨迹右前侧和右后侧的颜色。

### 颜色・右侧中间

设置轨迹右侧的中间部位的颜色。

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/render_track.efkefc'></iframe>