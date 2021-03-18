# Release Notes

## 1.6

[Release note](ReleaseNotes/160)

## 1.53c (21/03/17)

### Common

Fixed a bug where Effekseer crashes when 1.6 files are loaded.

### Editor

Replaced docking panel.

### Runtime

Fixed a bug where effects sometimes blinks with culling

## 1.53b (21/03/08)

## Unity

Fixed a bug that prevented images from loading when a same image asset was specified in multiple paths in effect assets.

### WebGL

Significantly improved a performance.

## 1.53a (20/12/13)

### Common

- Removed glTF extension (because it was unmaintained and not implemented perfectly)
- Fixed a bug where UV2 nodes were not working properly in OpenGL materials.
- Fixed a bug where effects are not displayed with custom data 1 and 2 were set to all RGBA in OpenGL ES2.0 materials.
- Fixed a bug where effects are not displayed  lighting in Metal materials.

### Runtime

- Added bat file to output x86 and x64.
- Disabled OpenAL samples on Windows.

### Unity

- Added the feature to draw effects in PostProcessingStack.
- Fixed a bug where materials were disabled after upgrading Unity version.
- Changed Mac binary to Hardened Runtime.

### Cocos2d-x

- Fixed a bug where images were not drawn correctly when mipmap was enabled in Metal environment.

### UnrealEngine4

- 4.26 support.
- Changed to suppress the generation of extra materials.

## 1.52n (20/10/23)

### Cmmon

- Fixed a bug where scaling was not applied to the cull size.
- Fixed a bug where material normals was incorrect.

### Tool

- Fixed a bug where the original image of the recording behaved strangely
- Changed to show a warning when connecting the normal and the normals in material.

### Runtime

- Fixed a bug that caused a crash when drawing a lot on DirectX12.

### WebGL

Fixed a bug where PremultiplyAlpha was not disabled.

## 1.52m (20/08/28)

### Common

- Fixed a bug that caused a crash when creating too many particles that exceeded the amount of memory allocated under certain conditions. 

### UnrealEngine4

- Fixed a bug that prevented the Clamp node from working properly.
- Fixed a bug that caused a delay in drawing one frame.
- Fixed a bug that could cause incorrect rotation.

### Runtime

- Refreshed samples of culling
- Fixed a bug where culling was not working properly.

## 1.52l（20/08/18）

## Tools, Unity, Runtime, DXLib

- Fixed a bug that caused a crash when playing an effect without setting a model file when a model was selected for rendering.

## 1.52k（20/08/16）

### Common

- Fixed a bug where the effect is not displayed when render method is ribbons, the number of divisions is more than 2, the magnification is 0 for one particle.
- Moving the timing of sending the model to the GPU before rendering (to make it easier to process in the rendering thread)

### Tools

- Fixed omissions in the English version.
- Fixed a bug where the app crashed when you don't have file permissions.
- Fixed a bug that prevented creation of shader cache (x86 only)

### Unity

- Fixed a bug where effects would not play when switching emitters after playing an emitter in the Scene window.
- Fixed a bug that prevented material compilation if the material contains a reserved word
- Supports material wrapping and repeats

### UnrealEngine 4

- Fixed a bug where R and G of Texture Sample node were switched.
- Fixed a bug where a material compile error would occur under certain circumstances
- Fixed a bug where lighting parameters were not supported
- Fixed a bug that prevented re-importation.
- Fixed a bug where images of normals could not be loaded with materials.
- Supports material wrapping and repeats

### Runtime

- Fixed a bug that caused network reloads to behave strangely with multiple Manager classes

### DX Library.

- Fixed a bug that caused network reloads to behave strangely

### Cocos2d-x

- Changed to show a warning when non-squared images are loaded.

- Fixed a bug that did not support Android distortion.

### WebGL

- Change image.crossOrigin to use-credentials

## 1.52j（20/08/02）

Fixed a bug where Bloom was behaving strangely in certain environments.

Fixed a bug where the memory locator alignment could go wrong in x86 environments.

Fixed a bug where noise could occur in MSAA environments.

## 1.52i (20/07/31)

Fixed a bug where opening a file was disabled with certain operation (Mac)

Fixed a bug where Effeksee cannot run in environments that did not support MSAA (Windows)

Fixed a bug where ``` Is scaling invalid with Z-Offset ``` behaved strangely.

Fixed a bug where dynamic parameters giving Vector as an argument behaved strangely.

Fixed a bug where the F-curve of UV behaved strangely.

Fixed a bug where the network reloading function was behaving strangely.

Fixed a bug that caused loading problems when saving a file with a default value of 0 and the same value as the default in custom data.

Fixed a bug where the memory locator alignment could go wrong in x86 environments.

## 1.52h（20/07/09）

Unify drawing behavior due to opacity on all platforms

Effekseer now can remove redundant nodes when effects are exported

Fixed a bug that caused a crash when executing UNDO without displaying the node tree.

Fixed a bug that occurred when the value of a material's step node was negative.

Fixed a bug that recording with high frequency is wrong

