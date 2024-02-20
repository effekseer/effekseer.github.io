# Easing

Easing is a feature that allows you to specify two or three points and interpolate between them to change their values.
In Effekseer, you can apply easing to various parmeters of your effects. There are various types of easing, and we describe them here.

## Types of easing

There are many different types of easing, such as a behavior that starts with a sudden change and ends with a slow change.

A graph showing all types of easing is available at the end of this page.

## Middle point

The standard easing is two points, but you can also add an intermediate point.
The values always change via the middle point.

## Random group

Effekseer's easing can be randomized for both start and end points.
This is not a problem if all the values are disparate, but sometimes you want XY to be random but the same value, and only Z to be different.
For example, if you have a 3D model of a cylinder that you want to use as a beam, the random XY values need to be the same because you want to keep the shape of the circle.

In such a case, there is a feature called groups.

If the group numbers are the same, the random behavior will be the same.
It allows you to reproduce randomness where XY is equal but Z is different.

## Type individual

It allows you to set different types of easing for each of XYZ.

## List of easing types

- EaseInBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInBack.png
   :align: center
```

- EaseInBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInBounce.png
   :align: center
```

- EaseInCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInCubic.png
   :align: center
```

- EaseInOutBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutBack.png
   :align: center
```

- EaseInOutBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutBounce.png
   :align: center
```

- EaseInOutCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutCubic.png
   :align: center
```

- EaseInOutQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuadratic.png
   :align: center
```

- EaseInOutQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuartic.png
   :align: center
```

- EaseInOutQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInOutQuintic.png
   :align: center
```

- EaseInQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuadratic.png
   :align: center
```

- EaseInQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuartic.png
   :align: center
```

- EaseInQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseInQuintic.png
   :align: center
```

- EaseOutBack
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutBack.png
   :align: center
```

- EaseOutBounce
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutBounce.png
   :align: center
```

- EaseOutCubic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutCubic.png
   :align: center
```

- EaseOutQuadratic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuadratic.png
   :align: center
```

- EaseOutQuartic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuartic.png
   :align: center
```

- EaseOutQuintic
```eval_rst
.. image:: ../../img/Reference/Easing/EaseOutQuintic.png
   :align: center
```