# 渲染模式

在编辑器中，粒子可以以几种渲染模式显示，这对于调试所编辑的特效的不同方面很有用。

## 普通

```eval_rst
.. image:: ../../img/Reference/DrawMode_Normal.png
   :align: center
```

这是默认的渲染模式。粒子的显示方式与引擎的渲染方式相同。

## 线框

```eval_rst
.. image:: ../../img/Reference/DrawMode_Wireframe.png
   :align: center
```

显示粒子的线框。

## 普通 + 线框

```eval_rst
.. image:: ../../img/Reference/DrawMode_WireframeNormal.png
   :align: center
```

显示带有纹理的粒子和线框的叠加。

## 过度绘制

```eval_rst
.. image:: ../../img/Reference/DrawMode_Overdraw.png
   :align: center
```

这种模式在优化时很有用。它渲染了粒子的透明“剪影”。这些透明的颜色互相叠加，使之易于定位多个粒子重叠的地方。

过度绘制粒子通常是导致性能问题的主要原因。你会希望通过尽可能减少重叠粒子的数量来减少过度绘制。
