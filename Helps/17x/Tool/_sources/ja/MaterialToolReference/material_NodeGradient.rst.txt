=====================
マテリアルノード(グラディエント)
=====================

概要
========

ノード一覧
========

SampleGradient
------------------------

グラディエントから、指定した位置の色を参照して出力します。
グラディエントに入力が設定されていない場合、このノードのグラディエントを使用します。

Gradient
------------------------

グラディエントを出力するノードです。

.. image:: ../../img/Reference/Material/node_Gradient.png
   :align: center

GradientParameter
------------------------

外部から設定されたグラディエントを出力します。
このグラディエントはノード単位で共通です。
グラディエントに設定された概要と詳細はEffekseerや外部のツールに表示されます。

グラディエントはEffekseerの描画共通パネルから設定できます。

Effekseerの入力欄を右クリックして、リセットを押すことで、マテリアルに設定された値を入力することができます。

.. image:: ../../img/Reference/Material/node_GradientParameter.png
   :align: center

.. image:: ../../img/Reference/Material/node_GradientParameter_External.png
   :align: center

