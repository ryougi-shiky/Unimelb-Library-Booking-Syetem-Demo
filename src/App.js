import React, { useState } from 'react';
import './App.css'; // Make sure to style your components with CSS
import TopBar from './components/topbar/TopBar';
import Branch from './components/branch/Branch';
import ControlPanel from './components/controlPanel/ControPanel';

// This would be your main App component.
function App() {
  const [showCapacity, setShowCapacity] = useState(true);
  const [showNoiseLevel, setShowNoiseLevel] = useState(false);
  // Here you could fetch real data from a backend service to populate the library branches.
  // For simplicity, this is hardcoded.
  const libraries = [
    { name: 'ARCHITECTURE', occupancy: 53, noiseLevel: 'Low' },
    { name: 'BAILLIEU', occupancy: 45, noiseLevel: 'High' },
    { name: 'BROWNLESS BIOMED', occupancy: 32, noiseLevel: 'Low' },
    { name: 'ERC', occupancy: 50, noiseLevel: 'Medium' },
    { name: 'GIBLIN EUNSON', occupancy: 64, noiseLevel: 'Low' },
    { name: 'LAW', occupancy: 43, noiseLevel: 'Low' },
    { name: 'BURNLEY', occupancy: 9, noiseLevel: 'Medium' },
    { name: 'SOUTHBANK', occupancy: 23, noiseLevel: 'Low' },
    { name: 'WERRIBEE', occupancy: 22, noiseLevel: 'Low' },
  ];

  const handleOptionChange = (option, isChecked) => {
    if (option === 'capacity') {
      setShowCapacity(isChecked);
    } else if (option === 'noiseLevel') {
      setShowNoiseLevel(isChecked);
    }
  };

  return (
    <div className="App">
      <TopBar />

      <main>
        <section className="Library-dropdowns">
          {/* Dropdown components */}
        </section>
        <h1 className='App-header'>Find Your Study Space</h1>
        <section className="Library-branches">
          {libraries.map((library) => (
            <Branch key={library.name} library={library} showCapacity={showCapacity} showNoiseLevel={showNoiseLevel} />
          ))}
        </section>
      </main>
      <ControlPanel onOptionChange={handleOptionChange} showCapacity={showCapacity} showNoiseLevel={showNoiseLevel} />
    </div>
  );
}

export default App;
