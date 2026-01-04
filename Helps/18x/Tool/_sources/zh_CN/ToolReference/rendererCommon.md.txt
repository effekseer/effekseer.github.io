# 基础渲染设置

## 概述

本章讲解“基础渲染窗口”，它提供了用于控制当前粒子渲染的基础参数。

## 参数
<div align="center">
<img src="../../img/Tutorial/03_rendercommon_en.png">
<p>“基础渲染设置”窗口</p>
</div>

### 材质

设置用于绘制粒子的材质。
你可以设置光照对粒子的影响或者扭曲背景之类。

#### 默认

粒子将直接显示贴图的颜色。

<iframe src='../../Effects/viewer_zh_CN.html#References/BasicRender/render_unlit.efkefc'></iframe>

#### 照明

粒子会受到光照的影响（出现明暗）。
除了用于提供颜色的贴图（可以称为漫反射贴图）外，还可以设置法线（Normal）贴图。
设置了法线贴图之后，表面的方向会被改变。

<iframe src='../../Effects/viewer_zh_CN.html#References/BasicRender/render_lit.efkefc'></iframe>

#### 扭曲（背景）

如果启用了扭曲，粒子将会扭曲它后面的任何东西。扭曲的方式取决于扭曲贴图的像素数据和扭曲强度。

扭曲贴图的红色和绿色通道将被用作扭曲信息。它们的值为127时，不会产生扭曲效果。当红色通道的值超过127时，背景将向右扭曲，小于127时，背景将向左扭曲。绿色通道的值大于127时，背景将向上扭曲，小于127时，背景将向下扭曲。但是，这里的上下左右取决于渲染方法。例如，渲染方法为精灵时，上下左右方向垂直于图片的四个边。

扭曲强度调整所有颜色的强度。值为0时，扭曲不会生效。

<table>

<tbody>

<tr>

<td>

扭曲

</td>

<td>

无扭曲

</td>

</tr>

<tr>

<td><img src="../../img/Reference/renderCommon_distortion_on.gif"/></td>

<td><img src="../../img/Reference/renderCommon_distortion_off.gif"/></td>

</tr>

</tbody>

</table>

在默认设置下，扭曲只会影响背景，而不会影响特效自身。要扭曲特效自身的其他节点，可在深度面板中设置绘制优先级。绘制优先级小于0的节点会因特效自身的扭曲而与背景一起扭曲。

#### 文件

你可以用用户创建的材质绘制粒子。
可以实现最广的表现力。

点击按钮新建并编辑材质文件。

详情参考材质的说明。

根据材质文件的不同，可以为该材质添加更多参数。
除常量外，还可以通过缓动或F曲线设置自定义参数。
自定义参数显示的名称取决于材质文件。

##### 缓存

要加速材质的读取，或者在特定的平台播放特效，你可以在加载材质后点击“生成缓存”，将材质保存为编译后的格式。

如果生成的缓存在与材质文件相同的文件夹下，加载会变得更快。
在一些平台，特效必须依靠缓存才能播放。
要生成可同时用于Windows和Mac的缓存，需要在Windows生成缓存之后，再在Mac生成一遍缓存。

<iframe src='../../Effects/viewer_zh_CN.html#References/BasicRender/render_file.efkefc'></iframe>

### 发光系数

用设置的值乘粒子的颜色。值越高，颜色越亮。如果值为1，图片会保持原样。
仅当材质是基础或照明时有效。
在不支持HDR的环境，提高这个值会产生奇怪的颜色表现。

```eval_rst
.. image:: ../../img/Reference/BasicRender/EmmisiveScaling.png
   :align: center
```

### 混合

设置粒子显示时的Alpha混合方式。控制图片互相重叠时如何混合，例如半透明、加法、减法。

![](../../img/Reference/BasicRender/AlphaBlend.png)

### 过滤

设置粒子显示时的过滤方式。

### 外侧（Wrap）

设置当UV小于0或大于1时的取样方式，可选择重复/钳制/镜像。

### 深度写入

设置粒子显示时是否会写入深度信息（用来表示粒子到摄像机的距离）。写入深度信息之后，渲染开启了深度测试的粒子时，如果这些开启了深度测试的粒子在写入了深度信息的粒子之后，它们就不会被渲染。

### 深度测试

如果启用了深度测试，比已经写入的深度信息更深的粒子不会被渲染。

### 淡入

粒子在生成时淡入。

### 淡出

粒子在将要销毁时淡出。

<iframe src='../../Effects/viewer_zh_CN.html#References/Render/fade_in_out.efkefc'></iframe>

### UV

设置粒子会显示出图像的哪个区域。
这个区域可以随时间变化，允许你让图片滚动或播放动画。
此处使用的单位是像素。

#### 动画

基于由一系列帧组成的图像播放动画。

![](../../img/Reference/renderCommon_uv_animation.png)

##### 开始时间

设置动画开始播放的时间。例如，你可以从由四帧图像构成的动画的第二帧开始播放。

##### 动画补间

- 无

按照固定间隔切换位置。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/BasicRenderSettings/Flip_None.mp4"/></div>

- 线性

动画切换时使用线性插值。
用于确保图像不会突然变化。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/BasicRenderSettings/Flip_Lerp.mp4"/></div>

#### 滚动

匀速移动UV区域。

![](../../img/Reference/renderCommon_uv_scroll.png)

#### F-曲线

使用F-曲线。

#### UV左右翻转概率

设置UV左右翻转显示的概率。

### 引用（UV）

一个粒子可以使用多张不同尺寸的图片。
在这种情况下，你可以选择一张图片将其分辨率作为图像的基础比例。
你还可以以128x128为基础设置UV，而无需设置图片。

使用材质时，参考图像的编号与材质的图像的优先级一致。

![](../../img/Reference/BasicRender/uv_referenced.png)

### 继承颜色

设置父粒子的颜色是否会影响子粒子的颜色。如果设置了继承颜色，子粒子最终渲染的颜色是父粒子的颜色乘子粒子设置的的颜色。如果选择了“仅生成时”，则生成子粒子时会应用父粒子当前的颜色。

<table>

<tbody>

<tr>

<td>

从不

</td>

<td>

仅生成时

</td>

<td>

始终

</td>

</tr>

<tr>

<td><img src="../../img/Reference/renderCommon_inherit_color_none.gif"/></td>

<td><img src="../../img/Reference/renderCommon_inherit_color_when.gif"/></td>

<td><img src="../../img/Reference/renderCommon_inherit_color_always.gif"/></td>

</tr>

</tbody>

</table>

