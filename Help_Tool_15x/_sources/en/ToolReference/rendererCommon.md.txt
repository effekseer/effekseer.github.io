# Basic Render Settings

## Overview

This section explains about the "Basic Render Settings" window, which provides common parameters that manipulate how the current node's particles are drawn.

## Parameter
<div align="center">
<img src="../../img/Tutorial/03_rendercommon_en.png">
<p>"Basic Render Settings" window</p>
</div>

### Material

Specifies the material used to draw the particles.
You can make settings such as being lighten or distorting the background.

#### Default

The image in the color image is displayed.

<iframe src='../../Effects/viewer_en.html#References/BasicRender/render_unlit.efkefc'></iframe>

#### Lighting

Particles are lightened.
In addition to color images, you can specify normal images.
If you specify a normal image,  the orientation of the surface is changed.

<iframe src='../../Effects/viewer_en.html#References/BasicRender/render_lit.efkefc'></iframe>

#### Distortion(Back)

If the distortion setting is enabled, the particles will distort anything behind it. The way the distortion is applied depends on the pixel data of the distorted image, and the distortion intensity.

In the color of the distortion image, red and green channels are used as distortion information. Both of them do not distort at all when the value is 127\. When red is 127 or more, it is distorted to the right, and when it is less than 127 it distorts to the left. When green is 127 or more, distortion is in the upward direction and distortion is in the downward direction when the green is less than 127\. However, this up / down / left / right direction depends on the drawing method. For example, in the case of a sprite, the top, bottom, left, and right directions are those perpindicular to the sides of the image's rectangle.

The color of each drawing weakens the strength of distortion. Values range between 0 and 255\. Red affects left and right, and green affects up and down.

Distortion strength adjusts the strength of all colors. When it reaches 0, no more distortion will be applied.

<table>

<tbody>

<tr>

<td>

With distortion

</td>

<td>

No distortion

</td>

</tr>

<tr>

<td><img src="../../img/Reference/renderCommon_distortion_on.gif"/></td>

<td><img src="../../img/Reference/renderCommon_distortion_off.gif"/></td>

</tr>

</tbody>

</table>

In the case of the default settings, the distortion distorts only the background without own effect itself. To distort other nodes of own effect with distortion, specify the drawing priority from the depth panel. Nodes with drawing priority less than 0 are distorted with the background due to the distortion of the node of own effect.

#### File

You can use a user-created material file for drawing particles.
The widest range of expressions can be achieved.

Press the button to create and edit material files.

See Materials (in writing) for details.

More parameters may be emerging depends on the material file.
In addition to constants, custom parameters can be specified by easing or F-curve.
The displayed name of the custom parameter depends on the material file.

<iframe src='../../Effects/viewer_ja.html#References/BasicRender/render_file.efkefc'></iframe>

### Blend

Specifies the method of alpha blending applied when displaying the particle. This controls how drawn images will be composited when they are on top of each other, such as translucency, addition, or subtraction.
<iframe src='../../Effects/viewer_en.html#References/Render/blend.efkefc'></iframe>

### Filter

Specify the filtering method to be applied when displaying the particle.

### Depth Set

Specify whether to write depth information when displaying particles. After writing the depth information, if you draw the particles for which the depth test is enabled, if the particles are deep inside, they will not be drawn.

### Depth Test

If the depth test is valid, particles will not be drawn deeper than the written depth information.

### Fade-In

When a particle is first spawned, it fades in over a duration until fully visible.

### Fade-Out

When a particle is about to be despawned, it fades out over a duration and disappears.
<iframe src='../../Effects/viewer_en.html#References/Render/fade_in_out.efkefc'></iframe>

### UV

In an image, this specifies the region of the image actually used when displaying the particle. 
The region can be changed over time, allowing you to scroll or animate the image. 
The units used in these parameters for specifying the area are pixels.

#### Animation

Play animation based on images with animations arranged in succession.

![](../../img/Reference/renderCommon_uv_animation.png)

##### Start time(1.3 or later)

Specify the time of animation to start playing. For example, you can play from the second piece with animation composed of 4 images.

#### Scroll

Move the UV range at a constant speed.

#### F-Curve

Use the F-Curve window to control the UV by defining automation curves.

![](../../img/Reference/renderCommon_uv_scroll.png)

### Referenced(UV)

Multiple images with different sizes may be used for one particle.
In that case, you can specify a resolution used as the basis of the ratio with an image.
You can also specify the UV based on 128x128 without specifying the image.

When using a material, the number of ```Referenced``` matches the material a priority of image.

![](../../img/Reference/BasicRender/uv_referenced.png)

### Inherit color

Specify whether the color of the parent particle affects the color of the child's particles. In case of inheritance of color, the color of the parent's particle multiplied by the color of the child's particle becomes the color of the final child's particle. When "Only on create" is selected, the color of the parent particle when the child particles are generated is always applied.

<table>

<tbody>

<tr>

<td>

Never

</td>

<td>

Only on create

</td>

<td>

Always

</td>

</tr>

<tr>

<td><img src="../../img/Reference/renderCommon_inherit_color_none.gif"/></td>

<td><img src="../../img/Reference/renderCommon_inherit_color_when.gif"/></td>

<td><img src="../../img/Reference/renderCommon_inherit_color_always.gif"/></td>

</tr>

</tbody>

</table>

