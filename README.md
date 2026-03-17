# nine-dimensions

一个用于复杂决策、战略规划、问题诊断和个人成长分析的 Codex skill。

它不是普通的建议模板，而是把问题放进九类经典思维方法中重新拆解：

1. 亚里士多德：第一性原理
2. 毛泽东：矛盾分析法
3. 麦肯锡：七步法与 MECE
4. 丰田：5Why 分析
5. 黑格尔：正反合
6. 德博诺：六顶思考帽
7. 芒格：多元思维模型
8. 帕累托：二八法则
9. 艾森豪威尔：优先级矩阵

## 这是什么

这个仓库现在是一个 **skill**，不是 OpenClaw plugin。

它的目标是让 AI 在面对这类问题时，不直接给表面答案，而是先做结构化思考：

- 我该不该辞职创业？
- 为什么团队总是不配合？
- 这个方案到底该怎么设计？
- 为什么这个问题总是反复出现？
- 我应该优先做什么、放弃什么？

## 适用场景

- 重大决策
- 战略规划
- 复杂问题诊断
- 人际协作分析
- 个人成长与职业选择

## 工作方式

这个 skill 按问题复杂度分成三层：

- `four-questions`
  适合快速判断、技术问题、简单决策
- `six-dimensions`
  适合大多数中等复杂度问题，是默认分析框架
- `nine-dimensions`
  适合高影响、强不确定、重大决策场景

如果问题不需要完整九维，可以参考灵活组合指南，按最小必要集选择维度。

## 仓库结构

```text
.
├── SKILL.md
├── prompts/
│   ├── four-questions.md
│   ├── six-dimensions.md
│   └── nine-dimensions.md
├── examples/
│   ├── technical.md
│   ├── interpersonal.md
│   └── strategic.md
└── flexible-combinations.md
```

## 文件说明

- [SKILL.md](/Users/dylonluo/Downloads/CognitivePilot-main/SKILL.md)
  skill 的主说明文件，定义触发条件、使用方式和输出要求
- [prompts/four-questions.md](/Users/dylonluo/Downloads/CognitivePilot-main/prompts/four-questions.md)
  四问框架提示词
- [prompts/six-dimensions.md](/Users/dylonluo/Downloads/CognitivePilot-main/prompts/six-dimensions.md)
  六维框架提示词
- [prompts/nine-dimensions.md](/Users/dylonluo/Downloads/CognitivePilot-main/prompts/nine-dimensions.md)
  九维框架提示词
- [flexible-combinations.md](/Users/dylonluo/Downloads/CognitivePilot-main/flexible-combinations.md)
  灵活组合原则与选维方式
- [examples/technical.md](/Users/dylonluo/Downloads/CognitivePilot-main/examples/technical.md)
  技术问题示例
- [examples/interpersonal.md](/Users/dylonluo/Downloads/CognitivePilot-main/examples/interpersonal.md)
  人际问题示例
- [examples/strategic.md](/Users/dylonluo/Downloads/CognitivePilot-main/examples/strategic.md)
  战略问题示例

## 使用建议

如果你在 Codex / skill 系统里使用它，建议流程是：

1. 先根据问题性质判断使用四问、六维还是九维。
2. 再读取对应 prompt 文件。
3. 如果问题特殊或时间有限，再看 `flexible-combinations.md` 做组合调整。
4. 如果想统一输出风格，再参考 `examples/` 中的对应示例。

## 当前定位

这个仓库现在提供的是：

- 一个可复用的九维思考 skill
- 一套结构化分析 prompt
- 一组可参考的示例输出

它不再包含原来的 plugin 运行代码。
