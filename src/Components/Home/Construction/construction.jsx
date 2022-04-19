import React from 'react'
import Sketch from "../../../Assets/icons/sketch.png";
import Store from "../../../Assets/icons/store.png";
import Boxes from "../../../Assets/icons/boxes.png";
import Path from "../../../Assets/icons/Path 1001.png";
import PrimaryCard from '../../Common/PrimaryCard/PrimaryCard';

function Construction(props) {

  const cards = [
    {
      imgSource: Sketch,
      title: "Construction Industries",
      body: "This covers Industries like ,retail stores and gives you ease to get all records This covers Industries like construction retail stores and gives you ease to get all records This covers Industries like ,retail stores and gives you ease to get all records",
      link: "/",
      learn: 'learn more',
      path: Path

    },
    {
      imgSource: Store,
      title: "Construction Retail Store",
      body: "This covers Industries like ,retail stores and gives you ease to get all records This covers Industries like construction retail stores and gives you ease to get all records This covers Industries like ,retail stores and gives you ease to get all records",
      link: "/",
      learn: 'learn more',
      path: Path
    },
    {
      imgSource: Boxes,
      title: "Construction Warehouses",
      body: "This covers Industries like ,retail stores and gives you ease to get all records This covers Industries like construction retail stores and gives you ease to get all records This covers Industries like ,retail stores and gives you ease to get all records",
      link: "/",
      learn: "learn more",
      path: Path
    },
  ];


  return (
    <section className="construction ">
      <div className="card-content-1 text-center">
        <h1>We Provide Solutions For Different Business</h1>
        <p>
          This is the best digital tool for all your businesses which you
          operate online it covers Industries like construction, retail
          <br /> stores and gives you ease to get all the records in one place
          without worrying about.
        </p>
        <div className="d-flex justify-content-between primary-card-container-2">
          {cards.map((card) => (
            <PrimaryCard
              imgSource={card.imgSource}
              title={card.title}
              body={card.body}
              learn={card.learn}
              path={card.path}

              
              />
          ))}

        </div>
      </div>
    </section>
  )
}




export default Construction
