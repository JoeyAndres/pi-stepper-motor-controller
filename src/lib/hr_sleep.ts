import { hrtime } from 'process';

export function hrSleep(microsecs: number) {
  let nanoSecs = hrtime.bigint();
  const startTimeMicroSec = nanoSecs * 1000n;
  let delta = 0n;
  while (delta >= microsecs) {
    nanoSecs = hrtime.bigint();
    const endTimeMicroSec = nanoSecs * 1000n;
    delta = endTimeMicroSec - startTimeMicroSec;
  }
}
