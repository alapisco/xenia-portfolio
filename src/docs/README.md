# Component Documentation

This directory contains documentation, examples, and type definitions for components.

## Structure

```
docs/
  components/
    Section.examples.jsx   # Interactive examples and usage patterns
    Section.types.js       # JSDoc type definitions
```

## Usage

### Examples File
The `.examples.jsx` files contain:
- Real usage patterns
- Copy-paste ready code snippets  
- Common implementation scenarios
- Best practice demonstrations

### Types File
The `.types.js` files contain:
- JSDoc type definitions
- Parameter documentation
- IDE autocomplete support
- TypeScript-style documentation without TypeScript

## Import Paths

Since these are documentation files, they reference the actual components:

```jsx
// Examples file imports
import Section from '../../components/layout/Section';

// Your components import normally
import Section from './components/layout/Section';
```

## Best Practices

1. **Keep examples up-to-date** with component changes
2. **Use realistic data** in examples, not placeholder text
3. **Document edge cases** and common mistakes
4. **Show responsive behavior** in examples when relevant
5. **Include accessibility examples** when applicable
