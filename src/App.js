import React, { useState } from 'react';
import './App.css'; // Make sure to style your components with CSS

// This would be your main App component.
function App() {
  // Here you could fetch real data from a backend service to populate the library branches.
  // For simplicity, this is hardcoded.
  const libraries = [
    { name: 'Architecture', occupancy: 53 },
    { name: 'Baillieu', occupancy: 45 },
    { name: 'Brownless Biomed', occupancy: 32 },
    { name: 'ERC', occupancy: 50 },
    // ... other libraries
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find study space</h1>
      </header>
      <main>
        <section className="Library-dropdowns">
          {/* Dropdown components */}
        </section>
        <section className="Library-branches">
          {libraries.map((library) => (
            <Branch key={library.name} library={library} />
          ))}
        </section>
      </main>
    </div>
  );
}

// This would be a component to represent each branch.
function Branch({ library }) {
  return (
    <div className="Library-branch">
      <h2>{library.name}</h2>
      <div className="Occupancy-indicator">
        <div className="Occupancy-bar" style={{ width: `${library.occupancy}%` }}></div>
      </div>
      <span>{library.occupancy}%</span>
      {/* Additional details like floor plans, study space types, etc. */}
    </div>
  );
}

export default App;
