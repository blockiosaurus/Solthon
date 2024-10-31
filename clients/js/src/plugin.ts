import { UmiPlugin } from '@metaplex-foundation/umi';
import { createSolanaPythonProgram } from './generated';

export const solanaPython = (): UmiPlugin => ({
  install(umi) {
    umi.programs.add(createSolanaPythonProgram(), false);
  },
});
