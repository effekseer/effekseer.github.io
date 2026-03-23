# 概要

## 動作環境、必要ランタイム等

### 編集ツール(Windows)

Windows 10以降のPC

DirectX11が必要です。

もし起動しない場合は下記のリンクからD3DCompiler_47.dllをインストールしてください。

[D3DCompiler_47.dll](https://support.microsoft.com/ja-jp/help/4020302/the-net-framework-4-7-installation-is-blocked-on-windows-7-windows-ser)

### 編集ツール(macOS)

macOS Sierra以降のPC


### ランタイム

*   DirectX 9 / 11 / 12
*   Vulkan
*   Metal
*   OpenGL
*   WebGL

## インストール、アンインストール

### Windows

編集ツールは「Tool/」に存在します。レジストリ等の操作は一切しておりません。直接起動するか任意のディレクトリにコピーしてください。  
アンインストールする場合はディレクトリごと削除してください。  

### macOS

Effekseer.dmgを開き、Effekseer.appをApplicationsやホームディレクトリにコピーしてください。
アンインストールする場合はEffekseer.appを削除してください。

### 他

ゲーム中でエフェクトを再生する場合は、ランタイムや各種公式連携（Unity、Unreal Engine、Godot Engine、Cocos2d-x、DXライブラリ等）のパッケージを別途ダウンロードしてください。  

連番画像等の画像としてエフェクトを再生する場合は、[録画](ToolReference/record)を参照してください。

## ライセンス

ランタイムのライセンスはMITライセンスです。

DirectXで描画する場合、[DirectX Tool Kit](https://github.com/microsoft/DirectXTK)に依存します。

Vulkanで描画する場合、[glslang](https://github.com/KhronosGroup/glslang)に依存します。

ツールは様々なライブラリに依存しているため、下記のライセンスを参照してください。

テクスチャ及びエフェクトのデータはCC-0です。ご自由にお使いください。

## 免責事項

本ソフトウェア及びランタイムを使用した際のトラブル等には一切責任を負いかねます。

## 連絡先

effekseer(at)gmail.com

## 著作権表示

### ランタイム

- 通常は [LICENSE](https://github.com/effekseer/Effekseer/blob/master/LICENSE)
- DirectXと併用する場合は [LICENSE_RUNTIME_DIRECTX](https://github.com/effekseer/Effekseer/blob/master/LICENSE_RUNTIME_DIRECTX)
- Vulkanと併用する場合は [LICENSE_RUNTIME_VULKAN](https://github.com/effekseer/Effekseer/blob/master/LICENSE_RUNTIME_VULKAN)

### ツール

- [LICENSE_TOOL](https://github.com/effekseer/Effekseer/blob/master/LICENSE_TOOL)
