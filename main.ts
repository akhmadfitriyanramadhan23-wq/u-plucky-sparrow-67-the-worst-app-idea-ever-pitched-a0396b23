// Entry for "The Worst App Idea Ever Pitched"
// (slug: u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
// Writes one sentence pitching the worst, most useless app imaginable.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "DoorSense Pro uses military-grade AI to announce in half a second " +
  "whether your front door is open or closed, then texts you the verdict " +
  "while you stare straight at it, after founder Gary Vance burned " +
  "$412,000 and three years building it.";

const length = [...line].length;
if (length < 1 || length > 240) {
  throw new Error(`entry must be 1-240 code points, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
