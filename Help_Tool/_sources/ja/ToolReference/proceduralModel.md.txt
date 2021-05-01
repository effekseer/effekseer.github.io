# プロシージャルモデル

## 概要

パラメーターの調節のみで3Dモデルを作成する機能です。
通常、3Dモデルを作成するには他のソフトウェアを使用する必要がありますが、簡単な3DモデルのみならEffekseer内で作成できます。

## パラメーター

### 種類

生成するメッシュの種類を指定します。

#### メッシュ

指定されたパラメーターにより、球や円柱の外側のメッシュを生成します。
基本的にある軸に対する回転体を生成します。

##### 範囲(角度)

回転体のうち、生成する範囲を指定します。
通常は円ですが、その一部を切り取った形状にできます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Angle.png
   :align: center
```

##### 分割数

メッシュの分割数です。この値が大きいほど滑らかになります。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Division.png
   :align: center
```

#### 回転角度

メッシュをねじります。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Mesh_Rotated.png
   :align: center
```

#### リボン

メッシュの周囲に巻きついたような形状を生成します。

##### 断面

リボンの断面の形状を指定します。

- 平面

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon.png
   :align: center
```

- 十字

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Cross.png
   :align: center
```

- 点

メッシュとしては表示されないですが、生成位置のパラメーターとして使用できます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Point.png
   :align: center
```

##### 回転角度

リボンが軸に対して回転する角度の量を指定します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Rotation.png
   :align: center
```

##### 太さ

始点と終点のリボンの太さを指定します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Thickness.png
   :align: center
```

##### 角度

リボンの一本当たりの視点から終点までの回転量を指定します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Angle.png
   :align: center
```

##### ノイズ(長さ)

リボンと始点と終点の位置をランダムに移動させます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Length_Noise.png
   :align: center
```

##### 本数

リボンの本数を指定します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Ribbon_Count.png
   :align: center
```

### 形状の種類

実際に生成するモデルのメッシュの形状を指定します。

#### 球

球です。
球のうち、どの領域を指定するかを指定できます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Sphere.png
   :align: center
```

#### コーン

コーンです。
半径や深さを指定できます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Cone.png
   :align: center
```

#### 円柱

円柱です。
円柱の上下の半径は異なる値を指定できます。
深さを0にすることで、円盤状にもできます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Cylinder.png
   :align: center
```

#### スプライン

4点で側面を指定した回転体です。
竜巻やオーラ等の表現に便利です。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Spline.png
   :align: center
```

### 軸

どの方向を中心にメッシュを生成するか指定します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Axis.png
   :align: center
```

### ノイズ

生成された形状をゆがませます。

#### チルトノイズ

メッシュを軸方向の位置ごとに傾かせます。
竜巻等、各部分ごとに斜めになっているメッシュを作成するのに向いています。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Tilt.png
   :align: center
```

#### 波ノイズ

モデルの各位置を波で揺らします。
一定間隔で波で揺れたようなメッシュを生成するのに向いています。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Wave.png
   :align: center
```

#### カールノイズ

モデルの各位置ごとにランダムな方向に歪ませます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/Curl.png
   :align: center
```

### 頂点カラー

各位置ごとの色を指定して、その間の色を補間します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors.png
   :align: center
```

#### 中央領域位置

頂点カラーで指定した中央が、メッシュ上で示す位置を指定します。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors_CenterPosition.png
   :align: center
```

#### 中央領域割合

頂点カラーで指定した中央の色が、どの程度、中央の領域を占めるか指定します。
この値が大きいほど、中央の頂点カラーが占める領域が増えます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors_CenterArea.png
   :align: center
```

#### 頂点カラーノイズ

頂点の色にカラフルなノイズを加えます。

```eval_rst
.. image:: ../../img/Reference/ProceduralModel/VertexColors_Noise.png
   :align: center
```

#### UV

メッシュに使用するUVの領域を指定します。