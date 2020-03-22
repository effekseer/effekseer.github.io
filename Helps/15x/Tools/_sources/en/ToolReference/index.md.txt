# Tool-Reference

## Overview

### Tool

This tool consists of a viewer section to preview effects and multiple windows to edit the effects' parameters. By editing the parameters in each window, you can create an effect and change its appearance and behavior. By dragging and dropping each window, you can rearrange them as you please, or collapse them into tabs. By selecting "Menu bar -> Window", you can access windows that are not visible in the default view. Also, you can reset all windows back to their default locations.

### Effect

With this tool, you create an effect by editing nodes. Nodes have parent-child relationships, where children are influenced by their parents. By utilizing the parent-child relationships, it is possible to create complex effects.

I will explain parent-child relationships using an example. In this example, node 2 is the child of node 1, and node 3 is the child of node 2\. An effect 1 particle will be generated from node 1\. After a few frames, several effect 2 particles will be generated relative to the position of the effect 1 particle generated from node 1\. After a few more frames, several effect 3 particles will be generated relative to the positions of each of the node 2 particles. This is shown in the figure below. In this way, by describing the behavior of the effect through parent-child relationships on the nodes, a much greater variety of effects can be expressed. In this tool, one effect generated based on the parameters within a "node" is called a "particle".

```eval_rst
.. image:: ../../img/Reference/overview_en.png
   :align: center
```

### How to operate

#### Preview

<div align="center">
<table border="1">
<tr>
<td>Rotation</td>
<td>Click the right mouse button and move the mouse while holding.</td>
</tr>
<tr>
<td>Pan</td>
<td>Click the middle mouse button or right button + Shift and move the mouse while holding.</td>
</tr>
<tr>
<td>Zoom</td>
<td>Scroll the mouse wheel or right button + Control to zoom in and out.</td>
</tr>
</table>
</div>

#### How to input a value

A value can be entered from the keyboard by left-clicking a text entry box with the mouse.

Left-click and drag a text entry box to change the value gradually.

```eval_rst
.. image:: ../../img/Reference/Overview/input_value.png
   :align: center
```

#### How to input a color

In addition to the text box, the color can be entered by left-clicking the color field with the mouse.

```eval_rst
.. image:: ../../img/Reference/Overview/input_color_basic.png
   :align: center
```

Left-click and drag a color field to copy the value to another color field.

```eval_rst
.. image:: ../../img/Reference/Overview/input_color.png
   :align: center
```

### File Format

An effect is saved in a file with "efkefc" format.
This file can be editted and played with a runtime in a game.
Until 1.4 there were efkproj and efk, but now efkproj and efk are read-only.

## Each window

```eval_rst

.. toctree::
    :maxdepth: 1

    common
    location
    locationAbs
    locationGene
    rotation
    scale
    rendererCommon
    rendererSprite
    rendererRibbon
    rendererRing
    rendererModel
    rendererTrack
    fcurve
    sound
    network
    culling
    behavior
    record
    fileviewer
    global
    environment
    options
    depth
    dynamicParameter
```

## Command Line

When starting Effekseer from the command line, you can change the behavior of Effekseer by adding arguments. For example, you can convert ".efkproj" files to ".efk" without activating the Effekseer GUI. By combining this with a script, you can batch convert effect files in any folder at once.

```eval_rst

.. list-table:: Command Line
   :widths: 20 70

   * - -cui
     - Start up in CUI mode
   * - -in \*
     - \* open and launch
   * - -o \*
     - Save as \*
   * - -e \*
     - Output in standard format to \*
   * - -m \*
     - Set the magnification ratio of the effect when outputting in standard format to \*
```
