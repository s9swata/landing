# Squiggle Animation React Component

This project contains a React component that creates an animated SVG path that draws progressively as the user scrolls down the page.

## Components

### `SquiggleAnimationComponent.jsx`
A reusable React component that renders an animated SVG squiggle path.

#### Props
- `className` (string, default: 'squiggle') - CSS class name for the SVG element
- `strokeColor` (string, default: '#CD3C2F') - Color of the squiggle line
- `strokeWidth` (number, default: 30) - Width of the squiggle line
- `pathData` (string) - SVG path data for the squiggle shape
- `width` (number, default: 1000) - SVG width
- `height` (number, default: 2000) - SVG height
- `viewBox` (string, default: '0 0 1000 2000') - SVG viewBox
- `style` (object, default: {}) - Additional CSS styles

#### Basic Usage
```jsx
import SquiggleAnimation from './SquiggleAnimationComponent';

function App() {
  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      <h1>Scroll to see the animation</h1>
      <SquiggleAnimation />
    </div>
  );
}
```

#### Customized Usage
```jsx
<SquiggleAnimation 
  strokeColor="#ff6b6b"
  strokeWidth={20}
  style={{
    width: '80vw',
    left: '10vw',
    height: '250vh'
  }}
/>
```

### `DancehausPage.jsx`
A complete page component that replicates the original HTML layout with the squiggle animation.

```jsx
import DancehausPage from './DancehausPage';

function App() {
  return <DancehausPage />;
}
```

## Files
- `SquiggleAnimationComponent.jsx` - Main reusable animation component
- `SquiggleAnimation.jsx` - Simpler version of the component
- `DancehausPage.jsx` - Complete page layout component
- `DancehausPage.css` - Styles for the page layout
- `ExampleUsage.jsx` - Usage examples

## How It Works
The component uses:
1. `useRef` to get references to the SVG and path elements
2. `useEffect` to set up scroll event listeners
3. `getTotalLength()` to get the path length
4. `strokeDasharray` and `strokeDashoffset` CSS properties to create the drawing effect
5. Scroll position calculations to determine how much of the path to reveal

## Installation
Make sure you have React installed in your project:
```bash
npm install react react-dom
```

## Dependencies
- React (with hooks support)
- No additional dependencies required

## Browser Support
Works in all modern browsers that support:
- SVG
- CSS stroke-dasharray and stroke-dashoffset
- JavaScript scroll events
