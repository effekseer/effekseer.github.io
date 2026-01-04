# 振る舞い

## 概要

エディタ上でのエフェクトの表示方法を設定します。複数表示させるなど、ゲーム中に近い表現を再現できます。

<iframe src='../../Effects/viewer_ja.html#References/Behavior/Original.efk'></iframe>

## パラメーター

### 初期位置

1フレーム目のエフェクトのルートのパーティクルの位置を指定します。

<iframe src='../../Effects/viewer_ja.html#References/Behavior/InitialPosition.efk'></iframe>

### 移動速度

エフェクトのルートのパーティクルの移動速度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Behavior/speed.efkefc'></iframe>

### 初期角度

1フレーム目のエフェクトのルートのパーティクルの角度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Behavior/angle.efkefc'></iframe>

### 回転速度

エフェクトのルートのパーティクルの回転速度を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Behavior/angular_speed.efkefc'></iframe>

### 初期拡大率

1フレーム目のエフェクトのルートのパーティクルの初期の拡大率を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Behavior/behavior_scale.efkefc'></iframe>

### 拡大速度

エフェクトのルートのパーティクルの拡大速度を指定します。

### 破棄フレーム

エフェクトの表示中にルートのパーティクルの削除する時間(フレーム単位)を指定します。

### 個数(X方向)

エフェクトをX方向に並べて表示する時の個数を指定します。

### 個数(Y方向)

エフェクトをY方向に並べて表示する時の個数を指定します。

### 個数(Z方向)

エフェクトをZ方向に並べて表示する時の個数を指定します。

### 距離

エフェクトを複数表示する時のエフェクト間の距離を指定します。
<iframe src='../../Effects/viewer_ja.html#References/Behavior/count_set.efkefc'></iframe>

### 再生速度

エフェクトの再生速度を指定します。

### ターゲット位置

エフェクトがターゲットに集合する時のターゲットの座標を指定します。

### 外部モデル

生成元として使用する外部モデルを登録します。
各モデルはファイルと、位置/回転/拡大のオフセットを指定できます。
ツールで再生する場合はここで登録したモデルが使用されますが、実行環境では再生時に外部モデルを指定します。
