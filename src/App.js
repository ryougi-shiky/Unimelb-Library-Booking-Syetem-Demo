import React, { useState } from 'react';
import './App.css'; // Make sure to style your components with CSS
import TopBar from './components/topbar/TopBar';
import Branch from './components/branch/Branch';

// This would be your main App component.
function App() {
  // Here you could fetch real data from a backend service to populate the library branches.
  // For simplicity, this is hardcoded.
  const libraries = [
    { name: 'ARCHITECTURE', occupancy: 53 },
    { name: 'BAILLIEU', occupancy: 45 },
    { name: 'BROWNLESS BIOMED', occupancy: 32 },
    { name: 'ERC', occupancy: 50 },
    { name: 'GIBLIN EUNSON', occupancy: 64 },
    { name: 'LAW', occupancy: 43 },
    { name: 'BURNLEY', occupancy: 9 },
    { name: 'SOUTHBANK', occupancy: 23 },
    { name: 'WERRIBEE', occupancy: 22 },
  ];

  return (
    <div className="App">
      <TopBar />

      <main>
        <section className="Library-dropdowns">
          {/* Dropdown components */}
        </section>
        <h1>Find Your Study Space</h1>
        <section className="Library-branches">
          {libraries.map((library) => (
            <Branch key={library.name} library={library} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
