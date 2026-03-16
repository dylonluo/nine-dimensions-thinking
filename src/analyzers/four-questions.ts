import type { FourQuestionsAnalysis } from "../types.js";

function summarizeFocus(input: string): string {
  return `当前最重要的是先澄清问题目标与限制条件，避免被表面现象带偏。问题核心围绕：${input.trim().slice(0, 60)}。`;
}

export function analyzeFourQuestions(input: string): FourQuestionsAnalysis {
  const trimmed = input.trim();

  return {
    whatMatters: summarizeFocus(trimmed),
    howToBreakdown:
      "先拆成目标、现状、约束、可选方案四部分，再逐一确认哪些信息已知、哪些需要补充，最后收敛到最小可执行方案。",
    missingPerspectives: [
      "是否忽略了真正的成功标准，而只盯着当前症状？",
      "是否少了关键约束，例如时间、资源、权限或依赖关系？",
      "是否从执行者、协作者和最终受影响者三个视角分别看过问题？"
    ],
    nextActions: [
      `用一句话重述问题：${trimmed.slice(0, 50)}${trimmed.length > 50 ? "..." : ""}`,
      "列出3个已知事实与3个未知假设，先验证最关键假设。",
      "确定一个今天就能推进的最小动作，并设置检查点。"
    ]
  };
}
