# Kill Rules

## Overview

Kill rules allow you to specify an area in which particles should be destroyed.
If a particle has configured fade out, it will be applied before removal.

While in the editor, you can select a node in the node tree to preview its configured kill rule shape.

## Box

Box is used to kill particles when they're either inside or outside the defined box.

```eval_rst
.. image:: ../../img/Reference/killRules_Box.png
   :align: center
```


#### Center

The position of the center of the box in effect space.

#### Size

Extents of the box around its center.
For example, if size is set to (0.5, 0.5, 0.5) the box will have a width, height, and depth of 1.

#### Kill Inside

If enabled, particles will be killed when they fall INSIDE the box.
If disabled (the default), they will be killed when they fall OUTSIDE the box.

#### Scale And Rotation Applied

If enabled (the default), the box will be rotated and scaled with effect.
If disabled, the box will be axis aligned and have a fixed size.

## Plane

Plane is used to kill a particle when it moves beyond a certain position along a specified axis.

```eval_rst
.. image:: ../../img/Reference/killRules_Plane.png
   :align: center
```

#### Plane Axis

Defines the axis with which the plane's normal will be aligned.
Inverting the axis allows to change the side on which particles will be killed.
For example, if the axis is set +Y particles will be killed when they are above the plane, but if you set the axis to -Y particles will be killed when they are below the plane.

#### Plane Offset Along Axis

Defines how far plane will be moved along its axis.
For example, if the axis is set to +Y and the plane offset is set to 1.0, then particles will be killed when their Y position is greater than 1.0, but if the axis is set to -Y and plane offset is set to 1.0, then particles will be killed when their Y position is less than -1.0.

#### Scale And Rotation Applied

If enabled (the default) plane orientation will be rotated when effect orientation changes, and the plane's offset will be scaled with the effect's scale.
If disabled, the plane's orientation will remain fixed and its offset won't change with effect scale.

## Sphere

Sphere used to kill particles when they move inside or outside of the specified sphere.

```eval_rst
.. image:: ../../img/Reference/killRules_Sphere.png
   :align: center
```

#### Center

Position of the center of the sphere in effect space.

#### Radius

Radius of the sphere.

#### Kill Inside

If enabled, particles will be killed when they fall INSIDE the sphere.
If disabled (the default), they will be killed when they fall OUTSIDE the sphere.

#### Scale And Rotation Applied

If enabled (the default) the sphere position will be rotated relative to the effect's space origin and the sphere's radius will be scaled with the effect's scale.
If disabled, the sphere position will remain at a constant position relative to the effect's space origin and radius will be fixed.