---
title: Configuring Panda
description: Customize how Panda works via the `panda.config.ts` file in your project.
---

# Config Reference

Customize how Panda works via the `panda.config.ts` file in your project.

```js
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // your configuration options here...
})
```

## Output css options

### presets

**Type**: `string[]`

**Default**: `['@pandacss/preset-base', '@pandacss/preset-panda']`

The set of reusable and shareable configuration presets.

By default, any preset you add will be smartly merged with the default configuration, with your own configuration acting
as a set of overrides and extensions.

```json
{
  "presets": ["@pandacss/preset-base", "@pandacss/preset-panda"]
}
```

### eject

**Type**: `boolean`

**Default**: `false`

Whether to opt-out of the defaults config presets: [`@pandacss/preset-base`, `@pandacss/preset-panda`]

```json
{
  "eject": true
}
```

### preflight

**Type**: `boolean`

**Default**: `true`

Whether to enable css reset styles.

```json
{
  "preflight": true
}
```

### emitTokensOnly

**Type**: `boolean`

**Default**: `false`

Whether to only emit the `tokens` directory

```json
{
  "emitTokensOnly": false
}
```

### prefix

**Type**: `boolean`

**Default**: `true`

The namespace prefix for the generated css classes and css variables.

Ex: when using a prefix of `panda-`

```json
{
  "prefix": "panda"
}
```

```tsx
import { css } from '../styled-system/css'

const App = () => {
  return <div className={css({ color: 'blue.500' })} />
}
```

would result in:

```css
.panda-text_blue\.500 {
  color: var(--panda-colors-blue-500);
}
```

### separator

**Type**: `'_' | '=' | '-'`

**Default**: `'_'`

The separator for the generated css classes.

```json
{
  "separator": "_"
}
```

Using a `=` with:

```tsx
import { css } from '../styled-system/css'

const App = () => {
  return <div className={css({ color: 'blue.500' })} />
}
```

would result in:

```css
.text\=blue\.500 {
  color: var(--colors-blue-500);
}
```

### optimize

**Type**: `boolean`

**Default**: `true`

Whether to optimize the generated css. This can be set to `false` to boost build times during development.

```json
{
  "optimize": true
}
```

### minify

**Type**: `boolean`

**Default**: `false`

Whether to minify the generated css. This can be set to `true` to reduce the size of the generated css.

```json
{
  "minify": false
}
```

### hash

**Type**: `boolean`

**Default**: `false`

Whether to hash the generated class names. This is useful if want to shorten the class names.

```json
{
  "hash": false
}
```

```tsx
import { css } from '../styled-system/css'

const App = () => {
  return <div className={css({ color: 'blue.500' })} />
}
```

would result in something that looks like:

```css
.dOFUTE {
  color: var(--colors-blue-500);
}
```

## File system options

### emitPackage

**Type**: `boolean`

**Default**: `false`

Whether to emit the artifacts to `node_modules` as a package. Will generate a `package.json` file that contains exports
for each of the the generated `outdir` entrypoints:

- `styled-system/css`
- `styled-system/jsx`
- `styled-system/patterns`
- `styled-system/recipes`
- `styled-system/tokens`
- `styled-system/types`
- `styled-system/styles.css`

```json
{
  "emitPackage": true
}
```

### gitignore

**Type**: `boolean`

**Default**: `true`

Whether to update the .gitignore file.

```json
{
  "gitignore": true
}
```

Will add the following to your `.gitignore` file:

```.gitignore
# Panda
styled-system
styled-system-static
```

### cwd

**Type**: `string`

**Default**: `process.cwd()`

The current working directory.

```json
{
  "cwd": "src"
}
```

### clean

**Type**: `boolean`

**Default**: `false`

Whether to clean the output directory before generating the css.

```json
{
  "clean": false
}
```

### outdir

**Type**: `string`

**Default**: `styled-system`

The output directory for the generated css.

```json
{
  "outdir": "styled-system"
}
```

### include

**Type**: `string[]`

**Default**: `[]`

List of files glob to watch for changes.

```json
{
  "include": ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"]
}
```

### exclude

