# 01. マテリアル入門

## 概要

今まで、描画方法では画像やパラメーターを設定し、簡単な描画を行うのみでした。
しかし、これだと画像自体が歪んだり、特定の領域を加算するといった複雑な描画ができませんでした。

それらの複雑な描画を実現するために、Effekseerにはマテリアルがあります。
マテリアルを使用してパーティクルの描画の仕方を指定できます。
マテリアルはマテリアルエディタで作成できます。

ここでは、マテリアルを作成して複雑な描画を実現してみましょう。

<div align="center">
<iframe src='../../Effects/viewer_ja.html#Tutorials/Mat_01/Sample07.efkefc'></iframe>
<p>本章で作成するエフェクト</p>
</div>

すでに一部のファイルは用意しています。
下記のリンクからダウンロードしてください。

<a href="../../Effects/Tutorials/Mat_01_01.zip">ダウンロード</a>

開くと、単純な球のモデルが描画されていることがわかります。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state1.png">
</div>

マテリアルを作成するために、描画共通パネルのマテリアルをファイルに変更します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/material_create_ja.png">
</div>

生成ボタンを押します。そして、マテリアルを新規作成するダイアログが表示されます。
マテリアルを保存し終わると、マテリアルエディタが起動します。

最初は出力ノードのみ存在します。
この、出力ノードに接続された値がパーティクルに描画されます。

<div align="center">
<img src="../../img/Tutorial/Mat_01/initial_ja.png">
</div>

マテリアルエディタでは、このノードを繋げていって描画の計算式を指定します。
その計算の結果がパーティクルとして表示されます。
最初は難しく感じるとは思いますが、少しずつ編集していきましょう。

一番簡単な構成は、定数3ノードを出力ノードに繋げる構成です。

右クリックを押して、定数3ノードを追加します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_constant3_ja.png">
</div>

定数3ノードと出力ノードのEmissiveと接続します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_ja.png">
</div>

そして、定数3ノードを左クリックし、画面の左の入力欄から数値を入力します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/input_constant3.png">
</div>

そうすると、その数値に応じて球の色が変化することがわかります。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state2.png">
</div>

定数3ノードを追加するとき、定数1～4ノードまで存在したのが見えましたでしょうか？
ノード間を伝わる値には複数の種類があります。

数値1から数値4という、1～4つの数値で構成された値の種類であることが多いです。
また、画像であることもあります。

## 画像の表示

画像は```画像参照```ノードを使用すると表示できます。

右クリックで、```画像参照```ノードを追加します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_GridImage_ja.png">
</div>

画面の左の入力欄から画像を設定します。
今回は、あらかじめ用意された ```Textures/Grid01.png``` を指定します。

定数3ノードの代わりに```画像参照```ノードのRGBを接続します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_GridImage_ja.png">
</div>

<div align="center">
<img src="../../img/Tutorial/Mat_01/state1.png">
</div>

画像は表示されましたが、透明な部分が透明になっていません。

そこで```画像参照```ノードのAから出力ノードのOpacityに接続します。
これは、画像の透明度をマテリアルの透明度に接続しています。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_alpha_ja.png">
</div>

そうすると、画像が表示されました。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state3.png">
</div>

## 画像の表示領域の変更

今までは、単純にモデルに画像を表示した場合と挙動が同じでした。
しかし、マテリアルを使うと様々な表現ができます。
その準備として、UV座標の位置を変更します。

```画像参照```ノードのUVは表示に使用する画像の画素の位置を指している値です。
それでは、このUVを代えてみましょう。

```UV座標```ノードを追加します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_uv_ja.png">
</div>

そして、```画像参照```ノードのUVに接続します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_uv_ja.png">
</div>

何も変わりません。なぜかというと、```UV座標```ノードはモデルやパーティクルのUVの値をそのまま出力しているからです。

このUVの値を変更して、画像の表示する領域を移動させてみましょう。

```足し算```ノードと```定数2```ノードを追加します。
そして、```定数2```ノードと```UV座標```ノードを```足し算```ノードに接続します。
両方とも値の種類は数値2なので接続できます。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_add_ja.png">
</div>

そして、```定数2```ノードの値を変更します。そうすると、表示位置がずれることがわかります。

<div align="center">
<img src="../../img/Tutorial/Mat_01/change_constant2_ja.png">
</div>

<div align="center">
<img src="../../img/Tutorial/Mat_01/state4.png">
</div>

## 画像の歪み

先ほどは画像の表示領域をずらしただけですが、今度は画像を歪ませましょう。

先ほどの```定数2```ノードの代わりに、画像を使用します。
画像には、あらかじめ用意された ```Textures/Distortion01.png``` を指定します。

```画像参照```ノードを追加し、画像を設定します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_DistortionImage_ja.png">
</div>

画像の値の種類は数値3なので、```要素抽出```ノードを使います。

```要素抽出```ノードは、要素の一部を取り出します。
ここでは、最初の2つの値を使用するので、RとGにチェックを入れます。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_mask_ja.png">
</div>

そして、```要素抽出```ノードを```足し算```ノードに接続します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_mask_ja.png">
</div>

凄い歪みました。しかし、こんなに歪んでほしくはありません。

<div align="center">
<img src="../../img/Tutorial/Mat_01/state5.png">
</div>

```掛け算```ノードを使用して小さくします。
```掛け算```ノードを追加します。

そして、```掛け算```ノードに```要素抽出```ノードを接続します。
```掛け算```ノードの値を小さくします。

<div align="center">
<img src="../../img/Tutorial/Mat_01/add_multiply_ja.png">
</div>

そうすると、程よく歪みます。

<iframe src='../../Effects/viewer_ja.html#Tutorials/Mat_01/Sample05.efkefc'></iframe>

## 歪みの移動

止まったままでは地味なので、歪みを移動させてみましょう。
```移動UV座標```ノードを追加します。
```移動UV座標```ノードは時間経過で移動するUVの値を出力します。
これを、```画像参照```ノードに接続します。
パラメーターも少し変更します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/connect_movinguv_ja.png">
</div>

歪みが移動することがわかります。

<iframe src='../../Effects/viewer_ja.html#Tutorials/Mat_01/Sample06.efkefc'></iframe>

## 着色

最後に、着色してみましょう。

```掛け算```ノードを追加します。

画像を出力している```画像参照```ノードと最初に追加した固定3ノードを```掛け算```ノードに接続します。

そして、それをEmissiveに接続します。

<div align="center">
<img src="../../img/Tutorial/Mat_01/colorlize_ja.png">
</div>

色同士が掛け合わさるので、色が付きました。

<iframe src='../../Effects/viewer_ja.html#Tutorials/Mat_01/Sample07.efkefc'></iframe>

最後に、本章で作成されたエフェクトをダウンロードできるようにしてみました。

<a href="../../Effects/Tutorials/Mat_01_02.zip">ダウンロード</a>

## サンプル

今回はマテリアルの一例を紹介しましたが、様々なことができます。
Effeksseerのサンプルにマテリアルが多数保存されているので、それらを見るのがいいでしょう。

## まとめ

本章ではマテリアルの基本を説明しました。
マテリアルを使用することにより、表現の幅が大きく広がります。