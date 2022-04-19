import React from 'react'
import PrimaryCard from '../../Components/Common/PrimaryCard/PrimaryCard';
import Hand from '../../Assets/icons/hand.png';
import Group from '../../Assets/icons/group.png';
import Light from '../../Assets/icons/light.png';

function OurVision() {


    const cards = [
        {
            imgSource: Hand,
            title: "Easy To Use",

        },
        {
            imgSource: Group,
            title: "Customer Focus",

        },
        {
            imgSource: Light,
            title: "Smart Solutions",

        },
    ];


    return (
        <div className='vision-container'>
            <div className='vision-div d-flex flex-column'>
                <div>
                    <h1>Our Vision</h1>
                    <p>Our vision is to establish ourselves as any time value provider in the minds 
                        of our customers by providing innovative software solutions. We dream
                        to be a  trusted partner to all our customers and help them overcome their
                        business challenges with our updated software. Our vision is to remove the
                        ectic of our customers in their day to day business process and make their
                        business process friendly to all the departments in their organization.</p>
                </div>
                <div className='cards-container'>
                    <div className="d-flex justify-content-between m-auto card-div">
                        {cards.map((card) => (
                            <PrimaryCard
                                imgSource={card.imgSource}
                                title={card.title}
                                body="This covers Industries like construction,retail stores and gives 
                                you ease to get all records This covers Industries like construction,retail
                                 stores and gives you ease to get all records This covers Industries like construction,
                                 retail stores and gives you ease to get all records"
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

export default OurVision
