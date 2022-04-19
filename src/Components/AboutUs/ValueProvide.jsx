import React from 'react'
import PrimaryCard from '../Common/PrimaryCard/PrimaryCard';
import Security from '../../Assets/icons/security.png';
import Lock from '../../Assets/icons/padlock.png';
import User from '../../Assets/icons/user.png';

function ValueProvide() {


    const cards = [
        {
            imgSource: Security,
            title: "Quality",

        },
        {
            imgSource: User,
            title: "Integrity",

        },
        {
            imgSource: Lock,
            title: "Trust",

        },
    ];


    return (
        <div className='vision-container'>
            <div className='vision-div d-flex flex-column'>
                <div>
                    <h1>The Values We Provide</h1>
                    <p>Our journey starts with our mission, which is persistent. It affirms our purpose
                        as a company and serves as the standard against which we weigh our actions and
                        decisions.</p>
                </div>
                <div className='cards-container'>
                    <div className="d-flex justify-content-between m-auto">
                        {cards.map((card) => (
                            <PrimaryCard
                                imgSource={card.imgSource}
                                title={card.title}
                                body="This covers Industries like construction,retail stores and gives you
                                 ease to get all records This covers Industries like construction,retail stores
                                  and gives you ease to get all records This covers Industries like construction,retail
                                   stores and gives you ease to get all records"
                            />
                        ))}
                    </div>
                </div>

                <div >

                </div>

            </div>

        </div>
    )
}

export default ValueProvide
