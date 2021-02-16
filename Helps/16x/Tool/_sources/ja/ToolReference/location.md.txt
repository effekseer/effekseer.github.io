# 位置

## 概要

ノードの位置に関するパラメーターの中でも、特に親のパーティクルに影響される位置に関するパラメーターを設定します。

## パラメーター

### 位置

パーティクルの位置を指定します。ここで指定するのは、親のパーティクルに対する相対的な位置です。「共通」による設定で、 親からの影響を受けなくした場合には、絶対的な位置を指定します。

<div align="center">
<img src="../../img/Tutorial/02_position_ja.png">
<p>「位置」ウインドウ</p>
</div>

#### 位置

固定された位置にパーティクルを配置します。
<iframe src='../../Effects/viewer_ja.html#References/Position/setposition.efkefc' class='effect'></iframe>

#### 位置・速度・加速度

パーティクルの位置・速度・加速度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Position/movingposition.efkefc' class='effect'></iframe>

#### イージング

パーティクルの生成時の位置と終了時の位置を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Position/easing.efkefc' class='effect'></iframe>

#### Fカーブ

Fカーブを使用します。
<iframe src='../../Effects/viewer_ja.html#References/Position/f_curve.efkefc' class='effect'></iframe>

#### NURBSカーブ

Maya等、他のソフトウェアで作成したカーブの3Dデータを読み込み、それに沿ってパーティクルを動かします。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/Location/NURBS-Curve.mp4"/></div>

#### カメラオフセット

常にカメラの中央にパーティクルを表示します。
スプライトやモデルのみ有効です。
子に対して移動の影響が適用されません。
