# 描画共通(高度)

## 概要

描画共通で指定できるパラメーターよりも、より複雑なパラメーターを指定することができます。

## パラメーター

### アルファ画像

設定された画像の赤色の範囲のみのカラー画像を表示します。
例えば、アルファテクスチャに星型の画像を設定すると、その星型の領域のカラー画像が表示されます。
この画像は個別にUVを設定できます。
そのため、別々のUVを設定することで、スクロールやアニメーションさせることで複雑な見た目を表現できます。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/alpha.png
   :align: center
```

### UV歪み画像

設定された画像により、カラー画像を歪ませます。
歪み画像は色が(127,127,255)の場合、歪まず、その色から離れるにしたがって歪みが大きくなります。
この画像は個別にUVを設定できます。
そのため、別々のUVを設定することで、スクロールやアニメーションさせることで複雑な見た目を表現できます。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/dist.png
   :align: center
```

### アルファカットオフ

アルファ値が指定された値より低い部分が描画されなくなります。
それにより、トゥーン調のエフェクトを表現しやすくなります。

```eval_rst

|pic_alphacutoff_none| |pic_alphacutoff|

.. |pic_alphacutoff_none| image:: ../../img/Reference/BasicRenderAd/alphacutoff_none.png
   :scale: 60%

.. |pic_alphacutoff| image:: ../../img/Reference/BasicRenderAd/alphacutoff.png
   :scale: 60%

```

アルファ値が低い領域をエッジと判定し、そのエッジのみの色を変更します。
トゥーン調のエフェクトを表現しやすくなります。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/alphacutoff_edge.png
   :align: center
```

### フォールオフ

モデルの視点方向から傾いている部分の色を指定します。
これにより、モデルの正面方向は透明で端だけ不透明、といった表現をできます。



```eval_rst

|pic_falloff_none| |pic_falloff|

.. |pic_falloff_none| image:: ../../img/Reference/BasicRenderAd/falloff_none.png
   :scale: 60%

.. |pic_falloff| image:: ../../img/Reference/BasicRenderAd/falloff_add.png
   :scale: 60%

```

減算や乗算もできます。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/falloff_sub.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/falloff_mul.png
   :align: center
```


### ソフトパーティクル

背景に近い部分の透明度を下げます。
それにより、背景とパーティクルの境目の不自然さを抑えることができます。
この機能は、Effekseerを使用する先の環境がソフトパーティクルに対応している必要があります。

```eval_rst

|pic_softparticle_far_none| |pic_softparticle_far|

.. |pic_softparticle_far_none| image:: ../../img/Reference/BasicRenderAd/softparticle_far_none.png
   :scale: 60%

.. |pic_softparticle_far| image:: ../../img/Reference/BasicRenderAd/softparticle_far.png
   :scale: 60%

```

カメラに近い部分を透明にすることもできます。

```eval_rst

|pic_softparticle_near_none| |pic_softparticle_near|

.. |pic_softparticle_near_none| image:: ../../img/Reference/BasicRenderAd/softparticle_far_none.png
   :scale: 60%

.. |pic_softparticle_near| image:: ../../img/Reference/BasicRenderAd/softparticle_near.png
   :scale: 60%

```

### ブレンド画像

設定された画像をカラー画像に加算したり、減算したりします。
2つのパーティクルをブレンドによって重ねるのと違って、画像同士で加算、減算した結果をパーティクルの画像として使用します。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend.png
   :align: center
```

加算、乗算、減算もできます。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_add.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_sub.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_mul.png
   :align: center
```

### ブレンドアルファ画像

ブレンド画像の一部を使用するためのアルファ画像です。
カラー画像に対するブレンド画像と挙動は同じです。
違いは対象とする画像のみです。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_alpha.png
   :align: center
```

### ブレンドUV歪み画像

ブレンド画像を歪ませるための画像です。
カラー画像に対する歪み画像と挙動は同じです。
違いは対象とする画像のみです。

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_dist.png
   :align: center
```
