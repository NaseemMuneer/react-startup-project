import React from 'react'
import Check from '../../Assets/icons/check.png';

function OurMission() {
    return (
        <div className='mission-container'>

            <div className='mission-dev'>
                <div className='heading'>
                    <h1>Our Mission</h1>
                    <p>Our journey starts with our mission, which is persistent. It affirms our purpose as a company and serves as the standard against which we weigh our actions and decisions.</p>
                </div>
                <ul>
                    <li>
                        <img src={Check} alt="check" />
                        <p>We provide best solution which include useful features in a very low price.</p>
                    </li>
                    <li>
                        <img src={Check} alt="check" />
                        <p>We provide best solution which include useful features in a very low price.</p>
                    </li>
                    <li>
                        <img src={Check} alt="check" />
                        <p>We provide best solution which include useful features in a very low price.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OurMission
