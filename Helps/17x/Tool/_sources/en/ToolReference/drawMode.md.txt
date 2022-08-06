# Draw Modes 

An editor can display particles in several draw modes, useful for debugging various aspects 
of the edited effect.

## Normal

```eval_rst
.. image:: ../../img/Reference/DrawMode_Normal.png
   :align: center
```

This is the default draw mode. It displayed particles the same way as they will be rendered in
the engine.

## Wireframe

```eval_rst
.. image:: ../../img/Reference/DrawMode_Wireframe.png
   :align: center
```

Shows wireframe representation of particles

## Wireframe + Normal

```eval_rst
.. image:: ../../img/Reference/DrawMode_WireframeNormal.png
   :align: center
```


Displayed textures particles with wireframe overlaid

## Overdraw

```eval_rst
.. image:: ../../img/Reference/DrawMode_Overdraw.png
   :align: center
```


This is mode is useful during optimization. It renders transparent "silhouettes" of particles. 
These transparent colors accumulate which makes it easy to spot places where multiple particles 
overlap. 

High particles overdraw is usually the main source of performance issues, so you probably want
to reduce overdraw when possible by reducing amount of overlapping particles.