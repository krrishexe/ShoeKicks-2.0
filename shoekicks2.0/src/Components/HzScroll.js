import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

function HzScroll() {

    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}

  return (
    <div style={parent}>
        <HorizontalScroll>
            <div style={child} />
            <div style={child} />
            <div style={child} />
        </HorizontalScroll>
      </div>
  )
}

export default HzScroll
