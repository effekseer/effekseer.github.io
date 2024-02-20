# 位置

## 概述

提供控制节点的位置的参数，特别是相对于父节点的位置。

## 参数

### 位置

设置粒子的生成位置。它将影响粒子相对于其父节点的位置。如果没有父粒子，或者基础设置窗口中设置了不继承位置，它将表示绝对位置。

<div align="center">
<img src="../../img/Tutorial/02_position_en.png">
<p>“位置”窗口</p>
</div>

#### 固定位置

将粒子置于一个固定的位置。
<iframe src='../../Effects/viewer_zh_CN.html#References/Position/setposition.efkefc' class='effect'></iframe>



#### 位置・速度・加速度

设置粒子的位置、速度和加速度。
<iframe src='../../Effects/viewer_zh_CN.html#References/Position/movingposition.efkefc' class='effect'></iframe>

#### 缓动

设置生成和移除的位置，以及粒子的生命周期中在这两个位置之间插值的方法。
<iframe src='../../Effects/viewer_zh_CN.html#References/Position/easing.efkefc' class='effect'></iframe>

#### F曲线

在F曲线窗口中，通过定义自动化曲线来控制位置。
<iframe src='../../Effects/viewer_zh_CN.html#References/Position/f_curve.efkefc' class='effect'></iframe>

#### NURBS曲线

导入其他软件（如Maya）制作的曲线的3D数据，让粒子沿着它移动。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/Location/NURBS-Curve.mp4"/></div>

#### 相对于摄像机偏移

永远在摄像机的中心显示粒子。
仅对精灵和模型有效。
特效的位置不影响子节点。
