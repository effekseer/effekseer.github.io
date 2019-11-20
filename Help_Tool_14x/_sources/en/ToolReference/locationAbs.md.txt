# Attraction Forces

## Overview

Set parameters that control forces applied to particles that are independent of the position and angle of the parent particle. These parameters move the particles after the parent particle and child particle position changes have been applied.

## Parameters
<div align="center">
<img src="../../img/Reference/Atraction/panel_en.png">
<p>"Attraction Forces" window</p>
</div>

### None

No additional external forces will be applied to the particles.

### Gravity

Apply acceleration in one direction. It can be applied not only to the bottom but also to the top and the right.
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
