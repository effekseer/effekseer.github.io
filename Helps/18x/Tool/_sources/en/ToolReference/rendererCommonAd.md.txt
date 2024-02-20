# Basic Render Settings (Advanced)

## Overview

It is possible to specify more complex parameters than those that can be specified in the Basic Render Settings.

## Parameters

### Alpha Texture

Displays a color image of only the red area of the set image.
For example, if you set a star-shaped image as the alpha texture, you will see a color image of the star-shaped area.
This image can be set to individual UVs.
Therefore, by setting up separate UVs, you can create a complex look by scrolling and animating them.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/alpha.png
   :align: center
```

### UV Distortion Texture

Distorts the color image according to the set image.
A distorted image will not be distorted if the color is (127,127,255), and the distortion will increase as you move away from that color.
This image can be set to individual UVs.
Therefore, by setting up separate UVs, you can create a complex look by scrolling and animating them.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/dist.png
   :align: center
```

### Alpha Cutoff

Areas with alpha values lower than the specified value will not be drawn.
This makes it easier to express toon-like effects.

```eval_rst

|pic_alphacutoff_none| |pic_alphacutoff|

.. |pic_alphacutoff_none| image:: ../../img/Reference/BasicRenderAd/alphacutoff_none.png
   :scale: 60

.. |pic_alphacutoff| image:: ../../img/Reference/BasicRenderAd/alphacutoff.png
   :scale: 60

```

Judges an area with a low alpha value as an edge, and changes the color of only that edge.
It makes it easier to express toon-like effects.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/alphacutoff_edge.png
   :align: center
```

### Falloff

Specifies the color of the part of the model that is tilted from the viewpoint direction.
This allows the front of the model to be transparent and the edges to be opaque.

```eval_rst

|pic_falloff_none| |pic_falloff|

.. |pic_falloff_none| image:: ../../img/Reference/BasicRenderAd/falloff_none.png
   :scale: 60

.. |pic_falloff| image:: ../../img/Reference/BasicRenderAd/falloff_add.png
   :scale: 60

```

You can also subtract and multiply.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/falloff_sub.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/falloff_mul.png
   :align: center
```


### Soft Particles

Reduces the transparency of areas close to the background.
This will reduce the unnatural border between the background and the particles.
This feature requires that the environment where Effekseer will be used supports soft particles.

```eval_rst

|pic_softparticle_far_none| |pic_softparticle_far|

.. |pic_softparticle_far_none| image:: ../../img/Reference/BasicRenderAd/softparticle_far_none.png
   :scale: 60

.. |pic_softparticle_far| image:: ../../img/Reference/BasicRenderAd/softparticle_far.png
   :scale: 60

```

You can also make the area near the camera transparent.

```eval_rst

|pic_softparticle_near_none| |pic_softparticle_near|

.. |pic_softparticle_near_none| image:: ../../img/Reference/BasicRenderAd/softparticle_far_none.png
   :scale: 60

.. |pic_softparticle_near| image:: ../../img/Reference/BasicRenderAd/softparticle_near.png
   :scale: 60

```

### Blend Texture

Adds or subtracts a set image to or from a color image.
Unlike blending two particles together, the result of adding and subtracting images from each other is used as the particle image.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend.png
   :align: center
```

You can also add, multiply, and subtract.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_add.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_sub.png
   :align: center
```

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_mul.png
   :align: center
```

### Blend Alpha Texture

Alpha image for use as part of a blended image.
The behavior is the same as for blended images for color images.
The only difference is the image to be targeted.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_alpha.png
   :align: center
```

### Blend UV distortion Texture

This image is used to distort the blended image.
The behavior is the same as the distortion image for color images.
The only difference is the image to be targeted.

```eval_rst
.. image:: ../../img/Reference/BasicRenderAd/blend_dist.png
   :align: center
```