**Type**: `string[]`

**Default**: `[]`

List of files glob to ignore.

```json
{
  "exclude": []
}
```

### watch

**Type**: `boolean`

**Default**: `false`

Whether to watch for changes and regenerate the css.

```json
{
  "watch": false
}
```

### poll

**Type**: `boolean`

**Default**: `false`

Whether to use polling instead of filesystem events when watching.

```json
{
  "poll": false
}
```

### outExtension

**Type**: `'mjs' | 'js'`

**Default**: `mjs`

File extension for generated javascript files.

```json
{
  "outExtension": "mjs"
}
```

## Design token options

### cssVarRoot

**Type**: `string`

**Default**: `:where(:host, :root)`

The root selector for the css variables.

```json
{
  "cssVarRoot": ":where(:host, :root)"
}
```

### conditions

**Type**: `Extendable<Conditions>`

**Default**: `{}`

The css selectors or media queries shortcuts.

```json
{
  "conditions": { "hover": "&:hover" }
}
```

### globalCss

**Type**: `Extendable<GlobalStyleObject>`

**Default**: `{}`

The global styles for your project.

```json
{
  "globalCss": {
    "html, body": {
      "margin": 0,
      "padding": 0
    }
  }
}
```

### theme

**Type**: `Extendable<AnyTheme>`

**Default**: `{}`

The theme configuration for your project.

```json
{
  "theme": {
    "tokens": {
      "colors": {
        "red": { "value": "#EE0F0F" },
        "green": { "value": "#0FEE0F" }
      }
    },
    "semanticTokens": {
      "colors": {
        "danger": { "value": "{colors.red}" },
        "success": { "value": "{colors.green}" }
      }
    }
  }
}
```

### utilities

**Type**: `Extendable<UtilityConfig>`

**Default**: `{}`

The css utility definitions.

```js
{
  "utilities": {
    extend: {
      borderX: {
        values: ['1px', '2px', '4px'],
        shorthand: 'bx', // `bx` or `borderX` can be used
        transform(value, token) {
          return {
            borderInlineWidth: value,
            borderColor: token('colors.red.200'), // read the css variable for red.200
          }
        },
      },
    },
  }
}
```

### patterns

**Type**: `Extendable<Record<string, AnyPatternConfig>>`

**Default**: `{}`

Common styling or layout patterns for your project.

```js
{
  "patterns": {
    extend: {
      // Extend the default `flex` pattern
      flex: {
        properties: {
          // only allow row and column
          direction: { type: 'enum', value: ['row', 'column'] },
        },
      },
    },
  },
}
```

### staticCss

**Type**: `StaticCssOptions`

**Default**: `{}`

Used to generate css utility classes for your project.

```js
{
  "staticCss": {
    css: [
      {
        properties: {
          margin: ['*'],
          padding: ['*', '50px', '80px'],
        },
        responsive: true,
      },
      {
        properties: {
          color: ['*'],
          backgroundColor: ['green.200', 'red.400'],
        },
        conditions: ['light', 'dark'],
      },
    ],
  },
}
```

### strictTokens

**Type**: `boolean`

**Default**: `false`

Options for the generated typescript definitions.

```json
{
  "strictTokens": false
}
```

## JSX options

### jsxFramework

**Type**: `'react' | 'solid' | 'preact' | 'vue' | 'qwik'`

Options for the generated typescript definitions.

```json
{
  "jsxFramework": "react"
}
```

### jsxFactory

**Type**: `string`

The factory name of the element

```json
{
  "jsxFactory": "panda"
}
```

Ex:

```tsx
<panda.button marginTop="40px">Click me</panda.button>
```

## Documentation options

### studio

**Type**: `Partial<Studio>`

**Default**: `{ title: 'Panda', logo: '🐼' }`

Used to customize the design system studio

```json
{
  "studio": {
    "logo": "🐼",
    "title": "Panda"
  }
}
```

### log level

**Type**: `'debug' | 'info' | 'warn' | 'error' | 'silent'`

**Default**: `info`

The log level for the built-in logger.

```json
{
  "logLevel": "info"
}
```
