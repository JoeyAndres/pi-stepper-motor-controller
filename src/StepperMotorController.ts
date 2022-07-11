import { Gpio } from 'onoff';
import { sleep } from './lib';

export class StepperMotorController {
  private readonly dirPin: Gpio;
  private readonly stepPin: Gpio;
  private readonly enablePin: Gpio;

  constructor(dirPin: number, stepPin: number, enablePin: number) {
    this.dirPin = new Gpio(dirPin, 'out');
    this.dirPin.writeSync(0);
    this.stepPin = new Gpio(stepPin, 'out');
    this.enablePin = new Gpio(enablePin, 'out');
    this.enablePin.writeSync(0);
  }

  public async forward() {
    await this.dirPin.write(0);
  }

  public async reverse() {
    await this.dirPin.write(1);
  }

  public async enable() {
    await this.enablePin.write(0);
  }

  public async disable() {
    await this.enablePin.write(1);
  }

  public async run(steps: number, stepDelaySeconds: number) {
    for (let i = 0; i < steps; i++) {
      this.stepPin.writeSync(1);
      await sleep(stepDelaySeconds);
      this.stepPin.writeSync(0);
      await sleep(stepDelaySeconds);
    }
  }
}
