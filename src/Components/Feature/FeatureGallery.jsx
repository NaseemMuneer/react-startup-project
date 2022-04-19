import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-simply-carousel";
import RightArrow from '../../Assets/icons/right-arrow.png'
import LeftArrow from '../../Assets/icons/left-icon.png';
import Laptop from '../../Assets/laptop.jpeg';
import Playbtn from '../../Assets/icons/play-alt.png';

function FeatureGallery() {

    const [activeSlide, setActiveSlide] = useState(0);

    return (
        <div className='feature-galler-container '>
            <div className='feature-gallery-div justify-content-center text-center'>
                <h1>Feature Video Gallery</h1>
                <p>All the features of the prism is shown in animated video. So you can easily know how the different feature of the prism works
                </p>

                <div className='carousel-div m-auto'>
                    <Carousel
                        updateOnItemClick
                        containerProps={{
                            style: {
                                width: "100%",
                                justifyContent: "space-between",
                            }
                        }}
                        activeSlideIndex={activeSlide}
                        activeSlideProps={{
                            style: {
                            }
                        }}
                        onRequestChange={setActiveSlide}
                        forwardBtnProps={{
                            children: <img src={RightArrow} alt="rightarrow" />,
                            style: {
                                width: 60,
                                height: 60,
                                minWidth: 60,
                                alignSelf: "center"
                            }
                        }}
                        backwardBtnProps={{
                            children: <img src={LeftArrow} alt="leftarrow" />,
                            style: {
                                width: 60,
                                height: 60,
                                minWidth: 60,
                                alignSelf: "center"
                            }
                        }}
                        itemsToShow={3}
                        speed={400}
                    >
                        {Array.from({ length: 4 }).map((item, index) => (
                            <div
                                style={{
                                    width: 360,
                                    height: 300,
                                    border: "30px solid white",
                                    textAlign: "center",
                                    lineHeight: "240px",
                                    boxSizing: "border-box"
                                }}
                                key={index}
                            >
                                <div className="carousel-div">
                                    <img src={Playbtn} alt="Playbtn" />
                                <p>Dashboard Animated Video</p>
                                </div>
                                
                            </div>
                        ))}
                    </Carousel>

                </div>

            </div>
        </div>
    )
}

export default FeatureGallery;