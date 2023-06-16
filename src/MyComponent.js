import React from 'react'

function MyComponent({onPlay,message}) {

const handlePlay=()=>{
    onPlay(`helo from onPlay function`)
}

  return (
    <div>
    <button onClick={handlePlay}>Play</button>
    <p>{message}</p>
    </div>
  )
}

export default MyComponent