Fixed a bug that caused a crash when much particles are spawn

## 1.52g（20/06/09）

Fixed a bug that pngs with interlacing could not be displayed correctly

Fixed a bug that caused a crash when displaying a new effect after playing a lot of effect.

Fixed a bug that caused a crash when saving camera settings.

Fixed a bug where batch processing was not working.

(Runtime) Fixed a bug that it crashs if you end up not finding a format when extending a file reading

## 1.52f（20/05/13）

Fixed a bug that parameters of turbulence is not saved

Added an error message when it fails to save a file

## 1.52e（20/05/07）

Make delete button enabled in F-Curve on Mac

Fix a bug that removing points with double click was disabled in F-Curve.

Improve behavior of drag in F-Curve.

## 1.52d（20/05/06）

Fixed a bug where the magnification of recorded images is wrong.

## 1.52c(Mac Only)（20/05/06）

Fixed a crash on Mac when saving a file after importing new image .

## 1.52b（20/05/05）

Fixed a bug where particles are not shown with Line of SpawnMethod
Fixed a bug in which Japanese is selected in an environment where the language is neither Japanese nor English.
Fixed a bug that it fails to start if the current directory at startup is not the same as Effekseer.

## 1.52a（20/04/28）

Fixed a bug that a behavior of rotated billboard is something wrong when an angle is about 90 degree

## 1.52（20/04/27）

Fixed a bug where files could not be saved on some Mac environments.

Fixed a bug that caused a rare crash.

Fixed a bag where the FPS changed when not using the 60FPS display.

Fixed a bug where the color space did not work properly.

Improved UI for recording.

## 1.51（20/04/02）

Fix a bug that Effekseer doesn't run on ShaderModel4.0 (Windows)

Optimize Turbulence

Support 2D Mode (Experimental)

## 1.50（20/03/18）

### Material

Material functionality has been added.
You can now create and use your own materials with nodes.

Distortion Parameters were removed from Basic Render Settings.
Lighting Parameters were removed from model Render Settings.
Instead of these, parameters are reorganized.

Standard, distortion, and lighting materials have been added in Basic Render Settings.

You can now specify a sampler for distorting texture independently of color.

Lighting is now supported for non-models.

You can now select an image to use for UV calculation. UV can also be specified without an image.

(Breaking change) 
Due to a bug, the distortion did not behave as the reference correctly.
The specifications is the same as the previous version if the colors of the vertices are swapped between red and green except for sprites.
The specifications is the same as the previous version if it makes the color of red twice for sprites.

(Breaking change) 
Applied read magnification to distortion.
The magnification and distortion become stronger.
Therefore, the distortion on the screen remains unchanged when the effect occupies the same area.

(Breaking change) 
Due to non-model lighting, billboard behavior has been partially changed. 
Models with fixed settings and rings that extend in the depth direction are particularly affected.
The specifications is the same as the previous version if you reverse the front and back.

(Breaking change) 
Changed the specification so that pixels are drawn even if the position is the same in DirectX11. 
There is basically no effect, but there may be a change if drawing in the same position.

(Breaking change) 
Fixed a bug that sprites are not ordered even if the drawing order was reversed.

### Dynamic Parameter

A function has been added to rewrite effect parameters during playback.

### New format

efkproj and efk have been combined into efkefc. It is no longer necessary to output another file. Instead, you must specify the load magnification at runtime when a file is loaded.

### Recording

The color when the background is changed can be reproduced as much as possible by separating the recorded result into normal and additive.

You can now specify whether to save recording settings in the application or project. Effects can now have recording settings.

Behavior is now reflected in recordings. Recording of loop effects has become easier.

Fixed the problem that extra frames were recorded when recording as a spreadsheet.

### UI

The behavior of the node tree has been improved in many points.

The behavior of the F-curve has been improved in many points.

Copy and paste can be performed for each panel.

The part whose value has been changed from the default is now emphasized.

Added support for changing DPI scale.

Fixed a bug that playback started when a space was entered during character string input.

Added options to change font and font size.


### Environment

Bloom and tone mapping can now be specified in the editor.
This is for checking the behavior of the effect because it is applied only to the appearance of the editor.
Background and lighting have been moved to the environment because of the frequency of changes.

### Sprite, ring, model

(Breaking change) The direction of rotation of ```Rotated billboard``` has been reversed.

### Track

(Breaking change) The track has been flipped.

### Ring

It changed ```viewing angle``` setting to a ring shape setting.
If you specify a crescent type, a ring is drawn as a partially cut circle.
You can now specify the start and end angles and the fade angle of the circle.

(Breaking change) 
The appearance may change depending on ```viewing angle```.

### Ribbon, Track

UV repeat pattern can now be specified.
UV can be repeated according to the length. You can also specify not to repeat only the edges.
Suitable for expressions with repeating patterns such as chains.

### F-curve

The value change can now be specified with the particle extinction time as 100. In addition, the default has been changed to 100%.

### Depth

Added a parameter to set the scale so that it does not change even if the distance changes. You can also suppress the change.

