# 01. 材质入门

## 概要

迄今为止，只能通过设置图像和参数进行简单的渲染。然而，这无法实现复杂的渲染，例如扭曲图像本身或添加某些区域。

为了实现这些复杂的渲染任务，Effekseer可以使用材质。材质可以用来设置粒子的绘制方式。材质可以在材质编辑器中制作。

让我们创建一个材质，实现复杂的渲染。

<div align="center">
<iframe src='../../Effects/viewer_zh_CN.html#Tutorials/Mat_01/Sample07.efkefc'></iframe>
<p>本章制作的特效</p>
</div>

请使用下面的链接下载预制的文件。

<a href="../../Effects/Tutorials/Mat_01_01.zip">下载</a>

打开后，你会看到界面中渲染出一个简单球体的模型。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state1.png">
</div>

要创建一个材质，在`基础渲染设置`面板中把`材质`改为`文件`。

<div align="center">
<img src="../../img/Tutorial/Mat_01/material_create_en.png">
</div>

点击生成按钮。 然后会显示一个生成新材质的对话框。当你完成了材质的保存，材质编辑器就会启动。

最初，只有一个`输出`节点。连接到这个`输出`节点的值将被绘制在粒子上。

<div align="center">
<img src="../../img/Tutorial/Mat_01/initial_en.png">
</div>

在材质编辑器中，这些节点被连接在一起，以设置渲染结果的计算方法。计算的结果显示为一个粒子。一开始可能看起来很困难，但让我们一点一点地编辑吧。

最简单的设置是将`常量3`节点连接到`输出`节点上。

按右键添加一个`常量3`节点。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_constant3_en.png">
</div>

将`常量3`节点连接倒`输出`节点的`Emissive`上。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_en.png">
</div>

然后左键点击`常量`3节点，在屏幕左边的输入栏中输入数值。

<div align="center">
<img src="../../img/Tutorial/Mat_01/input_constant3.png">
</div>

然后，你会看到球体的颜色会根据其数值而变化。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state2.png">
</div>

在添加`常量`3的节点时，你是否看到有`常量1-4`的节点？有几种类型的值可以在节点之间传输。

通常是一种由1到4个数组成的值，如数值1到数值4。也可以是图像。

## 绘制一张图片

可以使用`采样图像`绘制图像。

右键添加一个`采样图像`节点。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_GridImage_en.png">
</div>

在屏幕左侧的输入栏设置图像。
这次选择准备好的`Textures/Grid01.png`。

连接`采样图像`节点的RGB连接桩，替代`常量3`节点。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_GridImage_en.png">
</div>

<div align="center">
<img src="../../img/Tutorial/Mat_01/state1.png">
</div>

现在图像被显示出来了，但是透明区域并不透明。

所以我们将`采样图像`的`A`连接到`输出`节点的`Opacity`。这样就把图像的透明度与材质的透明度连接起来了。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_alpha_en.png">
</div>

然后，图像就被绘制出来了。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state3.png">
</div>

## 改变图像的显示区域

到目前为止，这种行为与简单地在模型上显示图像是一样的。然而，材质可以用来创建各种表现方式。作为准备，改变UV坐标的位置。

`采样图像`节点的UV是一个用于设置像素在图像中的位置的值。现在让我们来替换这个UV。

添加一个`UV`节点。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_uv_en.png">
</div>

然后，将UV连接倒`采样图像`节点。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_uv_en.png">
</div>

没有任何变化。这是因为，`UV`节点输出的是模型或粒子原本的UV值。

让我们改变UV值并移动图像的显示区域。

添加一个`加`节点和一个`常量2`节点。然后将`常量2`节点和`UV`节点连接倒`加`节点。两者都可以连接，因为它们的类型都是数值2。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_add_en.png">
</div>

然后改变`常量2`节点的值。 然后你会看到显示位置被移动了。

<div align="center">
<img src="../../img/Tutorial/Mat_01/change_constant2_en.png">
</div>

<div align="center">
<img src="../../img/Tutorial/Mat_01/state4.png">
</div>

## 扭曲图像

前面我们只是移动了图像的显示区域，现在让我们来扭曲图像。

我们将用一个图像取代我们先前使用的`常量2`节点。图像选择预先准备好的`Textures/Distortion01.png`。

添加一个`采样图像`节点并设置图像。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_DistortionImage_en.png">
</div>

因为图像的类型是数值3，使用`遮罩元素`节点。

`遮罩元素`节点从一个元素中抽取出一部分。这里我们使用前两个值，所以选择R和G。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_mask_en.png">
</div>

然后，将`遮罩元素`节点连接倒`加`节点。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_mask_en.png">
</div>

出现了很强的扭曲，但我不希望它像这样扭曲。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state5.png">
</div>

用一个`乘`节点来使其变小。添加一个乘法节点。

然后将一个`遮罩元素`节点连接到`乘`节点上。减少`乘`节点的值。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_multiply_en.png">
</div>

这样扭曲的程度就很合适了。

<iframe src='../../Effects/viewer_zh_CN.html#Tutorials/Mat_01/Sample05.efkefc'></iframe>

## 移动扭曲

因为静止下来很无趣，让我们移动变形。添加一个`移动UV`节点。`移动UV`节点输出随时间移动的UV值。把它连接到`采样图像`节点上。稍微改变一下参数。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_movinguv_en.png">
</div>

可以看到扭曲在移动。

<iframe src='../../Effects/viewer_zh_CN.html#Tutorials/Mat_01/Sample06.efkefc'></iframe>

## 颜色

最后，给它上色。

添加一个`乘`节点。

将输出图像的`采样图像`和你添加的第一个`常量3`节点连接到`乘`节点。

然后把它连接到Emmissive上。

<div align="center">
<img src="../../img/Tutorial/Mat_01/colorlize_en.png">
</div>

颜色乘到一起，所以图像被上色了。

<iframe src='../../Effects/viewer_zh_CN.html#Tutorials/Mat_01/Sample07.efkefc'></iframe>

最后，你可以通过下面的链接下载本章中制作的特效。

<a href="../../Effects/Tutorials/Mat_01_02.zip">下载</a>

## 例子

我们已经向你展示了材质的例子，但我们可以制作不同的材质。在Effeksseer的示例中有许多材质，你可以看一下它们。

## 总结

本章介绍了材质基础。材质的使用极大地扩展了表现的范围。