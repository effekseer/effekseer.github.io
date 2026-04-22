# 高级渲染设置

## 概述

设置比基础渲染设置更加复杂的参数。

## 参数

### Alpha纹理

将Alpha纹理的红色区域作为遮罩，显示颜色贴图（漫反射贴图）。
例如，如果你将一张星形的图片设置为Alpha纹理，会显示颜色贴图的星形区域。
这个贴图可以单独设置UV。
通过单独设置UV，你可以通过滚动和动画实现复杂的效果。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/alpha.png
   :align: center
```

### UV扭曲纹理

使用设置的贴图扭曲颜色贴图。
如果扭曲贴图的颜色是(127,127,255)，则它不会产生效果，远离这个颜色时，扭曲将会增强。
这个贴图可以单独设置UV。
通过单独设置UV，你可以通过滚动和动画实现复杂的效果。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/dist.png
   :align: center
```

### Alpha衰减

Alpha值低于指定值的部分将不会被绘制。
可用于表现卡通风格化渲染效果。

```eval_rst

|pic_alphacutoff_none| |pic_alphacutoff|

.. |pic_alphacutoff_none| image:: ../../img/Reference/BasicRenderAd/alphacutoff_none.png
   :scale: 60

.. |pic_alphacutoff| image:: ../../img/Reference/BasicRenderAd/alphacutoff.png
   :scale: 60

```

将Alpha值低的区域视为编译，单独改变边缘的颜色。
易于表现卡通风格的渲染效果。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/alphacutoff_edge.png
   :align: center
```

### 衰减

设置模型的颜色沿着视线方向衰减。
可实现模型的正面透明，边缘不透明。

```eval_rst

|pic_falloff_none| |pic_falloff|

.. |pic_falloff_none| image:: ../../img/Reference/BasicRenderAd/falloff_none.png
   :scale: 60

.. |pic_falloff| image:: ../../img/Reference/BasicRenderAd/falloff_add.png
   :scale: 60

```

还可以使用减法和乘法。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/falloff_sub.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/falloff_mul.png
   :align: center
```


### 软粒子

降低靠近背景区域的透明度。（这个透明度指Alpha值，Alpha值越低越透明）
可以缓和背景和粒子之间不自然的边界。
需要Effekseer的运行环境支持软粒子。

```eval_rst

|pic_softparticle_far_none| |pic_softparticle_far|

.. |pic_softparticle_far_none| image:: ../../img/Reference/BasicRenderAd/softparticle_far_none.png
   :scale: 60

.. |pic_softparticle_far| image:: ../../img/Reference/BasicRenderAd/softparticle_far.png
   :scale: 60

```

还可以让靠近摄像机的区域透明。

```eval_rst

|pic_softparticle_near_none| |pic_softparticle_near|

.. |pic_softparticle_near_none| image:: ../../img/Reference/BasicRenderAd/softparticle_far_none.png
   :scale: 60

.. |pic_softparticle_near| image:: ../../img/Reference/BasicRenderAd/softparticle_near.png
   :scale: 60

```

### 混合纹理

将颜色贴图与指定的贴图混合。
不同于混合两个粒子，贴图的混合结果用于粒子的贴图。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend.png
   :align: center
```

还可以使用加法、乘法和减法。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_add.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_sub.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_mul.png
   :align: center
```

### 混合Alpha纹理

用作混合贴图的一部分的Alpha贴图。
行为与用于颜色贴图的混合贴图一致。
唯一的区别是目标贴图。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_alpha.png
   :align: center
```

### 混合UV扭曲纹理

用于扭曲混合贴图的贴图。
行为与用于颜色贴图的扭曲贴图一致。
唯一的区别是目标贴图。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_dist.png
   :align: center
```