Added depth offset to ribbon and track.

Z-sort is now applied to ring and model.

(Breaking change) 
Fixed incorrect calculation of ignore of scaling by offset.

### AttractionForce

It is renamed into ForceField.
Turbulence was implemented.

### Optimisation

Update process is 30-50% faster.

### Point of view

You can now save and load the current viewpoint.

You can now specify near-far clips.

### Misc

Added support for reading FBX without bone or FBX without animation and with bone.

Added a playbackspeed in Behavior

(Breaking change) 
Fixed a bug that random numbers overflowed. The random behavior may change.

## 1.43f（19/11/20）

*   Fixed a bug that it cannot open a help.

## 1.43e（19/10/12）
*   Fixed a bug that the application cannot read a model from maya
*   Fixed a bug that the application cannot read a file with a name containing space
*   Fixed a bug that crashes with unloaded models on mac

## 1.43d（19/07/08）
*   Fixed a bug that the window size is doubled each time the application is launched on Macs with Retina Display.
*   Fixed a bug that settings are loaded from current directory
*   Fixed a bug that the application cannot read a file with a name containing ```+```
*   Fixed a bug that the application is crashed when invalid images are loaded
*   Fixed a bug that the application is crashed when File Viewer is opened and it select new
*   Fixed a bug that the application is crashed when it failed to load a file from recent files
*   Changed a name of error log. The name contains time stamp

## 1.43c（19/05/13）

*   Fixed a bug that fails to read model file when user name is Japanese (Win)
*   Fixed a bug that files cannot be loaded on Europe environment

## 1.43b（19/03/12）

*   Fixed a bug that the icon image disappears when changing the screen size after opening the file(Mac)

## 1.43（19/03/02）

*   Fixed bug that the behavior of the ribbon and track generated with the 0th frame is wrong
*   Fixed bug that SSE buffer overrun crashes
*   Fixed bug that crashes on Android when specifying easing of color
*   Fixed many bugs about network functions

## 1.42f（19/01/19）

*   Fixed a bug where recording image's aspect is wrong

## 1.42e（19/01/08）

*   Fixed a bug where Effekseer is built with Debug Mode

## 1.42d（19/01/06）

*   Fixed a bug about HSV Color*   Support macOS 10.14 Mojave

## 1.42c（18/10/14）

*   Make F-Curve key fit integer.
*   Fixed a bug causes garbled when application path includes japanese letter.
*   Fixed a bug shows multiple window when clicking a close button.
*   Fixed a bug causes crach when record into opened movie file.
*   Fixed a bug about recording on Mac

## 1.42b（18/09/25）

*   Fixed bug: Fixed many bugs about command line

## 1.42a（18/09/16）

*   Fixed bug: Changing a pitch of sound crashes

## 1.42（18/09/16）

*   Fixed bug: Uncollapsed tree view node cannot be selected.
*   Fixed bug: Fixed many bugs about Behavior, Behavior, Global

## 1.41（18/09/13）

*   Fixed bug: UI is collapsed on some mac pc (Mac)
*   Fixed bug: Dock panel behavior is wired
*   Fixed bug: Pasting on node crashes the application

## 1.40（18/09/12）

*   Tool: The renewal of UI
*   Tool: Improve FBX loader. It can load a fbx file with an animation
*   Tool: Add parameters about depth
*   Tool: Add a parameter about random
*   Tool: Add a parameter to make tracks and ribbons smooth
*   Tool: Add self distortion
*   Runtime: Improve a performance on smartphones
*   Runtime: Improve a performance on all environments
*   Fixed bug: Generation of particles is delayed at 1 frame

## 1.31（17/11/21）

*   Fixed bug: Fixed FBX converter

## 1.31（17/11/04）

*   Fixed bug: Fixed translation mistake in the recorder

## 1.30（17/11/01）

*   Tool: Add icons
*   Tool: Add file viewer
*   Tool: Integrate FBX and mqo loader
*   Tool: Improve F-Curve Editor
*   Tool: Add UV F-Curve
*   Runtime: changed so that enlargement ratio is applied to trajectory
*   Fixed bug: Fixed shifting ribbon and track's UV
*   Fixed bug: Fixed bug that ribbon distortion is not applied
*   Fixed bug: Fixed misspelled function name (Destory -> Destroy)
*   Fixed bug: Fixed bug that the behavior is not initialized when files are loaded
*   Fixed bug: Fixed bug about rotation(Axis)
*   Fixed bug: Fixed bug about rotation(Distortion)
*   Fixed bug: Fixed bug about copy node
*   Specification change: Changed to generate child particles at 0 frame since particles are generated
*   Specification change: Change the return value of distortion callback to bool
*   Specification change: Abolition of maximum number of nodes
*   Specification change: Distortion method. Effekseer's effects are not distorted with a distortion. (after1.4 we plan to add self distortion)

## 1.22（16/08/21）

*   Tool: Ribbon and track corresponds to UV scroll
*   Fixed bug: Fixed erroneous operation of copy paste

## Previous changes are only japanese.
