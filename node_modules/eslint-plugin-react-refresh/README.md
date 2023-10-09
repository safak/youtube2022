# eslint-plugin-react-refresh [![npm](https://img.shields.io/npm/v/eslint-plugin-react-refresh)](https://www.npmjs.com/package/eslint-plugin-react-refresh)

Validate that your components can safely be updated with fast refresh.

## Limitations

⚠️ To avoid false positive, by default this plugin is only applied on `tsx` & `jsx` files. See options to run on JS files. ⚠️

The plugin rely on naming conventions (i.e. use PascalCase for components, camelCase for util functions). This is why there are some limitations:

- `export *` are not supported and will be reported as an error
- Anonymous function are not supported (i.e `export default function() {}`)
- Class components are not supported
- Full uppercase export would be considered as an error. It can be disabled locally when it's effectively a React component:

```jsx
// eslint-disable-next-line react-refresh/only-export-components
export const CMS = () => <></>;
```

I may publish a rule base on type information from [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) to improve some limitations and catch some naming convention issues (like non-component function starting with an uppercase).

## Installation

```sh
npm i -D eslint-plugin-react-refresh
```

## Usage

```json
{
  "plugins": ["react-refresh"],
  "rules": {
    "react-refresh/only-export-components": "warn"
  }
}
```

## Fail

```jsx
export const foo = () => {};
export const Bar = () => <></>;
```

```jsx
export const CONSTANT = 3;
export const Foo = () => <></>;
```

```jsx
export default function () {}
export default compose()(MainComponent)
```

```jsx
export * from "./foo";
```

```jsx
const Tab = () => {};
export const tabs = [<Tab />, <Tab />];
```

```jsx
const App = () => {};
createRoot(document.getElementById("root")).render(<App />);
```

## Pass

```jsx
export default function Foo() {
  return <></>;
}
```

```jsx
const foo = () => {};
export const Bar = () => <></>;
```

```jsx
import { App } from "./App";
createRoot(document.getElementById("root")).render(<App />);
```

## Options

### checkJS

If your using JSX inside `.js` files (which I don't recommend because it forces you to configure every tool you use to switch the parser), you can still use the plugin by enabling this option. To reduce the number of false positive, only files importing `react` are checked.

```json
{
  "react-refresh/only-export-components": ["warn", { "checkJS": true }]
}
```
