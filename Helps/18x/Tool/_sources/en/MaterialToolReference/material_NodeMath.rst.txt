================================
Material Node (Math)
================================

Overview
================================

Node list
================================

Add
------------------------

Outputs the result of adding V1 and V2 is output.
If the input is not connected, use the value of the property.

Subtract
------------------------

Outputs the result of subtracting V2 from V1.
If the input is not connected, use the value of the property.

Multiply
------------------------

Outputs the result of multiplying V1 and V2.
If the input is not connected, use the value of the property.

Divide
------------------------

Outputs the result of dividing V1 by V2.
If the input is not connected, use the value of the property.

Mod
------------------------

Outputs the remainder when V1 is divided by V2.
If the input is not connected, use the value of the property.

Step
------------------------
Outputs 1 if the value input to V is larger than Edge, 
and outputs 0 if it is smaller.

Smooth Step
------------------------
Outputs a smooth interpolation value from 0 to 1 when V is between Edge0 and Edge1.
Compared to Step, the boundary changes more smoothly.

Branch
------------------------
Switches output between two inputs based on a condition.
If the condition is true, outputs the True input; otherwise outputs the False input.

Compare
------------------------
Compares input values and outputs 0 or 1 as the result.
You can choose comparison modes such as equal, greater than, and less than.

Logical AND
------------------------
Takes two boolean inputs and outputs 1 only when both are true.

Logical OR
------------------------
Takes two boolean inputs and outputs 1 when either input is true.

Logical NOT
------------------------
Inverts a boolean input. Outputs 0 for 1, and 1 for 0.

Round up
------------------------

Outputs the result of rounding up V.

Round down
------------------------

Outputs the value obtained by rounding down V.

Fractional part
------------------------

Outputs the fractional part of V.
For example, if you enter 1.15, it outputs 0.15.

Maximum
------------------------

Outputs large value at V1 and V2.

Minimum
------------------------

Outputs small value at V1 and V2.

Power
------------------------

Outputs the value of Base raised to the power of Exp.

SquareRoot
------------------------

Outputs the root of V.

Clamp
------------------------

Outputs a value in which V is between Min and Max.

Dot
------------------------

Outputs the inner product of V1 and V2.

Cross
------------------------

Outputs the cross product of V1 and V2.

Normalize
------------------------

Outputs the normalized value of V.
Make sure the length of the input number is 1.

LinearInterpolate
--------------------------------

Outputs the value complemented between V1 and V2 by alpha ratio.
If the input is not connected, use the value of the property.

If alpha is 1, V1 is output.
If alpha is 0, output V2.
If alpha is 0.7, V1 x 0.3 + V2 x 0.7 is output.

1-V
------------------------

Outputs 1-V.

Absolute
------------------------

Outputs the absolute value of V.

Sine
------------------------

Outputs V Sine.

Arctangent2
------------------------

Outputs X / Y Arctangent.
If the input is not connected, use the value of the property.

RGB to HSV
--------------------------------
Converts an RGB color value to HSV.
Use this when you want to adjust hue, saturation, and value independently.

HSV to RGB
--------------------------------
Converts an HSV color value to RGB.
Use this when your color adjustments are done in HSV space.

MaskElements
--------------------------------

Extract elements from V.
For example, extract part of number 4 and output number 2.

MergeElements
--------------------------------

Join the elements of V1 and V2.
For example, input number 3 and number 1 and output number 4.
