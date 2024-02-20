
# 回転

## 概要

ノードの回転に関するパラメーターを設定します。

## パラメーター
<div align="center">
<img src="../../img/Tutorial/04_rotation_ja.png">
<p>「回転」ウインドウ</p>
</div>

### 回転

パーティクルの角度を指定します。ここで指定するのは、親のパーティクルに対する相対角度です。「共通」による設定で、 親からの影響を受けなくした場合には、絶対的な角度を指定します。

#### 角度

パーティクルの角度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Rotation/rotation.efkefc' class='effect'></iframe>

#### 角度・速度・加速度

パーティクルの角度・速度・加速度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Rotation/rotation_pva.efkefc' class='effect'></iframe>

#### イージング

パーティクルの生成時の角度と終了時の角度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Rotation/rotation_easing.efkefc' class='effect'></iframe>

#### 角度(Fカーブ)

Fカーブを使用します。
<iframe src='../../Effects/viewer_ja.html#References/Rotation/rotation_f_curve.efkefc' class='effect'></iframe>

#### 視点方向に回転

Z軸がカメラの方向を向くように回転します。
カメラの位置を使用するので、複数のカメラが存在する場合は正しく動作しません。

#### 移動方向に回転

指定した軸がパーティクルの移動方向を向くように回転します。
