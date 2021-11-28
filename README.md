pi-stepper-motor-controller
===========================
# Description
Low-level _Raspberry Pi Stepper Motor Controller_. Low-level in a sense
that the `StepperMotorController` class that makes up this project
have one purpose, that is to turn a motor _forward_ or _reverse_ given
number of steps and _half step delay_, nothing more.

# Example
Suppose we have a stepper motor controller and the direction pin is in
13, step pin is 16, and enable pin is in 17. To run it
1000 steps, where each half step is delayed by 1ms:
```ts
import { StepperMotorController } from './StepperMotorController';

const motorController = new StepperMotorController(13, 16, 17);
motorController.run(1000, 1);
```
