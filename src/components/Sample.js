import React from 'react';

const Sample = () => {
    console.log(window, 'window in the app is here');
    return (
        <div style={{ color: 'red' }}>I am from external application</div>
    );
};

// Attach to the window object
window.Sample = Sample; // No need to check for .default since you're using default export

export default Sample;
