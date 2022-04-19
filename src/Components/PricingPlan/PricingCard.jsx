import React, { Component } from "react";
import Breifcase from "../../Assets/icons/Group 8.png";
import CheckMarkIcon from "../../Assets/icons/Icon material-check.svg";
import CheckMarkIconGrey from "../../Assets/icons/Icon material-check Grey.svg";
import '../../Styles/PricingCards.scss';
import { Link as button } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PricingCard = ({ data }) => {
  const { isActive, price, title, list, key } = data;

  const history = useHistory();
  const sendToRoute= ()=>{
    history.push("/pricing-form");
  } 
  return (
    <React.Fragment>
      <div className="card-container-choose">

      <div
        className={`pricing-card text-center position-relative mx-2 ${
          isActive ? "pricing-card-active" : ""
        }`}
      >
        {isActive ? (
          <div className="strip position-absolute">Recommended</div>
        ) : null}

        <div className="price-img-container rounded-circle mx-auto">
          <span>
            <img src={Breifcase} alt="" />
          </span>
        </div>
        <div className="price-plan-header">
          <p>
            $ {price} <span>/ month</span>
          </p>
          <h6>{title}</h6>
          <p>Some of the basic feature is included</p>
        </div>
        <ul className="list-unstyled text-start">
          {list.map((i) => (
            <li key={i.id}>
              <p className={`${i.isAvailable ? "" : "feature-not-available"}`}>
                <span>
                  <img src={i.isAvailable?CheckMarkIcon:CheckMarkIconGrey} alt="" />
                  
                </span>
                {i.feature}
              </p>
            </li>
          ))}
        </ul>
        <button onClick={sendToRoute} className={`${isActive ? "btn-active" : ""}`}>
          Choose Plan
        </button>
      </div>

      </div>
    </React.Fragment>
  );
};

export default PricingCard;
