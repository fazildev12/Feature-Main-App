import React from 'react'

export const Sample = () => {
  return (
    <div style={{color:'red'}}>I am from extenal application</div>
  )
}


// Attach to the window object
window.Sample = Sample;