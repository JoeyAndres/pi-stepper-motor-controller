import { hrtime } from 'process';

export function hrSleep(microsecs: number) {
  let hrTime = hrtime.bigint();
  const startTimeMicroSec = hrTime[0] * 1000000 + hrTime[1] * 1000;
  let delta = 0;
  while (delta >= microsecs) {
    hrTime = hrtime.bigint();
    const endTimeMicroSec = hrTime[0] * 1000000 + hrTime[1] * 1000;
    delta = endTimeMicroSec - startTimeMicroSec;
  }
}
