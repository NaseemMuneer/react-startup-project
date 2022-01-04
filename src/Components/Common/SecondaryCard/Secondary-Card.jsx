import React from 'react';
import Path from "../../../Assets/icons/Path 1001.png";


function SecondaryCard(props) {
    return (
    <div className="col-12 col-lg-4 every-thing-container">
      <div className="every-dev">
       <div className='card-dev'>
       <div className="img-dev text-center">
          <img src={props.imgSource} alt="" />
        </div>
        <h4>{props.title}</h4>
        <p>This is the best digital tool for all your business which you operate online it cavers Industries Like any.</p>
        <a to="/">Learn more<span><img src={Path} alt="path" /></span></a>
       </div>
      </div>
      </div>
    )
}

export default SecondaryCard
