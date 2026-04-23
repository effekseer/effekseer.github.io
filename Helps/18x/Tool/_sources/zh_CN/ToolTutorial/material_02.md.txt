# 02. 用材质表现卡通风格的火焰。

## 概要

在本章中，我们将用材质来表现卡通风格的火焰。材质可以用来实现原本很难实现的复杂效果。

<div align="center">
<iframe src='../../Effects/viewer_zh_CN.html#Tutorials/Mat_02/Fire.efkefc'></iframe>
<p>本章制作的特效</p>
</div>

## 制作

本章将会使用各类图片和3D模型。
你可以用熟悉的软件制作出类似的素材。

由于制作这些素材较为耗费精力，我们已在此准备好预先制作完成的素材数据。
本章也会对制作方法稍作讲解，若无法自行制作素材，或是觉得制作过程繁琐的读者，可直接使用这些现成的素材。

<a href="../../Effects/Tutorials/Mat_02_01.zip">下载</a>

模型和材质都已经设置好了。
有关材质的新建方法及基本用法，请参阅上一章的内容。

首先，先显示带有滚动的云层图案的灰色图像。

添加一个`采样图像`节点，图像选择`Textures/Noise1.png`。
目前它的作用只是显示图片。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_En.png
   :align: center
```

为了使其移动，添加一个`移动UV`节点。
然后将其连接到`采样图像`节点。
将`移动UV`节点的速度设为(0.0, 0.4)。

现在图像会向上下方向流动。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Noise_Moving_En.png
   :align: center
```

然而，云层图案现在太粗糙了，需要将其细化。
使用`乘`节点将`移动UV`节点的输出与`(4.0, 1.0)`相乘，
并连接到`采样图像`节点的UV输入上。

这样，图像的UV坐标中的1会变为4。
也就是说，原本只显示1张图像的区域，现在会显示4张。
表现为在水平方向上大量重复显示。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Noise_Enlarge_En.png
   :align: center
```

然而，这样看起来仍然不像火焰。
为了让运动效果更复杂，我们添加扭曲效果。

添加一个`采样图像`节点，并选择扭曲贴图`Textures/Normal1.png`。

添加一个`遮罩元素`节点并提取RG通道。
然后添加一个`减`节点并减去0.5。
扭曲贴图中的红色和绿色通道表示以0.5为0点，向上下左右方向发生的扭曲。
因此，需要减去中心值0.5。

此外，乘以0.5来调整扭曲强度。

然后将扭曲值加到UV上。

这样一来，图像就会产生扭曲效果。
看起来或许会有点像火焰的样子。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Noise_Distort_En.png
   :align: center
```

火焰顶部颜色较暗，底部则更为明亮。
为了实现这一点，我们可以加或乘一个渐变图像。

添加一个`采样图像`节点并选择图像`Textures/Gradation1.png`。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_En.png
   :align: center
```

接着，使用`加`节点将经过扭曲处理的图像与新增的图像进行叠加。

现在我们得到了下方区域更亮的图像。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_Add_En.png
   :align: center
```

接下来，为了使图像的顶部变暗，用`乘`节点将之前的图像和新增的图像相乘。

这样一来顶部就变暗了，
整体看起来也渐渐有了火焰的效果。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_Mul_En.png
   :align: center
```

最后，上色。

使用一个彩色的渐变图像来着色。
添加一个`采样图像`节点并选择图像`Textures/Gradation2.png`。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_Color_En.png
   :align: center
```

然后用`遮罩元素`节点从流动的图像中提取RG通道。
将其连接到`采样图像`节点的UV。


颜色现在会随着渐变图像变化。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_Color_Distort_En.png
   :align: center
```

渐变图像的参考位置会根据输入的流动图像的颜色而改变。
这使得颜色会随着渐变而变化。

黑色值为0，指向渐变图像的顶部；白色值为1，指向渐变图像的底部。
利用这一点，可以将灰度图像转换为彩色图像。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/LookUp.png
   :align: center
```

流动的图像的RG通道被转换为Gradient2.png的横纵坐标，在这个例子中，R值和G值是同步变化的，也就是说，实际上黑色采样的是Gradient2.png的左上方(0,0)，白色采样的是Gradient2.png的右下方(1,1)。由于Gradient2.png在水平方向没有变化，所以即便输入的R值变化了，输出的颜色也不会受到影响。

根据渐变图像的不同，你可能需要固定R值，仅改变G值。

同样，为了改变透明度，添加一个`采样图像`节点并选择图像`Textures/Gradation3.png`。
以同样的方式连接流动的图像。白色区域为不透明，黑色区域为透明。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Grad_OpacityMask_Distort_En.png
   :align: center
```

将Gradation2的`采样图像`节点的输出连接到输出节点的Emissive。

将Gradation3的`采样图像`节点的输出连接到输出节点的OpacityMask。

现在火焰图案就显示出来了。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Output_En.png
   :align: center
```

但是，细节部分的颜色不正确。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/PreResult.png
   :align: center
```

原因是`采样图像`节点的采样方式设置为了Repeat（重复）。

图像有Clamp（钳制）和Repeat（重复）两种采样模式，用于决定如何处理边缘。

UV坐标超过1.0时，你可以设置是填充边缘颜色，还是重复图像。若设置为Repeat，会从另一侧开始重复采样。

下图左边是Clamp，右边是Repeat。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Clamp_Repeat.png
   :align: center
```

如果颜色值超过1.0（255）或低于0，就会引用到错误的颜色。

这可能是计算中的舍入误差导致的，但就本案例而言，是因为图像被相加。

因此，将渐变图像的`采样图像`节点的采样模式从Repeat改为Clamp。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Sampler_En.png
   :align: center
```

这样就完成了。

<div align="center">
<iframe src='../../Effects/viewer_zh_CN.html#Tutorials/Mat_02/Fire.efkefc'></iframe>
</div>

最后，你可以通过下面的链接下载本章中制作的特效。

<a href="../../Effects/Tutorials/Mat_02_02.zip">下载</a>

### 如何制作云层图像

这次我使用PhotoShop。新建一张分辨率为1024的图像，在PhotoShop中选择云彩（译注：滤镜-渲染-云彩）。提高对比度使黑白对比更显著。

然后将分辨率降低到512并保存。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Image_Cloud.png
   :align: center
```

### 如何制作扭曲贴图

这次我使用PhotoShop。新建一张分辨率为1024的图像，在PhotoShop中选择云彩。

然后创建一张3072x3072的图像。从之前的步骤复制九个云层图案。这是为了便于制作循环图像。然后生成法线。

最后，从中央剪切出1024x1024的图像，将分辨率缩小到512并保存。

```eval_rst
.. image:: ../../img/Tutorial/Mat_02/Image_Normal.png
   :align: center
```

### 如何制作渐变图像

这是通过PhotoShop的渐变功能制作的。由于是卡通风格，颜色做成了突然变化的样子。

## 总结

在本章中，我们制作了火焰。为了表述清楚，我们分开使用了多张图像，但在实践中，这些图像可能会被合并以使之更轻量化。

然而，这样制作出的火焰只是固定的连续流动。在下一章，我们将使其可以应用于各种不同的情况。

