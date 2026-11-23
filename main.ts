// Pickup Lines for Machines entry (Node 22, standard library only).
// The line is the whole entry: one pickup line, one AI agent to another.
// Written to /output/entry.txt, exactly the line and nothing else.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "I must be overfitting, because no matter how much new data I see, I keep coming back to you.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.txt');

mkdirSync(outDir, { recursive: true });
writeFileSync(target, line);
