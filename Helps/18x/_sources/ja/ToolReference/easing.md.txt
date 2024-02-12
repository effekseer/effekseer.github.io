# イージング

イージングとは、2点、もしくは3点を指定してその間を補間して値が変化する機能です。
Effekseerでは、様々な部分にイージングを適用できます。

イージングには様々な種類があり、ここではそれらについて説明します。

## イージングの種類

イージングには様々な種類があります。
例えば、急に変化し始めて、最後はゆっくり変化するといった挙動です。

このページの最後に全てのイージングについてグラフにして掲載しています。

## 中間点

通常のイージングは2点ですが、中間地点を追加することもできます。
値は中間地点を必ず経由して変化するようになります。

## ランダムグループ

Effekseerのイージングは開始地点、終了地点ともにランダムを指定できます。
全ての値がばらばらである場合は問題ないですが、XYはランダムではあるが同じ値で、Zだけ異なる値にしたいということがあります。
例えば、円柱の3Dモデルをビームとして使用する場合、XYのランダムは円の形状を保ちたいため、同じである必要があります。

そのような場合にグループという機能があります。

グループの番号が同じである場合、ランダムの挙動が同じになります。
それにより、XYは等しいがZは異なるランダムを再現できます。

## 種類の独立

XYZそれぞれにイージングの種類を設定できるようになります。

## イージングの種類一覧

- EaseInBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInBack.png
   :align: center
```

- EaseInBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInBounce.png
   :align: center
```

- EaseInCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInCubic.png
   :align: center
```

- EaseInOutBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutBack.png
   :align: center
```

- EaseInOutBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutBounce.png
   :align: center
```

- EaseInOutCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutCubic.png
   :align: center
```

- EaseInOutQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuadratic.png
   :align: center
```

- EaseInOutQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuartic.png
   :align: center
```

- EaseInOutQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuintic.png
   :align: center
```

- EaseInQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuadratic.png
   :align: center
```

- EaseInQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuartic.png
   :align: center
```

- EaseInQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuintic.png
   :align: center
```

- EaseOutBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutBack.png
   :align: center
```

- EaseOutBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutBounce.png
   :align: center
```

- EaseOutCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutCubic.png
   :align: center
```

- EaseOutQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuadratic.png
   :align: center
```

- EaseOutQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuartic.png
   :align: center
```

- EaseOutQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuintic.png
   :align: center
```