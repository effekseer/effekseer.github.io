================================
材质节点（梯度）
================================

概述
================================

节点列表
================================

采样梯度
------------------------

根据输入的梯度将输入的Alpha值映射为颜色。
如果Gradient未连接输入值，则使用这个节点的梯度。

梯度
------------------------

输出一个梯度。

.. image:: ../../img/Reference/Material/node_Gradient.png
   :align: center

梯度参数
------------------------

输出外部设置的梯度。
梯度对于每个节点都相同。
梯度中设置的概要和详细会在Effekseer和外部工具中显示。

梯度参数可以在Effekseer的基础渲染设置面板中设置。

右键Effekseer中的输入框并点击弹出的重置按钮，可以输入材质中设置的默认值。

.. image:: ../../img/Reference/Material/node_GradientParameter.png
   :align: center

.. image:: ../../img/Reference/Material/node_GradientParameter_External.png
   :align: center

