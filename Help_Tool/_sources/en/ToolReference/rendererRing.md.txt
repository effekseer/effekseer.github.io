# Render - Ring

## Overview

Here we explain the parameters that affect the drawing when "Ring" is selected in the Render window.

When "Ring" is selected, a circular effect is drawn.

The ring consists of a triple structure of outside, center and inside.

![](../../img/Reference/renderRing.png)

## Parameters

### Rendering Order

Specify the order in which particles are drawn among particles generated from the same node. For "Order of spawn", the first generated particle is the first drawn, while in "Reversed", the first generated particle will be drawn last. That is, in the order of generation, the drawing of the last generated particle is given priority over the first generated particle.

### Configuration

Specify how to draw the particle's sprite. In the case of "Billboard", the sprite always rotates to face the camera. In the case of "Rotated Billboard", the sprite rotates to face the camera while keeping the Z axis fixed. In the case of "Fixed Y-axis", the sprite rotates to face the camera while keeping the Y axis fixed. For "Fixed", the sprite will match the rotation setting of the particle.

### Vertex Count

The number of corner verticies that will be used to display the ring. The more corners there are, the closer it will be to a smooth circle. However, you can also use small numbers to reduce it to a polygon. For example, 3 vertices will make the ring a triangle, 4 will make it a diamond, 5 will make it a pentagon, etc.

### Viewing Angle

The default is 360 degrees, which will form a full circle. You can reduce this value to form a semicircle, or a fan shape.

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
