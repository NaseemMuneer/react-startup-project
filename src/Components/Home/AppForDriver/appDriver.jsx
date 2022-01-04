import React from "react";
import Mobile from "../../../Assets/App Picture.png";
import GooglePlayIcon from "../../../Assets/icons/Icon Google play.png";
import CheckMark from "../../../Assets/icons/Group 2562.png";
import StarIcon from "../../../Assets/icons/Star Icon.png";

const AppForDriver = () => {

  return (
    <section className="appDriver-container">
      <h1>Our App For Drivers</h1>
      <p>
        We also have app for drivers where they can easily track their
        deliveries and saved the records of their deliveries how many they
        delivered and how many are remaining. And the record is also fetched in
        prsim.
      </p>

      <div className="container d-flex justify-content-evenly content-container">
        <img src={Mobile} alt="mobile" />

        <div className="app-points">
          <h3>Our App Features</h3>
          <ul className="list-unstyled">
            <div class="horizontal-divider"></div>
            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>Track Record Of Deliveries</p>
            </li>

            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>How Many Assigned Orders</p>
            </li>

            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>How Many Are Delivered</p>
            </li>

            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>How Many Are Remaining</p>
            </li>
            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>Daily Status Of Orders</p>
            </li>
            <li>
              <img src={CheckMark} alt="" />
              <hr />
              <p>Electronic Signatures</p>
            </li>
          </ul>
          <div className="text-center">
            <h6 className="fw-bold">Download Our App</h6>
            <img src={GooglePlayIcon} alt="google-card" />
          </div>
        </div>

        <img src={StarIcon} alt="star" className="StarIcon" />
      </div>
    </section>
  );
};

export default AppForDriver;
