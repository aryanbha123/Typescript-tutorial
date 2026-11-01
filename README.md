# TypeScript Tutorial

My TypeScript learning notes: a plain TypeScript playground plus a small React + TypeScript practice app.

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## About

This repo is a personal practice space for learning TypeScript. It has two parts: `Typescript/`, a single annotated file of language examples compiled with `tsc`, and `Project/`, a Vite React app that practices typing component props.

## What's Covered

In `Typescript/src/index.ts` (examples are kept as commented-out snippets, one topic at a time):

- Primitive types (`number`, `string`, `boolean`, `any`)
- Union types and literal types (`"light" | "dark"`)
- Typed functions, function type aliases and rest parameters
- Type aliases and object types, `readonly` properties
- Arrays (`number[]`, `Array<string>`)
- Interfaces, optional members and optional chaining calls, `extends`
- The `never` type
- Classes, `private` fields, getters and inheritance

In `Project/`:

- A `Box` component with a typed `BoxProps` (required, optional and literal-typed props, plus a callback prop)

## Project Structure

```
Typescript/
  src/index.ts      # TypeScript examples
  build/            # tsc output (index.js, .d.ts, source maps) + index.html to run it
  tsconfig.json     # strict mode, NodeNext modules, ES2020 target
Project/            # Vite + React + TypeScript app
  src/App.tsx
  src/components/Box.tsx
```

## Getting Started

**Prerequisites:** Node.js and npm.

Compile the TypeScript examples (uncomment the snippet you want to try first):

```bash
cd Typescript
npx tsc            # outputs to build/
node build/index.js
```

Run the React practice app:

```bash
cd Project
npm install
npm run dev
```

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
