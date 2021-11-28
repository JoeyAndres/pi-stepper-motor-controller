import {StepperMotorController} from './StepperMotorController';

const motorController = new StepperMotorController(13, 16, 17);
motorController.run(1000, 1);
