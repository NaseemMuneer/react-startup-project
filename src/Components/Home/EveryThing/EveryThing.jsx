import React from 'react'
import Sketch from "../../../Assets/icons/sketch.png";
import Store from "../../../Assets/icons/store.png";
import Boxes from "../../../Assets/icons/boxes.png";
import { ReactComponent as Path } from "../../../Assets/icons/Path.svg";
import SecondaryCard from './../../Common/SecondaryCard/Secondary-Card';

function EveryThing(props) {

    const cards = [
        {
            imgSource: Sketch,
            title: "Sales Information",
            link: "/",
            
        },
        {
            imgSource: Store,
            title: "Account Management",
            link: "/",

            
        },
        {
            imgSource: Boxes,
            title: "Employee Management",
            link: "/",

        },
     
    ];

    const cards2 = [
        {
            imgSource: Sketch,
            title: "Help Center",
            link: "/",

        },
        {
            imgSource: Store,
            title: "Asset Management",
            link: "/",

        },
        {
            imgSource: Boxes,
            title: "Purchase History",
            link: "/",
        },
    ]


    return (
        <section className="construction-container">
            <div className="card-content m-auto">
                <h1>Almost Everything You Need</h1>
                <p>
                    Prism comes with Different ready to use features to help you run your business.
                </p>
                <div className="d-flex  justify-content-between">
                    {cards.map((card) => (
                        <SecondaryCard
                        imgSource={card.imgSource}
                        title={card.title}
                        link={card.link}
                        />
                    ))}
                </div>
            </div>
            <div className="">
                <div className="d-flex justify-content-between">
                    {cards2.map((card) => (
                        <SecondaryCard
                            imgSource={card.imgSource}
                            title={card.title}
                            link={card.link}
                           

                        />
                    ))}
                </div>
            </div>
            
        </section>
    )
}




export default EveryThing
