import React from 'react'
import {Link} from 'react-router-dom';
import Path from '../../Assets/icons/Path 1001.png';
import '../../Styles/_default.scss';
import PrimaryCard from '../Common/PrimaryCard/PrimaryCard';
import GlodAssets from '../../Assets/icons/gold.png';
import GroupCircle from '../../Assets/icons/group-circle.png';
import Cart from '../../Assets/icons/shopping-cart.png';
import Account from '../../Assets/icons/account.png';
import Sales from '../../Assets/icons/sales.png';
import HelpDesk from '../../Assets/icons/help-desk.png';
import '../../Styles/Pages/_Feature.scss'
import FeatureCard from '../Common/FeatureCard/FeatureCard'

function featureOverview() {

    const cards = [
        {
            imgSource: Sales ,
            title: "Sales Information",

        },
        {
            imgSource: GroupCircle,
            title: "Employee Management",

        },
        {
            imgSource: GlodAssets,
            title: "Asset Management",

        },
    ];
    const card = [
        {
            imgSource: Account ,
            title: "Account Management",

        },
        {
            imgSource: HelpDesk,
            title: "Help Center",

        },
        {
            imgSource: Cart,
            title: "Purchase History",

        },
    ];

    return (
        <div className='container-fluid feature-overview-container'>
            <div className='row feture-overview-div'>

                <div className='col-md-5'>
                    <div className='feature-div'>
                        <h1>A Comprehensive overview Of Our <span>Feature</span> </h1>
                        <p>This is the best digital tool for all your businesses which you operate online it 
                            covers Industries like construction, retail stores and gives you ease to get all
                             the records in one place without worrying about.</p>
                             <Link className='explore-link' to="#">Explore All <img src={Path} alt="path" /></Link>
                    </div>
                </div>

                <div className='col-7  shadow-lg p-0 feature-overview'>
                    <div className='d-flex feature-cards '>
                    
                    <div className="d-flex flex-column card-height">
                        {card.map((card) => (
                            <FeatureCard className="feature-card"
                                imgSource={card.imgSource}
                                title={card.title}
                                body="This is the best digital tool for all your 
                                businesses which you operate online it covers Industries like any."
                            />
                        ))}
                    </div>
                    <div className="d-flex flex-column card-height">
                        {cards.map((cards) => (
                            <FeatureCard className="feature-card"
                                imgSource={cards.imgSource}
                                title={cards.title}
                                body="This is the best digital tool for all your 
                                businesses which you operate online it covers Industries like any."
                            />
                        ))}
                    </div>
                    
                    </div>

                </div>

            </div>
        </div>
    )
}

export default featureOverview
