# 生成方法

## 概述

设置用于指定节点粒子初始生成位置的参数。除了父粒子的位置会影响子粒子的位置外，这里设置的值也会影响位置。换句话说，粒子是围绕位于父粒子位置的原点生成的，然后再根据指定的生成方法参数从该点开始平移和旋转。

用于设置节点的粒子的初始生成位置。除了父粒子的位置会影响子粒子的位置，这里设置的值也会影响位置。换句话说，粒子是围绕父粒子的原点位置生成的，然后再根据在生成方法中设置的参数进行平移和旋转。 ![](../../img/Reference/locationGene.png)

## 参数

<div align="center">
<img src="../../img/Tutorial/08_spawn_en.png">
<p>“生成方法”窗口</p>
</div>

### 影响生成角度

让生成方法的参数影响角度。例如，如果勾选此项，且选择“球”，那么粒子的Y方向就会是球的法向。

<table>

<tbody>

<tr>

<td>勾选</td>

<td>未勾选</td>

</tr>

<tr>

<td><img src="../../img/Reference/affect_angle.png"/></td>

<td><img src="../../img/Reference/affect_no_angle.png"/></td>

</tr>

</tbody>

</table>

### 生成方法

指定如何设置生成的位置。

#### 点

将某个点设置为生成的位置。

#### 线

粒子会沿着线生成。当你指定了线的起点位置和终点位置时，粒子会被放置在按照顶点数分割线的等分点上。粒子的X方向会沿着线的方向（勾选“影响生成角度”时）。

![](../../img/Reference/locationGene_line.png)

##### 位置噪声

会在粒子的位置上沿着线的方向添加指定范围内的噪声。可以用来降低生成位置的单一性。

##### 生成模式

###### 随机

粒子会被随机放置在线的任意一个分割点上。

![](../../img/Reference/locationGeneModelRand.png)

###### 顺序

粒子会依次放置在线从起点到终点的每一个分割点上。

#### 圆

将粒子置于一个圆上。此时，你只需设置半径和旋转角度。如果勾选了“影响生成角度”，粒子的Y方向将会是圆的法向。

##### 轴方向

设置圆的轴线方向，如果勾选了“影响生成角度”，粒子的Y方向将如下表所示。

<table>

<tbody>

<tr>

<td>

X轴

</td>

<td>

Y轴

</td>

<td>

Z轴

</td>

</tr>

<tr>

<td>

弧

</td>

<td>

沿轴

</td>

<td>

向外

</td>

</tr>

<tr>

<td><img src="../../img/Reference/locationGene_circle_xaxis.png"/></td>

<td><img src="../../img/Reference/locationGene_circle_yaxis.png"/></td>

<td><img src="../../img/Reference/locationGene_circle_zaxis.png"/></td>

</tr>

</tbody>

</table>

##### 角度噪声

会在粒子的角度上添加指定范围内的噪声。可以用来降低生成角度的单一性。

#### 球

将粒子放在球体内。此时，只需设置半径和X与Y轴的旋转角度。如果勾选了“影响生成角度”，粒子的Y方向将朝向球的表面法向。

#### 模型

沿着模型的表面放置粒子。如果勾选了“影响生成角度”。粒子的Z方向将会是模型表面的法向。

有三种类型的模型：文件、程序化模型和外部模型。

如果模型是从文件中读取的，选择FBX (.fbx)、metasequoia (.mqo)、gltf (.gltf/.glb)、obj (.obj)、geo (.geo/.bgeo)或Effeksser的模型格式 (.efkmodel)。如果选择的不是.efkmodel，选择的文件同文件夹下将会生成.efkmodel文件。在其他应用程序中播放特效时，这个生成的文件是必需的。

你还可以读取带有动画的FBX (.fbx)文件。将会播放FBX文件的第一个动画。动画将会按照父粒子的存在时间播放。粒子将会在受到动画影响的模型的表面生成。

如果你想使用一个程序化模型，在程序化模型面板中新建一个程序化模型，并在此选择它。

工具中使用外部模型时，参照在[行为](behavior.html)中登记的模型。
实际运行时需要在播放特效时提供外部模型，并按索引和坐标系（本地/世界）进行引用。


##### 生成模式

###### 随机

将粒子随机置于模型的表面。

![](../../img/Reference/locationGeneModelRand.png)

###### 顶点

将粒子按照顺序置于顶点。

![](../../img/Reference/locationGeneModelVertex.png)

###### 随机顶点

将粒子随机置于模型的顶点。

![](../../img/Reference/locationGeneModelVertexRand.png)

###### 表面

将粒子按照顺序置于模型的面的中心。

![](../../img/Reference/locationGeneModelFace.png)

###### 随机表面

将粒子随机置于模型的面的中心。

![](../../img/Reference/locationGeneModelFaceRand.png)
