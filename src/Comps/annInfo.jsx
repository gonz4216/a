import React from 'react'
import './annInfo.css'
const annInfo = () => {
  return (
    <div className='annInfo'>
            <div className="ann__nav">         
              <a className="ann__nav--link__btn" href="/"> RETURN</a> 
              <a className="ann__nav--link__btn" href="/solarinfo"> TOTAL SOLAR</a> 
            </div>

        <div className="ann__container">
          <div className="ann__hero--title__card">
            <div className="ann__hero--title">October 14, 2023, Solar Eclipse </div>
            <div className="ann__hero--para">
              On Oct. 14, 2023, an annular solar eclipse will cross North, Central, and South America. 
              This eclipse will be visible for millions of people in the Western Hemisphere.
              </div>
            <div className="ann__hero--para">
              During an annular eclipse, it is never safe to look directly
              at the Sun without specialized eye protection designed for solar viewing.
              </div>
          </div>
         

          


          <div className="ann__timer--container">
              <div className="ann__timer--timer">
                00:00:00:00:00:00
                </div>
                <div className="ann__timer--text">YRS MOS DAYS HRS MINS SECS</div>
          </div>
        </div>
         
    </div>
  )
}

export default annInfo