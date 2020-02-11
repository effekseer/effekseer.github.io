# ツール・リファレンス

## 概要

### ツール

このツールは、エフェクトの編集結果を表示するビュワー部分と、パラメーターを編集するための複数のウインドウで構成されています。 各ウインドウのパラメーターを編集することで、エフェクトを生成したり、見た目を変更したりできます。 各ウインドウは、ドラッグアンドドロップにより、配置を変更したりタブに変更したりすることができます。 「メニューバー->ウインドウ」を選択することで、ウインドウを選択したり、初期配置では配置されていないウインドウを表示したりできます。 また、全てのウインドウを初期配置に戻すことができます。

### エフェクト

このツールでは、ノードを編集することでエフェクトを生成します。ノード同士は親子関係を持っており、子は親の影響を受けます。 親子関係を利用することで複雑なエフェクトを生成できます。

例を用いて親子関係について説明します。この例ではノード1の子にノード2が存在し、ノード2の子にノード3が存在します。 まず、ノード1からエフェクト1が発生します。数フレーム後、ノード1から発生したエフェクトから数個のエフェクト2がエフェクト1から相対的な位置に発生します。更に数フレーム後、ノード2から発生したエフェクトからエフェクト3が発生します。これは下図に示されています。このようにして、ノードにエフェクトの振る舞いと親子関係を記述することにより、様々なエフェクトを表現することができます。 なお、このツールでは、「ノード」のパラメーターを元に生成されたエフェクトの1つあたりを「パーティクル」と呼びます。

```eval_rst
.. image:: ../../img/Reference/overview_ja.png
   :align: center
```

### 操作方法

#### プレビュー画面

<div align="center">
<table border=1>
<tr>
<td>回転</td>
<td>マウスの右ボタンを押しながら、マウスを移動</td>
</tr>
<tr>
<td>平行移動</td>
<td>マウスホイールを押しながら、マウスを移動</td>
</tr>
<tr>
<td>拡大</td>
<td>マウスホイールを回転</td>
</tr>
</table>
</div>

#### 値の入力方法

値は入力欄をマウスで左クリックするとキーボードから入力できるようになります。

左クリックで入力欄をドラッグすると、値を徐々に変更することができます。

```eval_rst
.. image:: ../../img/Reference/Overview/input_value.png
   :align: center
```

#### 色の入力方法

色はテキストボックスに加えて、色の欄をマウスで左クリックすると入力できるようになります。

```eval_rst
.. image:: ../../img/Reference/Overview/input_color_basic.png
   :align: center
```

左クリックで色の欄をドラッグすると、他の色の欄に値をコピーできます。

```eval_rst
.. image:: ../../img/Reference/Overview/input_color.png
   :align: center
```

### ファイル形式

エフェクトはefkefcという拡張子のファイルに保存されます。
このファイルは、ツールで編集することも、ゲーム中で再生することもできます。
1.4まではefkprojとefkがありましたが、現在、efkprojとefkは読み込み専用です。

## 各ウインドウ

```eval_rst

.. toctree::
    :maxdepth: 1

    common
    location
    locationAbs
    locationGene
    rotation
    scale
    rendererCommon
    rendererSprite
    rendererRibbon
    rendererRing
    rendererModel
    rendererTrack
    fcurve
    sound
    network
    culling
    behavior
    record
    fileviewer
    global
    environment
    options
    depth
    dynamicParameter
```

## コマンドライン

コマンドラインからEffekseerを起動するときに、引数を追加することでEffekseerの挙動を変更できます。 例えば、「.efkproj」のファイルを「.efk」にEffekseerのGUIを起動せずに変換できます。 これとスクリプトを組み合わせることで、任意のフォルダのエフェクトのファイルを一括で変換できます。

```eval_rst

.. list-table:: コマンドライン
   :widths: 20 70

   * - -cui
     - CUIモードで起動
   * - -in \*
     - \*を開いて起動
   * - -o \*
     - \*に名前をつけて保存
   * - -e \*
     - \*に標準形式で出力
   * - -m \*
     - 標準形式で出力するときのエフェクトの拡大率を\*に設定
```


