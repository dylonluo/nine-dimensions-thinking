import type { Framework, Scene } from "./types.js";

export function selectFramework(scene: Scene): Framework {
  if (scene.type === "technical" && scene.complexity === "simple" && scene.impact === "low") {
    return "four-questions";
  }

  if (
    scene.type === "interpersonal" &&
    scene.complexity === "complex" &&
    scene.impact === "medium"
  ) {
    return "six-dimensions";
  }

  if (scene.type === "strategic" && scene.complexity === "chaotic" && scene.impact === "high") {
    return "nine-masters";
  }

  return "six-dimensions";
}
