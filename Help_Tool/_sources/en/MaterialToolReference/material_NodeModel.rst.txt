=====================
Material Node (Model)
=====================

Overview
========

Node list
========

VertexPosition
--------------------------------

Outputs the positions of particle vertices.

UV
--------------------------------

Outputs UV coordinates of particles.
By switching the UV number, you can use the UV before it is changed by the UV parameter of the Effekseer.

MovingUV
--------------------------------

Moves the UV coordinates of particles according to time and outputs them.
You can enter UV coordinates, time, and movement speed.
If the input is not connected, use the value of the property.

- version 1.52k or later

The UV from MovingUV is designed to loop between -16 and 16 + the UVs of the model.
For example, the UV coordinate of 24 is 8.

VertexNormal
--------------------------------

Outputs the normals of particle vertices.

PixelNormal
--------------------------------

Outputs the particle normal after the direction of 
the normal has been changed for each pixel by a normal input in OutputNode.

VertexColor
--------------------------------

Outputs the vertex color of the particles.
This includes all colors of sprite, ring, and so on.

ObjectScale
--------------------------------

Outputs the enlargement ratio of particles in Effekseer.

However, only it is valid when used for the OutputNode WorldPositionOffset with the model.
