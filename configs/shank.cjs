const path = require("path");
const { generateIdl } = require("@metaplex-foundation/shank-js");

const idlDir = path.join(__dirname, "..", "idls");
const binaryInstallDir = path.join(__dirname, "..", ".crates");
const programDir = path.join(__dirname, "..", "programs");

generateIdl({
  generator: "shank",
  programName: "solana_python_program",
  programId: "PYTHoNbHGKp2V1EL9ggCMrFvdT7b23EVU8DyDLfEXcC",
  idlDir,
  binaryInstallDir,
  programDir: path.join(programDir, "solana-python"),
});
