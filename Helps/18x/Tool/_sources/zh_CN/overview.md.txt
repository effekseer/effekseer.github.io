# 概要

## 操作环境和所需的运行时

### 编辑工具（Windows）

Windows 10 或之后的版本

需要 DirectX 11。

如果程序不能运行，请通过以下链接安装D3DCompiler_47.dll。

[D3DCompiler_47.dll](https://support.microsoft.com/en-us/help/4020302/the-net-framework-4-7-installation-is-blocked-on-windows-7-windows-ser)

### 编辑工具（macOS）

macOS Sierra或之后的版本


### 运行时

*   DirectX 9 / 11 / 12
*   Vulkan
*   Metal
*   OpenGL
*   WebGL

## 安装/卸载

### Windows

编辑器整个位于“Tool/”文件夹下。我们未对注册表和其他东西做任何修改。你可以直接启动程序，或将其复制到任何文件夹。
卸载的方式就是删除文件夹。

### macOS

打开Effekseer.dmg并将Effekseer.app复制到Applications或Home文件夹。
卸载Effekseer的方式是删除Effekseer.app。

### 其他

要在游戏中播放特效，请单独下载运行时和各类官方集成包（Unity、Unreal Engine、Godot Engine、Cocos2d-x、DX库等）。

此外，如果只想将特效导出为图片、精灵表单（Sprite Sheet）或视频，参考[录像](ToolReference/record)。

## 许可证

运行时以MIT许可证发布。

使用DirectX时，依赖[DirectX Tool Kit](https://github.com/microsoft/DirectXTK)。

使用Vulkan时，依赖[glslang](https://github.com/KhronosGroup/glslang)。

具体请参考下面的许可证。

纹理和特效数据以CC-0协议发布。你可以任意使用。

## 免责声明

对于使用本软件和运行时可能出现的任何问题，我们不承担任何责任。

## 联系方式

effekseer(at)gmail.com

## 版权声明

### 运行时

- 通常使用时: [LICENSE](https://github.com/effekseer/Effekseer/blob/master/LICENSE)
- 与 DirectX 併用时: [LICENSE_RUNTIME_DIRECTX](https://github.com/effekseer/Effekseer/blob/master/LICENSE_RUNTIME_DIRECTX)
- 与 Vulkan 併用时: [LICENSE_RUNTIME_VULKAN](https://github.com/effekseer/Effekseer/blob/master/LICENSE_RUNTIME_VULKAN)

### 编辑器

- [LICENSE_TOOL](https://github.com/effekseer/Effekseer/blob/master/LICENSE_TOOL)
