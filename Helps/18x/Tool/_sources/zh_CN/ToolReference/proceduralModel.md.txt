# 程序化模型

## 概述

使用这个功能，你可以通过仅仅调整参数来制作3D模型。
通常你情况下，你可能需要在其他软件中制作3D模型，但是你可以用Effekseer制作简单的3D模型。

## 参数

### 类型

指定要生成的网格类型。

#### 网格

按照设置的参数，生成球或圆柱的网格外侧。
总的来说，它生成一个绕轴旋转的物体。

##### 范围（角度）

设置生成网格的角度范围。
默认情况下是个圆，但可以从中切出一部分。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Angle.png
   :align: center
```

##### 细分

网格的细分数量。值越大，越平滑。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Division.png
   :align: center
```

#### 旋转角度

扭曲网格（麻花状）。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Mesh_Rotated.png
   :align: center
```

#### 丝带

生成一个环绕网格的形状。

##### 截面

设置丝带的截面的形状。

- 平面

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon.png
   :align: center
```

- 交叉

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Cross.png
   :align: center
```

- 点

不会显示为网格，但可以用作生成方法的参数。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Point.png
   :align: center
```

##### 旋转角度

设置丝带绕轴旋转的角度。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Rotation.png
   :align: center
```

##### 丝带厚度

设置丝带的起点和终点的厚度。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Thickness.png
   :align: center
```

##### 丝带角度

设置从视点到每个丝带的终点的旋转角度。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Angle.png
   :align: center
```

##### 长度噪声

随机移动丝带的起点和终点。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Length_Noise.png
   :align: center
```

##### 丝带数量

设置丝带的数量。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Count.png
   :align: center
```

### 形状

指定要生成的模型的网格形状。

#### 球

球。
你可以选择球的一部分区域。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Sphere.png
   :align: center
```

#### 圆锥

圆锥。
可设置半径和深度。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Cone.png
   :align: center
```

#### 圆柱

圆柱。
可以分别设置圆柱顶面和底面的半径。
也可以通过将深度设置为0制作一个盘面。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Cylinder.png
   :align: center
```

#### 样条曲线

这是一个用四个点表示边缘，通过旋转产生的网格。
适合用来表现龙卷风、极光等。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Spline.png
   :align: center
```

### 轴

设置网格将按照什么方向生成。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Axis.png
   :align: center
```

### 噪声

扭曲生成的形状。

#### 倾斜噪声

让网格在每个轴向产生倾斜。
适合用来制作每个位置都是斜线的网格，例如龙卷风。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Tilt.png
   :align: center
```

#### 波噪声

用一个波晃动模型的每个位置。
方便用来让网格看上去像是被固定间隔的波晃动。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Wave.png
   :align: center
```

#### 卷曲噪声

朝向随机方向扭曲模型的每个位置。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Curl.png
   :align: center
```

### 顶点颜色

设置每个顶点的颜色，并在顶点之间进行插值。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors.png
   :align: center
```

#### 中心区域位置

设置顶点颜色中的中心所代表的位置。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors_CenterPosition.png
   :align: center
```

#### 中心区域比率

设置顶点颜色中的中心所占据的区域大小。
值越大，中心顶点颜色所占据的范围越大。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors_CenterArea.png
   :align: center
```

#### 顶点颜色噪声

给顶点颜色添加随机噪声。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors_Noise.png
   :align: center
```

#### UV

设置网格使用的UV区域。