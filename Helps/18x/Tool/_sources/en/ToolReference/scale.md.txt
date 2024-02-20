# Scale

## Overview

Set parameters related to the scale/expansion of the spawn scale of the particle.

These parameters can be specified in ```Scale``` window.

<div align="center">
<img src="../../img/Tutorial/04_scale_en.png">
<p>"Scale" window</p>
</div>

This will influence the scale of the particle relative to its parent particle. If there is no parent particle, or scale is set to not inherit in the Basic Settings window, this will specify the absolute scale instead.

### Fixed Scale

Specify the scale of the particle.
<iframe src='../../Effects/viewer_en.html#References/Scale/scale.efkefc' class='effect'></iframe>

### Scale, Velocity, Acceleration (PVA)

Specify the initial scale, expansion velocity, and expansion acceleration of the particle.
<iframe src='../../Effects/viewer_en.html#References/Scale/scale_pva.efkefc' class='effect'></iframe>

### Easing

Specify the initial scale of the particle, as well as the final scale of the particle at the end of its lifetime, and how to transition between the two.
<iframe src='../../Effects/viewer_en.html#References/Scale/scale_easing.efkefc' class='effect'></iframe>

### F-Curve

Use an F-curve to modify the scale value over the lifetime of the particle.
<iframe src='../../Effects/viewer_en.html#References/Scale/scale_f_curve.efkefc' class='effect'></iframe>

### Scale, Velocity, Acceleration (PVA) (Single)

It is a PVA with XYZ all having the same value.

### Easing (Single)

It is an Easing with XYZ all having the same value.

### F-Curve (Single)

It is an F-curve with XYZ all having the same value.