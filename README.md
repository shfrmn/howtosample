# howtosample

> Dead simple file scaffolding tool that fits into any workflow.

## **Note**: This project is currently WIP

## 🚀 Features

**✅ Scaffolds both file structure and file content**

**✅ Works out of the box** - No configuration needed

**✅ Language agnostic** - Works with any text files

**✅ Case-aware** - Preserves naming conventions

## ⚙️ Install

```bash
npm i -D howtosample
# or
yarn add -D howtosample
```

## 📦 Create a sample directory anywhere in your app

For example, if this is your existing app

```bash
src
└── components
    ├── Button
    │   └── ...
    ├── Icon
    │   └── ...
    ├── Input
    │   └── ...
    └── index.ts
```

Create a sample component in a directory named `_sample`. _This directory name is configurable if you need to change it._

```bash
src
└── components
    ├── _sample
    │   ├── Sample.component.jsx
    │   ├── Sample.module.css
    │   └── index.ts
    ├── Button
    │   └── ...
    ├── Icon
    │   └── ...
    ├── Input
    │   └── ...
    └── index.ts
```

Use the name `Sample` for anything you would like to be renamed during scaffolding. _You can configure this too if necessary._

```jsx
import React from 'react'
import styles from './Sample.module.css'

export function Sample(props) {
  const {} = props
  return (
    <div className={styles.sample}>
      <span>Hello, sample!</span>
    </div>
  )
}
```

## 🪄 Try it out

This command will generate a new component named `MyComponent`

```bash
$ howtosample create src/components MyComponent
```

Changed your mind? This command will rename `MyComponent` into `OurComponent` (you will not lose any changes you might have made)

```bash
$ howtosample rename src/components MyComponent OurComponent
```

## 🤖 Set up npm scripts (recommended for JavaScript projects)

```json
{
  "scripts": {
    "component": "howtosample create src/components",
    "story": "howtosample create src/stories",
    "component:rename": "howtosample rename src/components",
    "story:rename": "howtosample rename src/stories"
  }
}
```

Now you can run scaffolding commands like this

```bash
# With npm
$ npm run component MyComponent

# With yarn
$ yarn component MyComponent
```

## Configuration

> TODO

## Non-goals

- 100% correctness (supporting rare edge cases)
- Language awareness (AST parsing)
