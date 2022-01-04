import React from 'react';
import playBtn from '../../../Assets/icons/play-button-o.png'
import chatbtn from '../../../Assets/icons/chat.png'

function hero() {
    return (
        <div>
            <section className="hero text-center justify-content-center">
                <div className="hero-content">
                    <h4>Get a free Demo 14 days</h4>
                    <h1 className="mt-1 mb-3">
                        Best Solution For All Your Digital Problems
                    </h1>
                    <p>
                        This is the best digital tool for all your businesses which you
                        operate online it covers Industries like construction, retail stores
                        and gives you ease to get all the records in one place without
                        worrying about.
                    </p>

                    <div className="d-flex justify-content-center">
                        <button className="reqdemo button-active" active="active">
                            Request Demo - its free
                        </button>
                        <button className="hiw-btn ms-3">
                            <img src={playBtn} alt="playbtn" />
                            How it Works
                        </button>

                    </div>
                    <div className="video-holder mt-4 shadow-sm">
                    </div>

                    <div className="chat-btn">
                        <img src={chatbtn} alt="" />
                    </div>


                </div>


            </section>
        </div>
    )
}

export default hero
