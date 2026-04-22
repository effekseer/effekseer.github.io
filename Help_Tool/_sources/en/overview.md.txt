# Overview

## Operating Environment, Required Runtimes, etc.

### Editing Tool(Windows)

Windows 10 or later

DirectX 11 is required.

If this application doesn't run, please install D3DCompiler_47.dll from a bellow link.

[D3DCompiler_47.dll](https://support.microsoft.com/en-us/help/4020302/the-net-framework-4-7-installation-is-blocked-on-windows-7-windows-ser)

### Editing Tool(macOS)

macOS 10.12 Sierra or later

### Runtime

*   DirectX9, DirectX11, DirectX12, Metal, Vulkan, OpenGL
*   WebGL

## Installation/Uninstallation

### Windows

The editing tool exists entirely within the "Tool/" directory. We do not modify the registry, or anything else at all. You can start the program directly, or copy it to any directory.  
To uninstall, just delete each directory.

### macOS

Open Effekseer.dmg and copy the Effekseer.app to your Applications or Home directory.
If you want to uninstall Effekseer, please delete Effekseer.app.

### Others

To play effects in your game, download separate packages such as the runtime and official integrations (Unity, Unreal Engine, Godot Engine, Cocos2d-x, DX Library, etc.).  

Alternatively, if you just want to use the effect as an exported image, sprite sheet, or video, refer to the [Recording](ToolReference/record) reference guide.

## License

The runtime license is the MIT license.

In the case of DirectX, it depends on [DirectX Tool Kit](https://github.com/microsoft/DirectXTK).

In the case of Vulkan, it depends on [glslang](https://github.com/KhronosGroup/glslang).

Please refer to the license below as the tool depends on various libraries.

The data for textures and effects is CC-0. Please feel free to use them as you wish.

## Disclaimer

We can not assume any responsibility for troubles etc. when using this software and runtime.

## Contact information

effekseer(at)gmail.com

## Copyright notice

### Runtime

- Standard: [LICENSE](https://github.com/effekseer/Effekseer/blob/master/LICENSE)
- When used with DirectX: [LICENSE_RUNTIME_DIRECTX](https://github.com/effekseer/Effekseer/blob/master/LICENSE_RUNTIME_DIRECTX)
- When used with Vulkan: [LICENSE_RUNTIME_VULKAN](https://github.com/effekseer/Effekseer/blob/master/LICENSE_RUNTIME_VULKAN)

### Tool

- [LICENSE_TOOL](https://github.com/effekseer/Effekseer/blob/master/LICENSE_TOOL)
