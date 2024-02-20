
# 力場(ローカル)

## 概要

パーティクルの外部から力を与えるような効果を設定します。

## パラメーター
<div align="center">
<img src="../../img/Reference/Atraction/panel_ja.png">
<p>「力場(ローカル)」ウインドウ</p>
</div>

## 力場

最大4種類の力場を設定できます。

## 種類

### なし

設定しません。

### 力

指定された位置から外側に向かって力を与えます。
指定された位置から離れると力が減衰するようにもできます。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Force.mp4"/></div>

### 風

指定された方向に向かって力を与えます。
方向は回転により変更できます。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Wind.mp4"/></div>

### 竜巻

指定された方向を軸に回転させる力を与えます。
軸の方向は回転により変更できます。

移動速度は回転速度が外側でも同じになるように指定するか、位置に限らず移動速度が一定になるようにするか、を指定できます。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Vortex.mp4"/></div>

### 乱流

乱流のような力を加えます。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Turbulence.mp4"/></div>

#### 種類

単純か複雑かを指定できます。
複雑なほうが見栄えはいいですが、処理が重くなります。

#### ランダムシード

数値に応じて乱流の流れ方が変わります。

#### 領域の大きさ

値を大きくすると乱流の幅が大きくなります。

#### 強さ

乱流がパーティクルに与える力の強さです。

#### 複雑さ

値を大きくすると乱流が複雑になります。ただし、処理が重くなります。

### 抵抗

移動を抑制させるような力を与えます。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Drag.mp4"/></div>

### 重力

ある方向に加速度をかけます。下とは限らず、上や右にも適用することができます。
この方向は親パーティクルの姿勢の影響を受けません。

<iframe src='../../Effects/viewer_ja.html#References/Attraction_Forces/gravity.efkefc'></iframe>

### 引力

パーティクルが「振る舞い」の「ターゲット位置」に指定した位置に向かうように移動します。

![](../../img/Reference/locationAbs_attraction.gif)

#### 引力

1フレームにターゲット位置に向けて加速する力です。

#### 制御

1フレームにおいて移動方向をターゲット方向に補正する割合です。0.00～1.00の値をとります。

#### 最小範囲

引力の減衰開始距離です。

#### 最大範囲

引力の減衰終了距離です。 パーティクルの位置が0～最少範囲にある場合、引力100%になり、 最大範囲より遠くにある場合、引力0%になり、 最小範囲から最大範囲の間にある場合、線形に減衰します。


## 位置

力場の中心の位置を指定します。
一部の力場の設定に影響があります。

## 回転

力場の角度を指定します。
一部の力場の設定に影響があります。

## 減衰

この範囲の外では、力場の影響が減衰します。
範囲の指定方法には複数種類あります。

### 球

中心から近づいたり、離れたりすると力場の影響を減資させるようにします。
減衰力が大きいと、外側に行くにしたがって、より力場が減衰するようになります。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/FallOff_Sphere.mp4"/></div>

### 円柱

円柱の中心の軸から外側に近づいたり離れたりすると、力場の影響を減衰させるようにします。
減衰力が大きいと、外側に行くにしたがって、より力場が減衰するようになります。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/FallOff_Column.mp4"/></div>

### コーン

球の一部を円錐状に切り取った形状です。
コーンの外側に近づいたり、離れたりすると、力場が減衰するようになります。
減衰力が大きいと、最大角度に近づくにしたがって、より力場が減衰するようになります。

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/FallOff_Cone.mp4"/></div>
