import React from 'react';

const Sample = () => {
    console.log(window, 'window in the app is here');
    return (
        <div style={{ color: 'red' }}>I am from external application</div>
    );
};

// Attach to the window object
window.Sample = Sample.default ? Sample.default : Sample; // Ensure you access the default export if it exists
