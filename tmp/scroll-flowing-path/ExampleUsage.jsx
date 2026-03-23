import React from 'react';
import SquiggleAnimation from './SquiggleAnimationComponent';

// Example 1: Basic usage
const App = () => {
  return (
    <div style={{ height: '200vh', position: 'relative' }}>
      <h1>Scroll to see the animation</h1>
      <div style={{ height: '100px', backgroundColor: '#f0f0f0', margin: '20px 0' }}>
        Content block 1
      </div>
      <div style={{ height: '100px', backgroundColor: '#e0e0e0', margin: '20px 0' }}>
        Content block 2
      </div>
      <div style={{ height: '100px', backgroundColor: '#d0d0d0', margin: '20px 0' }}>
        Content block 3
      </div>
      
      {/* Basic squiggle animation */}
      <SquiggleAnimation />
    </div>
  );
};

// Example 2: Customized animation
const CustomizedApp = () => {
  return (
    <div style={{ height: '300vh', position: 'relative', backgroundColor: '#faf4e7' }}>
      <h1>Custom Squiggle Animation</h1>
      
      {/* Customized squiggle with different colors and stroke width */}
      <SquiggleAnimation 
        strokeColor="#ff6b6b"
        strokeWidth={20}
        style={{
          width: '80vw',
          left: '10vw',
          height: '250vh'
        }}
      />
      
      <div style={{ padding: '50px', position: 'relative', zIndex: 2 }}>
        <p>This is content that appears above the squiggle animation.</p>
        <p>The squiggle will draw as you scroll down the page.</p>
      </div>
    </div>
  );
};

// Example 3: Using with the original Dancehaus layout
import DancehausPage from './DancehausPage';

const DancehausApp = () => {
  return <DancehausPage />;
};

export default App;
export { CustomizedApp, DancehausApp };
