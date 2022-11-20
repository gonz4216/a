import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="nav">         
             <a className="nav--link__btn" href="/"> ALL ECLIPSES</a> 
             <a className="nav--link__btn" href="/"> TOTAL SOLAR</a> 
             <a className="nav--link__btn" href="/"> ANNULAR SOLAR</a> 
        </div>

        <div className="hero--container">
          <div className="hero--title__card">
            <div className="hero--title">UPCOMING ECLIPSES IN THE UNITED STATES! <hr className="hero--title__br" /></div>
            
            
            <div className="hero--title__para">On Saturday, April 30, 2022, people in parts of southern South America, Antarctica, 
            and the Pacific and Southern Oceans will have a chance to witness a partial eclipse of the Sun just before and during sunset.</div>
          </div>
         

          


          <div className="hero--countlearn">
            <div className="hero--countdowns">
              <div className="hero--countdown__total">
                <div className="hero--countdown__total-title">TOTAL SOLAR</div>
                <div className="hero--countdown__total-time">00:00:00:00:00 </div>
              </div>
              <hr className="hero--countdown__br" />
            
              <div className="hero--countdown__annular">
                <div className="hero--countdown__annular-title">ANNULAR SOLAR</div>
                <div className="hero--countdown__annular-time">00:00:00:00:00 </div>
              </div>
              

            </div>

            <div className="learn--links">
              <div className="learn--links__title"> LEARN MORE </div>
              <div className="learn--links__total pointer"> TOTAL SOLAR</div>
              <div className="learn--links__annular pointer"> ANNULAR SOLAR</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;