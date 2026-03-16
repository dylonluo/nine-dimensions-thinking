# CognitivePilot

OpenClaw plugin for cognitive enhancement and guided thought processing.

## Features

- Detects the scene type from plain text input
- Chooses a suitable framework automatically
- Supports `four-questions`, `six-dimensions`, and `nine-masters`
- Returns readable Markdown or structured JSON
- Exposes an OpenClaw tool named `review`

## Project Structure

```text
plugins/nine-masters-review/
├── package.json
├── tsconfig.json
├── index.ts
├── src/
│   ├── scene-detector.ts
│   ├── framework-selector.ts
│   ├── analyzers/
│   │   ├── four-questions.ts
│   │   ├── six-dimensions.ts
│   │   └── nine-masters.ts
│   └── types.ts
├── openclaw.plugin.json
└── README.md
```

## Usage

Install dependencies:

```bash
npm install
```

Run type check:

```bash
npm run check
```

Run a quick CLI example:

```bash
npm start -- "团队里沟通反复、优先级不清，项目推进越来越慢"
```

## API

```ts
import { review } from "./index.js";

const result = await review("如何平衡团队冲突和项目交付？");
console.log(result);
```

You can also force a framework:

```ts
await review("是否要调整业务方向", {
  framework: "nine-masters",
  format: "markdown"
});
```

## Notes

- Scene detection uses keyword matching for simplicity and reliability.
- All analysis modules return structured data.
- The default output is Markdown.
