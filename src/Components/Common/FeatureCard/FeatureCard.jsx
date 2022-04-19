import React from 'react'

function FeatureCard(props) {
  return (
    <>
      <div className="container feature-card-container p-0">
        <div className='d-flex  feature-card-div'>
          <div className="feature-img-container">
            <img src={props.imgSource} alt="" />
          </div>
          <div className='m-auto text-center feature-card-body-div'>
            <h4>{props.title}</h4>
            <p>{props.body}</p>
          </div>
          </div>
        </div>
    </>
  )
}

export default FeatureCard
