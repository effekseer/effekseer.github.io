# Rotation

## Overview

Set parameters related to the rotation of the node.

## Parameters
<div align="center">
<img src="../../img/Tutorial/04_rotation_en.png">
<p>"Rotation" window</p>
</div>

### Rotation

Specifies the spawn angle of the particle. This will influence the angle of the particle relative to its parent particle. If there is no parent particle, or angle is set to not inherit in the Basic Settings window, this will specify the absolute angle instead.

#### Fixed Angle

Specify the angle of the particle.
<iframe src='../../Effects/viewer_en.html#References/Rotation/rotation.efkefc' class='effect'></iframe>

#### Position, Velocity, Acceleration (PVA)

Specify the initial angle, rotational speed, and angular acceleration of the particle.
<iframe src='../../Effects/viewer_en.html#References/Rotation/rotation_pva.efkefc' class='effect'></iframe>

#### Easing

Specify the initial angle for the particle, as well as the final angle for the particle at the end of its lifetime, and how to transition between the two.
<iframe src='../../Effects/viewer_en.html#References/Rotation/rotation_easing.efkefc' class='effect'></iframe>

#### F-Curve

Use an F-curve to modify the rotational value over the lifetime of the particle.
<iframe src='../../Effects/viewer_en.html#References/Rotation/rotation_f_curve.efkefc' class='effect'></iframe>