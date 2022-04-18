# Overview

A cooking timer made with Raspberry Pi Pico, a 7-segment LED display (TM1634), a rotary encoder, and an active buzzer.

![cover](https://github.com/niklauslee/cooking-timer/blob/main/images/cover.jpg?raw=true)

# Components

| Part                 | Quantity | Note                        |
| -------------------- | -------- | --------------------------- |
| Raspberry Pi Pico    | 1        |                             |
| TM1634               | 1        | 4-digits 7-segment          |
| Rotary Encoder       | 1        | with push button            |
| Active Buzzer        | 1        |                             |
| 3D printed case      | 3 pieces |                             |
| Slide switch         | 1        |                             |
| 2xAAA Battery holder | 1        |                             |
| M2x5 crews           | 11       |                             |
| Perfboard            | 1        | 3cm x 7cm                   |
| Rare-earth magnets   | 8        | diameter 3mm, thickness 3mm |

![components](https://github.com/niklauslee/cooking-timer/blob/main/images/components.jpg?raw=true)

# Wiring

I first made a prototype on a breadboard and then wiring parts on a perfboard.

| Pico | TM1634 | Encoder | Buzzer | Battery | Switch |
| ---- | ------ | ------- | ------ | ------- | ------ |
| VSYS |        |         |        |         | P      |
|      |        |         |        | +       | O      |
| 3V3  | VCC    | VCC (+) | VCC    |         |        |
| GND  | GND    | GND     | GND    | -       |        |
| GP0  | CLK    |         |        |         |        |
| GP1  | DIO    |         |        |         |        |
| GP2  |        | CLK     |        |         |        |
| GP3  |        | DT      |        |         |        |
| GP4  |        | SW      |        |         |        |
| GP5  |        |         | IO     |         |        |

![circuit](https://github.com/niklauslee/cooking-timer/blob/main/images/circuit.jpg?raw=true)

![assembly1](https://github.com/niklauslee/cooking-timer/blob/main/images/assembly1.jpg?raw=true)

![assembly2](https://github.com/niklauslee/cooking-timer/blob/main/images/assembly2.jpg?raw=true)

# Assembly

I made a 3D model for the case with Tinkercad and then print it with FDM-type 3D printer (Ender 5). Here is the link of the model.

- Tinkercad: https://www.tinkercad.com/things/i0qbI05kQMx

![design](https://github.com/niklauslee/cooking-timer/blob/main/images/design.png?raw=true)

After the case printing, the magnets should be inserted into the 8 holes. Pay attention to the insertion direction of the magnets so that the two case pieces can be stick well.

![case1](https://github.com/niklauslee/cooking-timer/blob/main/images/case1.jpg?raw=true)

Then mount 7-segment display, active buzzer, and perfboard into the case body with screws. The rotary encoder should be mounted with a nut in the top hole and the battery holder and the slide switch should be mounted on the case back cover. **Before mounting the Pico, the code should be uploaded.**

![case2](https://github.com/niklauslee/cooking-timer/blob/main/images/case2.jpg?raw=true)

Lastly the rotary encoder should be inserted into the 3D-printed top handle.

# Usage

Set time by turning the encoder (increate in clockwise, decrease in anti-clockwise). To start the timer press the encoder. When timer get to zero, the buzzer will generate beep sound.

In default 30 seconds is the step of the encoder. You can change by set `step` variable in the code.

# See also

- [TM1637](https://github.com/niklauslee/tm1637)
- [Rotary Encoder](https://github.com/niklauslee/rotary-encoder)
- [Active Buzzer](https://github.com/niklauslee/active-buzzer)
