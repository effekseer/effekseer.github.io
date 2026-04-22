# 缓动

缓动允许你设置两个或三个点并在之间进行插值以改变它们的值。
在Effekseer中，你可以将缓动应用到特效的多种参数。缓动也有多种类型，下面将描述这些类型。

## 缓动的类型

缓动有多种不同的类型，例如开始时突然变化，结束时缓慢变化。

本页面末尾的图表显示了可用的所有类型的缓动。

## 中间点

基础的缓动有两个点，但你还可以加一个中间点。
值的变化将始终通过中间点。

## 随机组

Effekseer easing允许你为起点和终点设置随机性。如果所有的值都不一样，这不是问题，但有时你希望XY是随机的，但值是一样的，只有Z是不同的。例如，如果一个圆柱体的三维模型被用作梁，XY的随机性需要相同，因为你想保持圆的形状。

在这种情况下，有一个叫做组的功能。

如果组具有相同的数量，那么随机行为就会相同。这允许你再现一个XY相等但Z不同的随机。

Effekseer的缓动可以为起点和终点设置随机性。
如果XYZ的值不必相等，这不是问题，但有时你希望XY轴是同一个随机值，只有Z轴是不同的。
例如，如果你想将一个圆柱体的3D模型用作梁，XY轴的随机值需要是相同的，因为你需要保持形状是圆形的。

在这种情况下，有一个叫做组的功能。

如果组的数字相同，则随机行为也会相同。
这允许你实现XY相等但是Z不同的随机。

## 各轴类型独立

允许你为XYZ轴分别设置不同的缓动类型。

## 缓动类型一览

- EaseInBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInBack.png
   :align: center
```

- EaseInBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInBounce.png
   :align: center
```

- EaseInCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInCubic.png
   :align: center
```

- EaseInOutBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutBack.png
   :align: center
```

- EaseInOutBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutBounce.png
   :align: center
```

- EaseInOutCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutCubic.png
   :align: center
```

- EaseInOutQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuadratic.png
   :align: center
```

- EaseInOutQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuartic.png
   :align: center
```

- EaseInOutQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuintic.png
   :align: center
```

- EaseInQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuadratic.png
   :align: center
```

- EaseInQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuartic.png
   :align: center
```

- EaseInQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuintic.png
   :align: center
```

- EaseOutBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutBack.png
   :align: center
```

- EaseOutBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutBounce.png
   :align: center
```

- EaseOutCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutCubic.png
   :align: center
```

- EaseOutQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuadratic.png
   :align: center
```

- EaseOutQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuartic.png
   :align: center
```

- EaseOutQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuintic.png
   :align: center
```