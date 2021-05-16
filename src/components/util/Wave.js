import '../assets/css/wave.css';

import React from 'react';

function Wave() {
    return (
        <div style={{height: "150px", overflow: "hidden"}}>
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: "100%", width: "100%"}}>
                <path className="wave-1" d="M-0.00,49.85 C150.00,149.60 349.20,-49.87 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" style={{stroke: "none", fill: "#e1efe3"}}></path>
                <path className="wave-2" d="M-0.00,49.85 C150.00,149.60 349.20,-49.87 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" style={{stroke: "none", fill: "#e1efe3"}}></path>
            </svg>
        </div>
    );
}

export default Wave;