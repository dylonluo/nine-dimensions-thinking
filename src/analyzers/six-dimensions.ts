import type { SixDimensionsAnalysis } from "../types.js";

function buildEssence(input: string): string {
  return `第一性原理上，这个问题要回答的是“为了达成目标，哪些条件必须成立”。结合当前输入，核心主题是：${input.trim().slice(0, 70)}。`;
}

export function analyzeSixDimensions(input: string): SixDimensionsAnalysis {
  const trimmed = input.trim();

  return {
    core: {
      essence: buildEssence(trimmed),
      contradiction:
        "主要矛盾通常在“理想目标”和“现实约束”之间。先识别最妨碍结果的那一个瓶颈，而不是同时处理所有问题。",
      keyTwenty:
        "关键20%往往是最少数但最有杠杆的关系、决策或动作。优先找出一个决定结果的节点，而不是做更多平均分配的努力。"
    },
    breakdown:
      "建议按 MECE 拆成：目标定义、参与角色、资源条件、阻力来源、备选路径。若阻力不清晰，再对最大卡点做 5 Why 深挖。",
    perspectives: [
      "事实视角：哪些客观数据或事件已经发生？",
      "关系视角：谁会支持、谁会阻碍、谁需要被提前对齐？",
      "风险视角：如果继续按当前方式推进，最可能出什么问题？",
      "机会视角：有没有能快速放大成果的小切口？",
      "创新视角：是否可以调整流程、角色或表达方式来降阻？",
      "整合视角：什么顺序最能降低摩擦并提高成功率？"
    ],
    synthesis:
      "正题是推进目标，反题是现实阻力，合题是设计一条既不过度理想化也不被现实拖死的折中路径。",
    priority: [
      "先处理影响结果且当前可控的关键事项。",
      "把重要但不紧急的准备动作提前安排，避免后续被动。",
      "把紧急但低杠杆的杂务能委派就委派。",
      "删掉既不重要也不紧急的噪音动作。"
    ]
  };
}
