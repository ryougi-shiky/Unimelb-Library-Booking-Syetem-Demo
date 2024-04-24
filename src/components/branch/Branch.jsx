// Branch.jsx
import React from 'react';
import './branch.css'; // Make sure to create a Branch.css file for styles

function Branch({ library }) {
    return (
        <div className="library-branch">
            <div className="branch-info">
                <h2 className="branch-name">{library.name}</h2>
                <div className="occupancy-bar-outer">
                    <div
                        className="occupancy-bar-inner"
                        style={{ width: `${library.occupancy}%`, backgroundColor: getBarColor(library.occupancy) }}
                    ></div>
                </div>
                <span className="occupancy-percentage">{library.occupancy}%</span>
            </div>
        </div>
    );
}

function getBarColor(occupancy) {
    if (occupancy < 50) return '#4CAF50'; // green
    if (occupancy < 75) return '#FFEB3B'; // yellow
    return '#F44336'; // red
}

export default Branch;
