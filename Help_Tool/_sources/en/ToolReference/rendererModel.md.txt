# Render - Model

## Overview

Here we explain the parameters that affect the drawing when "Model" is selected in the Render window.

When "Model" is selected, an external 3D model can be imported and displayed.

The color / distortion image set in the Basic Render Settings window will be used to texture the model. Depending on the model, it may be displayed incorrectly unless depth writing and depth test are enabled.

![](../../img/Reference/renderModel.png)

## Parameters

### Model

Specify a model file for Effekseer (.efkmodel).

Specify FBX (.fbx), metasequoia file (.mqo) used for display, or model file for Effekseer (.efkmodel). If .efkmodel is specified, .efkmodel is generated in the same directory as the specified file. When playing effects with other applications, this generated file is necessary.

You can also load FBX (.fbx) with animation. The first animation in the FBX file is played.

### Normal Map

Specify the normal image to be used for the 3D model.

### Lighting

Specifies whether the model is affected by the light source.

### Culling

Specify which side(s) of the model's faces should be displayed.

### Overall Color

Specify the color tone of the whole model.
