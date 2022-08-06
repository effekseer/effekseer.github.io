# Render - Ring

## Overview

Here we explain the parameters that affect the drawing when "Ring" is selected in the Render window.

When "Ring" is selected, a circular effect is drawn.

The ring consists of a triple structure of outside, center and inside.

![](../../img/Reference/renderRing.png)

## Parameters
<div align="center">
<img src="../../img/Reference/Render/panel_ring_en.png">
<p>"Render Settings" window</p>
</div>

### Rendering Order

Specify the order in which particles are drawn among particles generated from the same node. For "Order of spawn", the first generated particle is the first drawn, while in "Reversed", the first generated particle will be drawn last. That is, in the order of generation, the drawing of the last generated particle is given priority over the first generated particle.

### Configuration

Specify how to draw the particle's ring. In the case of "Billboard", the ring always rotates to face the camera. In the case of "Rotated Billboard", the ring rotates to face the camera while keeping the Z axis fixed. In the case of "Fixed Y-axis", the ring rotates to face the camera while keeping the Y axis fixed. For "Fixed", the ring will match the rotation setting of the particle.

<iframe src='../../Effects/viewer_en.html#References/Render/ring_configuration.efkefc' class='effect'></iframe>

### Vertex Count

The number of corner verticies that will be used to display the ring. The more corners there are, the closer it will be to a smooth circle. However, you can also use small numbers to reduce it to a polygon. For example, 3 vertices will make the ring a triangle, 4 will make it a diamond, 5 will make it a pentagon, etc.

<iframe src='../../Effects/viewer_en.html#References/Render/render_ring_vertexcount.efkefc' class='effect'></iframe>

### Shape

It can specify the shape of the ring. 

#### Donut

It can draw a shape like a donut

#### Crescent

It can draw a circle with a part cut. It can set the start / end angle and fade angle of the circle.

<iframe src='../../Effects/viewer_en.html#References/Render/render_ring_viewingangle.efkefc' class='effect'></iframe>

### Outer

This is the shape/position of the outer part of the circle. The x value specifies the radius, while the y value specifies the height.

### Inner

This is the shape/position of the inner part of the circle. The x value specifies the radius, while the y value specifies the height.

### Center Ratio

This is the ratio of the center gradient that transitions between the inner and outer rings. 0.5 will result in a smooth even gradient between the inside and outside edges. 0.0 will place the center gradient on the inner edge. 1.0 will place the center gradient on the outer edge.

### Outer Color

This is the color of the outer part of the circle.

### Center Color

This is the color of the center part of the circle.

### Inner Color

This is the color of the inside part of the circle.

<iframe src='../../Effects/viewer_en.html#References/Render/render_ring_outin.efkefc'></iframe>