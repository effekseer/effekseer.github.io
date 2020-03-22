<div class="main">

# Sound

## Overview

Set the parameters of the sound accompanying the node.

## Parameter

### Sound Data

Load the WAV file of the sound to be played.

### Volume

Specify the playback volume of the sound. This is a value between 0 and 1:

*   1： Equivalent to the original source audio
*   0： Silence

### Pitch

Specify the pitch of the sound to be played. This is a value between -2 and 2:

*   0： Equivalent to the original source audio
*   1： Increase the pitch by 1 octave
*   -1： Decrease the pitch by 1 octave

### Panning Type

This is the method for handling stereo (left / right) balance. There are 2 methods, 2D mode and 3D mode.

#### Pan

This is the parameter used in 2D mode. The range is between -1 and 1:

*   0： Equivalent to the original source audio
*   -1： Audio will only play in the left speaker
*   1： Audio will only play in the right speaker

#### Damping Range

This is the parameter used in 3D mode. It is natural that the farther an object is, the less audible it becomes. This is the distance value at which the volume begins to decrease. It can be any positive valued number.

### Delay

This is the time between node creation and the playback of the sound. This can be any positive valued number.

</div>