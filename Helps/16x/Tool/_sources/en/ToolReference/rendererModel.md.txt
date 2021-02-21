# Render - Model

## Overview

Here we explain the parameters that affect the drawing when "Model" is selected in the Render window.

When "Model" is selected, an external 3D model can be imported and displayed.

The color / distortion image set in the Basic Render Settings window will be used to texture the model. Depending on the model, it may be displayed incorrectly unless depth writing and depth test are enabled.

![](../../img/Reference/renderModel.png)

## Parameters
<div align="center">
<img src="../../img/Reference/Render/panel_model_en.png">
<p>"Render Settings" window</p>
</div>

### Model

There are two types of models: file and procedural models.

If models are loaded from file, Specify FBX (.fbx), metasequoia file (.mqo) used for display, or model file for Effekseer (.efkmodel). If .efkmodel is specified, .efkmodel is generated in the same directory as the specified file. When playing effects with other applications, this generated file is necessary.

You can also load FBX (.fbx) with animation. The first animation in the FBX file is played.

If you want to use a procedural model, create a model in the Procedural Model panel and specify it.

### Configuration

Specify how to draw the particle's model. In the case of "Billboard", the sprite always rotates to face the camera. In the case of "Rotated Billboard", the model rotates to face the camera while keeping the Z axis fixed. In the case of "Fixed Y-axis", the sprite rotates to face the camera while keeping the Y axis fixed. For "Fixed", the model will match the rotation setting of the particle.

<iframe src='../../Effects/viewer_en.html#References/Render/model_configuration.efkefc'></iframe>

### Culling

Specify which side(s) of the model's faces should be displayed.

### Overall Color

Specify the color tone of the whole model.
