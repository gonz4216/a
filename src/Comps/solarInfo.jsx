import React from 'react'
import './solar.css'

const solarInfo = () => {
  return (
    <div className='solarInfo'>
            <div className="ann__nav">         
              <a className="ann__nav--link__btn" href="/"> RETURN</a> 
              <a className="ann__nav--link__btn" href="/anninfo"> ANNULAR SOLAR </a> 
            </div>

        <div className="ann__container">
          <div className="ann__hero--title__card">
            <div className="solar__hero--title">April 8, 2024, Solar Eclipse</div>
            <div className="ann__hero--para">
            On April 8, 2024, a total solar eclipse will cross North America, passing over Mexico, United States, and Canada
              </div>
            <div className="ann__hero--para">
            On April 8, 2024, a total solar eclipse will cross North America, passing over Mexico, the United States, and Canada.
             A total solar eclipse happens when the Moon passes between the Sun and Earth, completely blocking the face of the Sun. 
             The sky will darken as if it were dawn or dusk.
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

export default solarInfo