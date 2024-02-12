# 1.4x or older Change Logs

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
