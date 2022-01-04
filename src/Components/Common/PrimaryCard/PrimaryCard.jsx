import React from 'react'
import { ReactComponent as Path } from "../../../Assets/icons/Path.svg";


function PrimaryCard(props) {
    return (
        <div>
        

    <div className="col-12 img-container col-lg-4">
      <div className="cardPrimary text-center p-4 m-auto">
        <div className="img-container mx-auto">
          <img src={props.imgSource} alt="" />
        </div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <a to="/">{props.learn} <span><Path /></span> </a>
      </div>
    </div>
        </div>
    )
}

export default PrimaryCard
