# 旋转

## 概述

设置与节点的旋转相关的参数。

## Parameters
<div align="center">
<img src="../../img/Tutorial/04_rotation_en.png">
<p>“旋转”窗口</p>
</div>

### 旋转

设置粒子的旋转角度。这将影响粒子相对于其父粒子的角度。如果没有父粒子，或者基础设置窗口中设置了不继承角度，它将表示绝对角度。

#### 固定角度

设置粒子的角度。
<iframe src='../../Effects/viewer_zh_CN.html#References/Rotation/rotation.efkefc' class='effect'></iframe>

#### 角度・速度・加速度

设置粒子的初始角度、角速度和角加速度。
<iframe src='../../Effects/viewer_zh_CN.html#References/Rotation/rotation_pva.efkefc' class='effect'></iframe>

#### 缓动

设置粒子的初始角度和粒子生命周期结束时的最终角度，以及之间的过渡。
<iframe src='../../Effects/viewer_zh_CN.html#References/Rotation/rotation_easing.efkefc' class='effect'></iframe>

#### F曲线

使用F曲线设置粒子整个生命周期内旋转角度。
<iframe src='../../Effects/viewer_zh_CN.html#References/Rotation/rotation_f_curve.efkefc' class='effect'></iframe>

#### 旋转至摄像机方向

旋转使Z轴指向摄像机。
因为它使用的相机的位置，所以有多个相机时，它将无法正常工作。