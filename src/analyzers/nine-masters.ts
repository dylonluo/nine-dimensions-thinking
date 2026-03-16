import type { NineMastersAnalysis } from "../types.js";

function inputSummary(input: string): string {
  return input.trim().slice(0, 80);
}

export function analyzeNineMasters(input: string): NineMastersAnalysis {
  const summary = inputSummary(input);

  return {
    essence: `亚里士多德视角：先定义问题的本质与目的。当前议题的本体是“${summary}”背后的真实目标与边界条件。`,
    contradiction:
      "毛泽东视角：主要矛盾不是所有问题的总和，而是最限制局势演化的那个冲突。先抓主矛盾，再区分敌我与先后顺序。",
    keyTwenty:
      "帕累托视角：找出最能撬动结果的少数变量，例如关键决策者、关键节点、关键资源，而不是平均投入。",
    structure:
      "麦肯锡视角：把问题结构化为目标、路径、资源、阻力、风险、检查点六个模块，确保拆解完整且互不重叠。",
    rootCause:
      "5Why视角：从当前症状向下追问，直到定位到机制层或认知层根因，避免停留在表面执行问题。",
    sixHats: {
      white: "事实：明确目前已知信息、缺失信息和需要验证的数据。",
      red: "情感：识别压力、顾虑、期待和隐性情绪对判断的影响。",
      black: "风险：列出最坏情况、失败路径和关键脆弱点。",
      yellow: "收益：评估一旦推进成功，能带来哪些可量化或可放大的收益。",
      green: "创新：考虑替代路径、重新定义问题或改变行动顺序。",
      blue: "控制：设定决策节奏、责任归属和复盘节点。"
    },
    mentalModels: [
      "反演思维：先问怎样会失败，再反向规避。",
      "机会成本：任何选择都意味着放弃其他路径。",
      "系统效应：局部优化可能破坏整体最优。",
      "激励相容：方案是否让关键角色愿意配合。",
      "二阶影响：短期动作会如何改变中长期局面。"
    ],
    synthesis:
      "黑格尔视角：把目标推进与现实约束统一起来，形成一个既可执行又能持续修正的动态方案。",
    priority: {
      urgent_important: [
        "立即确认局势中的关键风险与不可逆后果。",
        "快速对齐最关键的相关方与决策边界。"
      ],
      important_not_urgent: [
        "补齐缺失信息，建立判断依据。",
        "设计中期路线与复盘机制。"
      ],
      urgent_not_important: [
        "处理需要响应但不该占用核心精力的外部噪音。",
        "将低杠杆协调事项标准化或委派。"
      ],
      neither: [
        "避免为了显得忙碌而增加无效动作。",
        "暂停与核心目标无关的额外扩张。"
      ]
    }
  };
}
