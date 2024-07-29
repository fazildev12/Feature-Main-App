import React from 'react'

const Sample = () => {
    console.log(window,'window in the app is here')
  return (
    <div style={{color:'red'}}>I am from extenal application</div>
  )
}


// Attach to the window object
window.Sample = Sample;