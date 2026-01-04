# 渲染 - 丝带

## 概述

这里我们解释在渲染设置窗口中选择了“丝带”时，影响渲染的参数。

在选择了“丝带”时，特效沿着一个连续的丝带渲染。

丝带并不将每个粒子分开绘制。而是将一个粒子的所有子粒子连接起来形成一个路径。例如，如果粒子1、2、3都是粒子0的子粒子，一个像丝带的形状将会在粒子1、2、3之间绘制。这个丝带是通过将每个粒子的(-0.5, 0, 0)和(0.5, 0, 0)连线形成的。

![](../../img/Reference/renderRibbon.png)

## Parameters
<div align="center">
<img src="../../img/Reference/Render/panel_ribbon_en.png">
<p>“渲染设置”窗口</p>
</div>

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/ribbon_render.efkefc' class='effect'></iframe>

### 渲染顺序

译注：1.70b版本并没有没有这个选项

设置同一个节点生成的粒子的渲染顺序。选择了“生成顺序”时，第一个生成的粒子被第一个绘制，选择了“倒序”时，第一个生成的粒子被最后绘制。

### UV类型

它设置了UV重复的图案。

#### 拉伸

整个丝带使用一张图片。适用于拉长的的粒子，例如激光。

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/ribbon_uvtype_strech.efkefc' class='effect'></iframe>

#### 瓦片

它在丝带中重复一张图片。它适用于有重复图案的粒子，例如链条。
可以通过“瓦片长度”指定重复间隔。
还可以设置为不只重复边缘，而是在设置的循环区域内重复。

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/ribbon_uvtype_tile.efkefc' class='effect'></iframe>

### 跟随视点

丝带的形状是一条连接以粒子为中心的两个点(-0.5, 0, 0)和(0.5, 0, 0)的粗线。
通常情况下，连接这两点的线的方向取决于粒子的旋转，但是你可以设置它是否应该旋转到指向观点的方向。

### 样条细分的数量

通过细分丝带让形状更为平滑。视觉效果更好，但性能消耗也更大。

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

### 整体颜色

设置丝带的整体的颜色。

### 顶点颜色

设置丝带的每个顶点（拐角）的颜色。

### 顶点坐标

设置丝带的每个顶点的坐标。此处只可设置X坐标。
