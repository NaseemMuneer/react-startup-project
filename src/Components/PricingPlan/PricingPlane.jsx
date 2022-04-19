import React, { Component, useState } from "react";
import { Breadcrumb, Switch, Collapse } from "antd";
import { Link } from "react-router-dom";
import '../../Styles/PricingCards.scss';
import "../../Styles/Pages/PricingPlan.scss";
import PricingCard from "./PricingCard";
import Plus from '../../Assets/icons/Plus.png';
import Minus from '../../Assets/icons/minus.png';
import Index from "./PricingForm/Index";

const { Panel } = Collapse;

const askedQuestions = [
  {
    key: 1,
    question:
      "Some of the questions which is in your mind have mentioned below with answers",
    answer:
      "This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
  },
  {
    key: 2,
    question:
      "Some of the questions which is in your mind have mentioned below with answers",
    answer:
      "This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
  },
  {
    key: 3,
    question:
      "Some of the questions which is in your mind have mentioned below with answers",
    answer:
      "This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
  },
  {
    key: 4,
    question:
      "Some of the questions which is in your mind have mentioned below with answers",
    answer:
      "This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
  },
  {
    key: 5,
    question:
      "Some of the questions which is in your mind have mentioned below with answers",
    answer:
      "This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
  },
  {
    key: 6,
    question:
      "Some of the questions which is in your mind have mentioned below with answers",
    answer:
      "This covers Industries like construction ,retail stores and gives you ease to get all records This covers Industries like construction, retail stores and gives you ease to get all records This covers Industries like construction,retail stores and gives you ease to get all records",
  },
];

const pricingCards = [
  {
    key: 1,
    imgSource: "",
    title: "Starter Plan",
    price: 9.99,
    list: [
      { id: 1, feature: "2 GB of free space", isAvailable: true },
      { id: 2, feature: "30 days of free service", isAvailable: true },
      { id: 3, feature: "30 days of free support", isAvailable: false },
      { id: 4, feature: "Create 10 users", isAvailable: false },
      { id: 5, feature: "All analytics of business", isAvailable: false },
    ],
    isActive: false,
  },
  {
    key: 2,
    imgSource: "",
    title: "Busniss Plan",
    price: 12.9,
    list: [
      { id: 1, feature: "2 GB of free space", isAvailable: true },
      { id: 2, feature: "30 days of free service", isAvailable: true },
      { id: 3, feature: "30 days of free support", isAvailable: true },
      { id: 4, feature: "Create 10 users", isAvailable: true },
      { id: 5, feature: "All analytics of business", isAvailable: false },
    ],
    isActive: true,
  },
  {
    key: 3,
    imgSource: "",
    title: "Enterprise Plan",
    price: 15.99,
    list: [
      { id: 1, feature: "2 GB of free space", isAvailable: true },
      { id: 2, feature: "30 days of free service", isAvailable: true },
      { id: 3, feature: "30 days of free support", isAvailable: true },
      { id: 4, feature: "Create 10 users", isAvailable: true },
      { id: 5, feature: "All analytics of business", isAvailable: true },
    ],
    isActive: false,
  },
];



const PricingPlan = () => {

  const [switchState, setswitchState] = useState(true);

  const handleSwitch = (check) => {
    setswitchState(check);
  };

  return (
    <React.Fragment>
      <section className="pricing-plan-top text-center hero-div">
        <div className="text-start bread-link">

          <Breadcrumb className="">
            <Breadcrumb.Item className="link-distory-div "><Link className="links-history" to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link className="links-history-current" to="/Contact Information">Pricing Plan</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <h1>Pricing Plan</h1>
        <div className='under-shade m-auto'></div>
        <p className="pricing-intro">
          We offer different pricing plan options for users our pricing includes
          Starter, Business & Enterprise Plans.
        </p>
        <p className="text-center switch-yearly">
          Monthly <Switch className="" defaultChecked onChange={handleSwitch} />{" "}
          Yearly
          {switchState ? <Link className="ms-1 text-white">Save 30%</Link> : null}
        </p>

        <div className="d-flex d-lg-flex  justify-content-center align-items-center">
          {pricingCards.map((card) => (
            <PricingCard data={card} />
          ))}
        </div>

      </section>
      <div className="pricingPlan-wrapper">
        <section className="ask-questions">
          <h1>Frequently Asked Questions</h1>
          <p>

            Some of the questions which is in your mind have mentioned below
            with answers
          </p>
          {askedQuestions.map((aq) => (

            <div className="my-3 collapse-div">


              <Collapse
                defaultActiveKey={["2"]}
                className="site-collapse"
                ghost
                expandIcon={({ isActive }) => isActive ? <img src={Minus} alt="" /> : <img src={Plus} alt="" />}
              >

                <Panel
                  header={aq.question}
                  key={aq.key}
                  className="site-collapse-custom-panel"
                >
                  <p>{aq.answer}</p>
                </Panel>
              </Collapse>
            </div>
          ))}
        </section>
      </div>
    </React.Fragment>
  );
};

export default PricingPlan;
