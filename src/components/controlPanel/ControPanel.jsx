// ControlPanel.jsx
import React from 'react';
import './controlPanel.css';

function ControlPanel({ onOptionChange, showCapacity, showNoiseLevel }) {
    return (
        <div className="control-panel">
            <label>
                <input
                    type="checkbox"
                    checked={showCapacity}
                    onChange={(e) => onOptionChange('capacity', e.target.checked)}
                />
                Show Capacity
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={showNoiseLevel}
                    onChange={(e) => onOptionChange('noiseLevel', e.target.checked)}
                />
                Show Noise Level
            </label>
        </div>
    );
}

export default ControlPanel;
