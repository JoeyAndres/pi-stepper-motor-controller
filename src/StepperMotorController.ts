import { Gpio } from 'onoff';
import { sleep } from './lib';

export class StepperMotorController {
  private readonly dirPin: Gpio;
  private readonly stepPin: Gpio;
  private readonly enablePin: Gpio;

  constructor(dirPin: number, stepPin: number, enablePin: number) {
    this.dirPin = new Gpio(dirPin, 'out');
    this.stepPin = new Gpio(stepPin, 'out');
    this.enablePin = new Gpio(enablePin, 'out');
  }

  async forward() {
    await this.dirPin.write(0);
  }

  async reverse() {
    await this.dirPin.write(1);
  }

  async run(steps: number, halfStepDelayMs: number) {
    for (let i = 0; i < steps; i++) {
      await this.stepPin.write(1);
      await sleep(halfStepDelayMs);
      await this.stepPin.write(0);
      await sleep(halfStepDelayMs);
    }
  }
}
