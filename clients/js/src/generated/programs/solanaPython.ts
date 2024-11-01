/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  ClusterFilter,
  Context,
  Program,
  PublicKey,
} from '@metaplex-foundation/umi';
import {
  getSolanaPythonErrorFromCode,
  getSolanaPythonErrorFromName,
} from '../errors';

export const SOLANA_PYTHON_PROGRAM_ID =
  'PYTHoNbHGKp2V1EL9ggCMrFvdT7b23EVU8DyDLfEXcC' as PublicKey<'PYTHoNbHGKp2V1EL9ggCMrFvdT7b23EVU8DyDLfEXcC'>;

export function createSolanaPythonProgram(): Program {
  return {
    name: 'solanaPython',
    publicKey: SOLANA_PYTHON_PROGRAM_ID,
    getErrorFromCode(code: number, cause?: Error) {
      return getSolanaPythonErrorFromCode(code, this, cause);
    },
    getErrorFromName(name: string, cause?: Error) {
      return getSolanaPythonErrorFromName(name, this, cause);
    },
    isOnCluster() {
      return true;
    },
  };
}

export function getSolanaPythonProgram<T extends Program = Program>(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): T {
  return context.programs.get<T>('solanaPython', clusterFilter);
}

export function getSolanaPythonProgramId(
  context: Pick<Context, 'programs'>,
  clusterFilter?: ClusterFilter
): PublicKey {
  return context.programs.getPublicKey(
    'solanaPython',
    SOLANA_PYTHON_PROGRAM_ID,
    clusterFilter
  );
}
