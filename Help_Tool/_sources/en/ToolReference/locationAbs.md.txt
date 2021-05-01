# Force Field (Local)

## Overview

It specifies an effect that gives power from outside the particles.

## Parameters
<div align="center">
<img src="../../img/Reference/Atraction/panel_en.png">
<p>"Force Field (Local)" window</p>
</div>

## Force Field

It can specifies up to 4 types of force fields.

## Kind

### None

No additional external forces will be applied to the particles.

### Force

The force is applied outward from the specified position.
You can also make it so that the force decays when it leaves the specified position.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Force.mp4"/></div>

### Wind

It applies a force in the specified direction.
The direction can be changed by rotation.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Wind.mp4"/></div>

### Vortex

It gives the force to rotate the axis in the specified direction.
The direction of the axis can be changed by rotation.

The movement speed can be specified so that the rotation speed is the same for the outside, or so that the movement speed is constant regardless of the position.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Vortex.mp4"/></div>

### Turbulence

It gives power with a turburence.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Turbulence.mp4"/></div>

#### Kind

You can specify whether it is simple or complex.
The more complex one looks better, but it is slower.

#### Random Seed

The flow of turbulence changes according to the value.

#### Field scale

Larger value ​​increases the turbulence width.

#### Strength

The strength of turbulence on particles.

#### Complexity

Larger value ​​complicates turbulence. However, processing becomes heavy.

### 抵抗

It gives a force that suppresses movement.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/Drag.mp4"/></div>

### Gravity

Apply acceleration in one direction. It can be applied not only to the bottom but also to the top and the right.
This direction is not affected by the orientation of the parent particle.

<iframe src='../../Effects/viewer_en.html#References/Attraction_Forces/gravity.efkefc'></iframe>

### Attraction (if point is set)

The particle moves towards the position specified under "Point of Attraction" in the "Behavior" window.

![](../../img/Reference/locationAbs_attraction.gif)

#### Attraction

This is the rate of acceleration towards the target position per frame.

#### Resistance

This is the rate that the angle of motion is adjusted towards the target direction per frame. It takes a value between 0.00 and 1.00.

#### Minimum Range

This is the attenuation start distance of attraction.

#### Maximum Range

This is the attenuation end distance of attraction. When the position of the particle is in the range from 0 to the minimum range, the attraction is 100%. If it is farther than the maximum range, the attractive force becomes 0%. If it is between the minimum range and the maximum range, the attraction force interpolates linearly.


## Position of force field

It specifies the location of the center of the force field.
It affects the settings of some force fields.

## Angle of force field

It specifies the angle of the force field.
It affects the settings of some force fields.

## Fall off

Outside this range, the effect of the force field is decayed.
There are several ways to specify the range.

### Sphere

This parameter is used to decay the effect of the force field as it approaches or moves away from the center.
The greater the decay force, the more the force field is decayed as you move outward.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/FallOff_Sphere.mp4"/></div>

### Tube

This parameter is used to decay the effect of the force field as it approaches or moves away from the axis at the center of the cylinder to the outside.
The greater the decay force, the more the force field is decayed as you move outward.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/FallOff_Column.mp4"/></div>

### Cone

The shape of the cone is a part of a sphere cut into a cone.
This parameter is used to decay the force field as it approaches or leaves the outside of the cone.
The larger the decay force, the more the force field will decay as it approaches the maximum angle.

<div class="video_center"><video autoplay loop="true" muted="true" src="../../movies/Reference/LocalForceField/FallOff_Cone.mp4"/></div>
