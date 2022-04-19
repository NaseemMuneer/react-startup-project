import React from 'react'
import { ReactComponent as Path } from "../../../Assets/icons/Path.svg";
import { Link } from 'react-router-dom';

function PrimaryCard(props) {
  return (
    <>
      <div className="container-fluid primary-card-container">
        <div className='row m-auto card-container primary-card-container-2'>
          <div className="img-container m-auto">
            <img src={props.imgSource} alt="" />
          </div>
          <div className='m-auto text-center card-body-div'>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <div className='d-flex gap-2 justify-content-center align-items-center links-div'>
              <p>{props.learn}</p>
              <div>
                <img src={props.path} alt="" />
              </div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}

export default PrimaryCard
